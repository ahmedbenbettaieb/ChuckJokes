import React from "react"; 
import logo from "../assets/wall.png"
export function Wallpaper(){
    return(
        <div className="wall-container">
            <img src={logo} alt="wallpaper" className="wallpaper" />
            <p className="centered">The Joke Bible</p>
            
        </div>
        

    )
}