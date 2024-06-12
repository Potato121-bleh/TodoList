'use client'
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import user_list from "../database/page"
export default function NewList(){
    
    return(<>
    <div className="home-main-con">
        <div className="home-title-con" >
            <h2 >What you want to do Today?</h2>
            <h1 id="home-todolist-title" >Create LisT</h1>
        </div>
        <div className="editor-main-con">
            <form className="editor-con">
                <div className="editor-input-con">
                    <input id="editor-input" name="userinput" placeholder="Enter Your list"></input>
                </div>
                <br/>
                <div className="editor-submit-con">
                    <button id="editor-submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
    </>)
}