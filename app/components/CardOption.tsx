// app/components/CardOption.tsx
export default function CardOption({
  text,
  onClick,
  disabled = false,
}: {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-4 w-1/6 h-52 rounded-lg shadow-2xl transition-all transform hover:-translate-y-1
        ${disabled ? "opacity-40 pointer-events-none" : "bg-brand-light hover:bg-brand-primary-dark"}`}
    >
      <div className="h-full flex items-center justify-center text-center">
        <span>{text}</span>
      </div>
    </button>
  );
}
