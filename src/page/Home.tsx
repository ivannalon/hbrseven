import herofirst from "../assets/herofirst.png"
import { Card } from "../components/Card"
import { Flower } from "../components/Flower"
import { Flower1 } from "../components/Flower1"
import { Flower2 } from "../components/Flower2"
import { Flower3 } from "../components/Flower3"
import { Header } from "../components/Header"
import { Hireguide } from "../components/Hireguide"
import { Lupa } from "../components/Lupa"
import { Shelterbuddy } from "../components/Shelterbuddy"

export function Home() {
  return(
    <div className="mx-2">
      <Header/>
      <div className="flex items-center justify-center gap-14 h-[545px]">
        <div>
          <Card/>
          <img/>
        </div>

        <div className="grid grid-cols-4 items-center gap-6">
          <div className="flex items-center justify-center h-[511px] border-[5px] border-black drop-shadow-[7px_7px_0px_#030303] bg-red-500 cursor-pointer hover:h-[545px] transition-all">
            <Hireguide/>
          </div>

          <div className="flex flex-col justify-between h-[511px] border-[5px] border-black drop-shadow-[7px_7px_0px_#030303] bg-orange-300 cursor-pointer hover:h-[545px] transition-all">
            <Flower/>
            <Flower1/>
            <Flower2/>
            <Flower3/>
          </div>

          <div className="flex items-center justify-center h-[511px] border-[5px] border-black drop-shadow-[7px_7px_0px_#030303] bg-white cursor-pointer hover:h-[545px] transition-all">
            <Shelterbuddy/>
          </div>

          <div className="flex items-center justify-center h-[511px] border-[5px] border-black drop-shadow-[7px_7px_0px_#030303] bg-blue-500 cursor-pointer hover:h-[545px] transition-all">
            <Lupa/>
          </div>
        </div>
      </div>
    </div>
  )
}