export default function page() {
  return (
    <div
      className="flex min-h-screen w-dvw items-start justify-center px-8"
      style={{ backgroundImage: "url('/texture.jpg')" }}
    >
      <div
        className="w-full h-dvh bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/game-over.svg')" }}
      ></div>
    </div>
  );
}
