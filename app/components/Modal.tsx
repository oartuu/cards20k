// app/components/Modal.tsx
import React from "react";

export default function Modal({
  open,
  title,
  message,
  onClose,
  primaryLabel = "OK",
}: {
  open: boolean;
  title?: string;
  message: string;
  onClose: () => void;
  primaryLabel?: string;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md p-6 bg-white rounded-xl shadow-xl text-black">
        {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
        <p className="mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-brand-primary text-white rounded-md"
          >
            {primaryLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
