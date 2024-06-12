import Image from "next/image"
import potatoimage from './../media/Home-removebg-preview (1).png'

export default function Creator(){
    return(<> 
    <div className="creator-img-con" >
        <Image id="creator-img" src={potatoimage} alt="This is an Creator of this page" ></Image>
    </div>
    </>)
}