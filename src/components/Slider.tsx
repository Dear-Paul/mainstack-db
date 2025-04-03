import { ReactNode } from 'react';

interface SliderProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Slider({ isOpen, onClose, children }: SliderProps) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#8d8f93] opacity-50"
        onClick={onClose}
      />

      {/* Slider Panel */}
      <div
        className={`absolute top-0 right-0 w-[525px] h-full bg-white shadow-lg rounded-2xl p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-10 right-10 text-xl text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
