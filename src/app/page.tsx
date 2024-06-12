'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Footer from './component/footer/page.jsx';
import './globals.css'
import ReactConfetti from 'react-confetti';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{faCheck, faX} from '@fortawesome/free-solid-svg-icons'
import { useSearchParams } from "next/navigation";
import { Autour_One } from "next/font/google";


let count: number = 0;
let count4render: number = 0;
let countmute:number = 0
let mute:boolean = false;
let userdata: Array<string> = []
export default function Home() {
  //let confetti = require('canvas-confetti')
  let [Displayopt, setDisplayopt] = useState<string>('none')
  let [DisplayCL, setDisplayCL] = useState<string>("hiddenblock")
  let [DisplayH, setDisplayH] = useState<string>()
  let [TriggerRender, setTriggerRender] = useState<string | number>()
  let [Mutebtn, setMutebtn] = useState<string>('')
  let uservalue: string | number;
  let soundeffect = new Audio("sentsoundV2.wav")
  let missionsucess = new Audio("Mission-passed-sound.wav")

  type parameter = string | number;
  const Muteaudio = (audio:HTMLAudioElement) => {
    audio.muted = true;
    audio.pause();
  }

  
  function handlecontent(elementuser:parameter){
    console.log("THE CLICK IS POSITIVE")
    if(!mute){
      missionsucess.play()
      setTimeout(() => {
        window.alert("Congratulations :b")
      }, 8000);
    }
    else{window.alert("Congratulations :b")}
    let finddata:number = userdata.findIndex((element:parameter) => element === elementuser)
    userdata.splice(finddata, 1)
  }
  console.log("THE WHOLE PAGE HAS BEEN RENDERED")
  function handleicon(){
    console.log('It render in page.tsx')
    count ++
    if(count % 2 === 0){
      setDisplayCL("hiddenblock")
      setDisplayH("")
    }
    else{
      setDisplayH("hiddenblock")
      setDisplayCL("")
    }
  }
  const handlesubmit = () => {
    let userinput = document.getElementById("editor-input") as HTMLInputElement
    uservalue = userinput.value
    if(uservalue){
      userdata.push(uservalue)
    console.log(userdata)
      if(!mute){
        soundeffect.play()
        setTimeout(() => {
          window.alert("GOOD NEWS!, Your item has been created")
        }, 1000);
      }
      else{window.alert("GOOD NEWS!, Your item has been created")}
    }
    else{
      window.alert("Please insert something to add to the list")
    }
  }

  const handledelete = (elementuser:parameter) => {
    console.log("IT CLICKED ON DELETE")
    let finddata:number = userdata.findIndex((element:parameter) => element === elementuser)
    userdata.splice(finddata, 1)
  }
  const handletrigger = () => {
    count4render ++
    setTriggerRender(count4render)
  }
  const handlemute = () => {
    countmute ++
    if(countmute % 2 === 0){
      mute = false;
      setMutebtn('')
    }
    else{
      mute = true; 
      setMutebtn('red')
    }
    //Muteaudio()
  }

  return (<>
  <section className={`section-home-con ${DisplayH}`}>
  
  <div className={`home-main-con`}>
    <div className="home-title-con" >
        <h2 >Welcome back! Potato</h2>
        <div className='home-mutebtn-con' >
          <button onClick={handlemute} className={`mute-btn ${Mutebtn}`} >Mute</button>
        </div>
        <h1 id="home-todolist-title" >TO DO LIST</h1>
      
    </div>
    {userdata.map((element:string):any => {
      return(<>
<div className="home-content-con" >
      <div className="home-content-child">
            <div  className="home-content-subchild">
              
                  <div className={`home-content-icon ${Displayopt}`}>
                    <div className='home-content-Xcon-property' >
                      <div className="home-content-Xicon">
                        <FontAwesomeIcon onClick={() => {handledelete(element); handletrigger()}} id="Xicon" icon={faX} />
                      </div>
                    </div>
                    <div onClick={() => {handlecontent(element); handletrigger()}} className='home-content-title-con' >
                      <h3 id="home-content-title" >{element}</h3>
                    </div>                   
            
                  </div>
            </div>
        <div>
        </div>
      </div>
    </div>
      </>)
    })}

    
  </div>
  </section>

  <div className={`Editor-section ${DisplayCL}`}>
  <div className="home-main-con">
        <div className="home-title-con" >
            <h2 >What you want to do Today?</h2>
          <div className='home-mutebtn-con' >
            <button onClick={handlemute} className={`mute-btn ${Mutebtn}`} >Mute</button>
          </div>
            <h1 id="home-todolist-title" >Create LisT</h1>
        </div>
        <div className="editor-main-con">
            <div className="editor-con">
                <div className="editor-input-con">
                    <input id="editor-input" placeholder="Enter Your list"></input>
                </div>
                <br/>
                <div className="editor-submit-con">
                    <button id="editor-submit" onClick={handlesubmit}>Submit</button>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div>
    <Footer callback={handleicon}></Footer>
  </div>
  
  </>
  );
}
