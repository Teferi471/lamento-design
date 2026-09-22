import React, { useState, useRef } from 'react';
import { 
  UploadCloud, 
  Image as ImageIcon, 
  X, 
  Trash2, 
  Plus, 
  Eye, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { UploadedPhoto } from '../types';

interface PhotoUploadZoneProps {
  photos: UploadedPhoto[];
  onPhotosChange: (photos: UploadedPhoto[]) => void;
  label?: string;
  hint?: string;
  maxFiles?: number;
  maxSizeMb?: number;
  compact?: boolean;
  idPrefix?: string;
}

export const PhotoUploadZone: React.FC<PhotoUploadZoneProps> = ({
  photos,
  onPhotosChange,
  label = 'Upload Photo / Project Files',
  hint = 'Drag & drop photos or raw assets, or browse from device (JPG, PNG, WEBP, PSD, RAW up to 25MB)',
  maxFiles = 8,
  maxSizeMb = 25,
  compact = false,
  idPrefix = 'photo-upload'
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [previewModalPhoto, setPreviewModalPhoto] = useState<UploadedPhoto | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const processFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setErrorMessage(null);

    const newPhotos: UploadedPhoto[] = [...photos];
    const maxSizeBytes = maxSizeMb * 1024 * 1024;

    Array.from(files).forEach((file) => {
      if (newPhotos.length >= maxFiles) {
        setErrorMessage(`Maximum ${maxFiles} photos allowed.`);
        return;
      }

      if (file.size > maxSizeBytes) {
        setErrorMessage(`"${file.name}" exceeds maximum allowed size of ${maxSizeMb}MB.`);
        return;
      }

      // Check if file is already added
      const exists = newPhotos.some(
        (p) => p.name === file.name && p.size === file.size
      );
      if (exists) return;

      const previewUrl = file.type.startsWith('image/')
        ? URL.createObjectURL(file)
        : '';

      newPhotos.push({
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: file.name,
        size: file.size,
        type: file.type || 'image/unknown',
        previewUrl,
        file
      });
    });

    onPhotosChange(newPhotos);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      processFiles(e.target.files);
    }
    // reset input value so re-uploading same file triggers change
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemovePhoto = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const photoToRemove = photos.find((p) => p.id === id);
    if (photoToRemove?.previewUrl && photoToRemove.previewUrl.startsWith('blob:')) {
      URL.revokeObjectURL(photoToRemove.previewUrl);
    }
    const filtered = photos.filter((p) => p.id !== id);
    onPhotosChange(filtered);
    if (previewModalPhoto?.id === id) {
      setPreviewModalPhoto(null);
    }
  };

  const handleClearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    photos.forEach((p) => {
      if (p.previewUrl && p.previewUrl.startsWith('blob:')) {
        URL.revokeObjectURL(p.previewUrl);
      }
    });
    onPhotosChange([]);
    setErrorMessage(null);
  };

  return (
    <div className="w-full space-y-3">
      {/* Label and Status */}
      <div className="flex items-center justify-between">
        <label 
          htmlFor={`${idPrefix}-input`}
          className="block text-xs font-semibold uppercase tracking-wider text-neutral-300"
        >
          {label}
        </label>
        {photos.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {photos.length} {photos.length === 1 ? 'photo' : 'photos'} ready
            </span>
            <button
              type="button"
              onClick={handleClearAll}
              className="text-[11px] text-neutral-400 hover:text-red-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Trash2 className="w-3 h-3" />
              Clear
            </button>
          </div>
        )}
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        id={`${idPrefix}-input`}
        name={`${idPrefix}-files`}
        accept="image/png,image/jpeg,image/jpg,image/webp,image/tiff,image/svg+xml,.raw,.cr2,.nef,.arw,.psd"
        multiple
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Drag and Drop Zone */}
      <div
        id={`${idPrefix}-dropzone`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-2xl transition-all duration-200 cursor-pointer text-center ${
          compact ? 'p-4' : 'p-6 sm:p-7'
        } ${
          isDragging
            ? 'border-[#d4af37] bg-[#d4af37]/10 scale-[1.01] shadow-[0_0_25px_rgba(212,175,55,0.2)]'
            : 'border-white/15 bg-[#121212]/80 hover:border-[#d4af37]/60 hover:bg-[#161616]'
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className={`rounded-xl flex items-center justify-center transition-colors ${
            isDragging 
              ? 'bg-[#d4af37] text-black' 
              : 'bg-[#1e1e1e] text-[#d4af37] border border-white/10'
          } ${compact ? 'w-10 h-10' : 'w-12 h-12'}`}>
            <UploadCloud className={compact ? 'w-5 h-5' : 'w-6 h-6'} />
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-white">
              <span className="text-[#d4af37] underline underline-offset-2">Click to upload photo</span> or drag and drop
            </p>
            <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
              {hint}
            </p>
          </div>

          <div className="pt-1 flex flex-wrap items-center justify-center gap-2 text-[10px] text-neutral-500 font-mono">
            <span className="px-2 py-0.5 rounded bg-black/40 border border-white/5">JPG / PNG / WEBP</span>
            <span className="px-2 py-0.5 rounded bg-black/40 border border-white/5">RAW / CR2 / NEF</span>
            <span className="px-2 py-0.5 rounded bg-black/40 border border-white/5">PSD / TIFF</span>
            <span className="px-2 py-0.5 rounded bg-black/40 border border-white/5">Max {maxSizeMb}MB</span>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-950/40 border border-red-800/50 text-red-300 text-xs">
          <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Uploaded Photos Preview Grid */}
      {photos.length > 0 && (
        <div className="space-y-2 pt-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 flex items-center justify-between">
            <span>Attached Photos ({photos.length}/{maxFiles})</span>
            <span className="text-[11px] font-normal text-neutral-500 lowercase">Click preview to inspect</span>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {photos.map((photo) => (
              <div
                key={photo.id}
                id={`${idPrefix}-item-${photo.id}`}
                className="group relative rounded-xl bg-[#171717] border border-white/10 hover:border-[#d4af37]/50 overflow-hidden flex flex-col transition-all duration-150 shadow-md"
              >
                {/* Thumbnail Image */}
                <div 
                  className="relative aspect-video sm:aspect-square w-full bg-[#0d0d0d] overflow-hidden flex items-center justify-center cursor-pointer"
                  onClick={() => setPreviewModalPhoto(photo)}
                >
                  {photo.previewUrl ? (
                    <img
                      src={photo.previewUrl}
                      alt={photo.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-3 text-neutral-500">
                      <ImageIcon className="w-8 h-8 text-[#d4af37]/60 mb-1" />
                      <span className="text-[10px] uppercase font-mono font-bold">
                        {photo.name.split('.').pop() || 'FILE'}
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay with Inspect Icon */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <span className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-xs">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Delete Button */}
                  <button
                    type="button"
                    onClick={(e) => handleRemovePhoto(photo.id, e)}
                    className="absolute top-1.5 right-1.5 p-1 rounded-full bg-black/70 hover:bg-red-600 text-white border border-white/10 transition-colors cursor-pointer z-10"
                    title="Remove Photo"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* File Meta */}
                <div className="p-2 bg-[#141414] border-t border-white/5">
                  <p className="text-xs text-white font-medium truncate" title={photo.name}>
                    {photo.name}
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-neutral-400 mt-0.5">
                    <span>{formatFileSize(photo.size)}</span>
                    <span className="uppercase text-[#d4af37] font-mono text-[9px]">
                      {photo.name.split('.').pop() || 'IMG'}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Add More Slot */}
            {photos.length < maxFiles && (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="rounded-xl border border-dashed border-white/15 hover:border-[#d4af37] bg-[#121212] hover:bg-[#191919] text-neutral-400 hover:text-[#d4af37] flex flex-col items-center justify-center p-4 transition-all duration-150 min-h-[100px] cursor-pointer group/add"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 group-hover/add:bg-[#d4af37]/20 flex items-center justify-center mb-1.5 transition-colors">
                  <Plus className="w-4 h-4 text-neutral-400 group-hover/add:text-[#d4af37]" />
                </div>
                <span className="text-[11px] font-medium">Add More</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Expanded Photo Preview Modal */}
      {previewModalPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPreviewModalPhoto(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-[#141414] border border-[#d4af37]/30 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div className="pr-4 truncate">
                <h4 className="text-sm sm:text-base font-bold text-white truncate">
                  {previewModalPhoto.name}
                </h4>
                <p className="text-xs text-neutral-400">
                  {formatFileSize(previewModalPhoto.size)} • {previewModalPhoto.type || 'Photo File'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPreviewModalPhoto(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[65vh] flex items-center justify-center bg-black/50 rounded-xl overflow-hidden p-2">
              {previewModalPhoto.previewUrl ? (
                <img
                  src={previewModalPhoto.previewUrl}
                  alt={previewModalPhoto.name}
                  className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-md"
                />
              ) : (
                <div className="p-12 text-center text-neutral-400">
                  <ImageIcon className="w-16 h-16 mx-auto mb-3 text-[#d4af37]" />
                  <p className="text-sm font-semibold text-white">RAW / Vector / PSD File</p>
                  <p className="text-xs text-neutral-400 mt-1">Ready for high-end studio editing</p>
                </div>
              )}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleRemovePhoto(previewModalPhoto.id)}
                className="px-4 py-2 rounded-xl bg-red-950/50 hover:bg-red-900 border border-red-800/60 text-red-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Remove Photo
              </button>
              <button
                type="button"
                onClick={() => setPreviewModalPhoto(null)}
                className="px-5 py-2 rounded-xl bg-[#222] hover:bg-[#333] text-white text-xs font-semibold cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
