'use client'
import { useRouter } from "next/navigation"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./../../globals.css"
import Link from "next/link"
import { useEffect, useState } from "react"
interface callback {
    callback: () => void
}
let count:number = 0;
export default function Footer({callback}:callback){
    let [Spinicon, setSpinicon] = useState<string>()
    let [Barhometext, setBarhometext] = useState<string>("")
    const router = useRouter()
    const editorpage = () => console.log("under maintanence")
    useEffect(() => {}, [])
    const handlespin = () => {
        count ++
        console.log("it trigger in footer componenent")
       if(count % 2 === 0){
        setSpinicon("spiniconback")
        setTimeout(() => {
            setSpinicon("")
            setBarhometext("")
        }, 1000);
       }
       else{
        setSpinicon("spinicon")
        setTimeout(() => {
            setSpinicon("freezespin")
            setBarhometext("hidden")
        }, 1000);
       }

    }
    return(<>
    <footer className="footer-main-con">
        <div className="footer-sub-con" >
            <div className="footer-home-con" >                
                <Link className={`footer-home ${Barhometext}`} href='/'>Home</Link>
            </div>
            <div className="plus-icon-con" >
                <div className={`plus-icon ${Spinicon}`}>
                    <svg onClick={() => {callback(); handlespin()}} id="plus-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                    fill="white"/></svg>
                </div>
            </div>
            <div className="footer-creator-con">
                <Link className="footer-creator" href='/creator'>Creator</Link>
            </div>
            {/*<div><h2 className="footer-creator" onClick={callback} >Creator</h2></div>*/}
        </div>
    </footer>
    </>)
}