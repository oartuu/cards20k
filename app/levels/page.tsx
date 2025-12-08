// app/levels/page.tsx

import Selector from "./selector";



export default function Page() {

  return (

    <div

      className="flex min-h-screen w-dvw items-end justify-center px-8"

      style={{ backgroundImage: "url('/texture.jpg')" }}

    >

      <div className="flex justify-between items-end w-full">

        <Selector phase={1} />

        <Selector phase={2} />

        <Selector phase={3} />

        <Selector phase={4} />

      </div>

    </div>

  );

}