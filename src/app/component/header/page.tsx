import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{faPen, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import Potatoicon from "./../../media/Home-removebg-preview (1).png"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
interface message {
    fortext: string
    foricon: string
}
type normalF = () => void

export default function Header({fortext, foricon}: message){
    let [Penicon, setPenicon] = useState<string>()
    let [Arrowicon, setArrowicon] = useState<string>('hiddenblock')
    let [Headertext, setHeadertext] = useState<string>()
    const router = useRouter()

    const peniconT:normalF = () => {
        setPenicon("display")
        setArrowicon("hiddenblock")
    }
    const arrwoiconT: normalF = () => {
        console.log("it render the arrow")
        setPenicon("hiddenblock")
        setArrowicon("display")
    }
    const handlelocation:normalF = () => {
        router.push("/")
        setArrowicon("hiddenblock")
    }

    useEffect(() => {
        console.log("it re-rendering the text")
        fortext ? setHeadertext("Please go back") : setHeadertext("")
    }, [fortext])

    useEffect(() => {
        console.log("the icon is re-rendering")
        foricon === "pen" ? console.log(Arrowicon) : arrwoiconT()
    }, [foricon])


    
    
        return(<>
        <header>
            <div className="header-main-con">
                <div className="header-potato-icon" >
                    <Image width={40} src={Potatoicon} alt="Potato_Icon" ></Image>
                    <h3 className={`header-display-text`} >{Headertext}</h3>
                </div>
                <div className={`header-edit-icon ${Arrowicon}`}>
                    <FontAwesomeIcon onClick={handlelocation} className={`edit-icon`} icon={faChevronLeft}/>
              </div>
            </div>
        </header>
        </>)
}