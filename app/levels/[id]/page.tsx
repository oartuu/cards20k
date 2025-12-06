
export default function Page() {
    
  return (
    <div
      className="flex min-h-screen w-dvw justify-between gap-4"
      style={{ backgroundImage: "url('/texture.jpg')" }}
    >
      <aside className=" flex-1 flex flex-col justify-center pl-2">
        <div className="flex flex-col justify-evenly gap-2">
          <div className="bg-brand-primary rounded-full h-16 w-16"></div>
          <div className="bg-brand-primary rounded-full h-16 w-16"></div>
          <div className="bg-brand-primary rounded-full h-16 w-16"></div>
        </div>
      </aside>

      <main className="flex-4 flex flex-col justify-between items-center py-6 ">
        <div className="bg-brand-background text-brand-gray  w-5/6 flex items-center justify-center h-16 rounded-sm">
          pergunta
        </div>
        <div className=" w-full flex justify-evenly items-center text-brand-gray">
          <div className="p-4 w-1/6 h-52 rounded-lg shadow-2xl bg-brand-light">
            resposta1
          </div>
          <div className="p-4 w-1/6 h-52 rounded-lg shadow-2xl bg-brand-light">
            resposta1
          </div>
          <div className="p-4 w-1/6 h-52 rounded-lg shadow-2xl bg-brand-light">
            resposta1
          </div>
          <div className="p-4 w-1/6 h-52 rounded-lg shadow-2xl bg-brand-light">
            resposta1
          </div>
        </div>
      </main>
    </div>
  );
}
