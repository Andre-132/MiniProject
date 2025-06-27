"use client";

interface DeleteButtonProps {
  onClick: () => void;
  label?: string;
  className?: string;
}

export default function DeleteButton({
  onClick,
  label = "Delete",
  className = "",
}: DeleteButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`text-red-600 hover:underline text-sm ${className}`}
    >
      {label}
    </button>
  );
}
