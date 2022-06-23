import {FaLinkedinIn, FaInstagram, FaGithub} from "react-icons/fa"
import br from "../assets/flag-br.svg"
import gb from "../assets/flag-gb.svg"

export function Header() {
  return(
    <div className="flex gap-[750px] justify-center items-center mt-6 my-8">
      <a href="#" className="p-3 border-[3px] border-black drop-shadow-[4px_4px_0px_#030303] bg-orange-300 font-bold">HERBERTFRAN.CO</a>

      <div className="flex" >
        <div className="flex gap-4 items-center">
          <a href="" className="p-1 border-[3px] border-black drop-shadow-[4px_4px_0px_#030303] bg-orange-300">
            <FaGithub size={20}/>
          </a>

          <a href="" className="p-1 border-[3px] border-black drop-shadow-[4px_4px_0px_#030303] bg-orange-300">
            <FaInstagram size={20}/>
          </a>
          
          <a href="" className="p-1 border-[3px] border-black drop-shadow-[4px_4px_0px_#030303] bg-orange-300">
              <FaLinkedinIn size={20}/>
          </a>
        </div>
        <div className="flex items-center gap-4 ml-12">
          <a className="border-[3px] border-black" href=""> 
          <img src={br} alt="" />
          </a>

          <a className="border-[3px] border-black" href=""> 
          <img src={gb} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}