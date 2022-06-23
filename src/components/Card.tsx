import close from "../assets/close.png"

export function Card(){
  return(
    <div className="flex-1 h-[520px] w-[750px] border-[8px] drop-shadow-[7px_7px_0px_#030303] border-black rounded-3xl bg-white overflow-hidden">
      <header className="flex justify-end bg-red-500 p-3 py-3">
        <a href="">
          <img src={close} alt="" />
        </a>
      </header>

      <div>
        <strong>SHELTERBUDDY</strong>
        <span>Product Designer</span>
      </div>

      <div>
        Técnologias
      </div>

      <p></p>

      <footer>
        <a href=""></a>
        <a href=""></a>
      </footer>
    </div>
  )
}