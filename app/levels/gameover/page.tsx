export default function page() {
  return (
    <div
      className="flex min-h-screen w-dvw items-start justify-center px-8"
      style={{ backgroundImage: "url('/texture.jpg')" }}
    >
      <div
        className="w-4/5 h-[890px] bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/game-over.svg')" }}
      ></div>
    </div>
  );
}
