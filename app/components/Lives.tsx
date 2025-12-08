// app/components/Lives.tsx
export default function Lives({ lives }: { lives: number }) {
  return (
    <div className="flex flex-col justify-evenly gap-2">
      <div className={`rounded-full h-16 w-16 ${lives >= 1 ? "bg-brand-primary" : "bg-brand-gray"}`}></div>
      <div className={`rounded-full h-16 w-16 ${lives >= 2 ? "bg-brand-primary" : "bg-brand-gray"}`}></div>
      <div className={`rounded-full h-16 w-16 ${lives >= 3 ? "bg-brand-primary" : "bg-brand-gray"}`}></div>
    </div>
  );
}
