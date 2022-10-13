import React from "react"

export default function info(){
    return(
        <header>
                        <img src="../src/img/photo.jpeg" alt="Photo" className = "img"/>
                        <p className="name h4">Tom Leonard Abella</p>
                        <p className="career h6">Frontend Developer</p>
                        <p className="website h6"><a href="https://tom-abella.github.io/Portfolio/"target="_blank">tom-abella.github.io/Portfolio/</a></p>
                        <a href="mailto:tomlenoardabella@gmail.com" target="_blank"><button className="email"> <i className="fa fa-envelope" aria-hidden="true"></i>Email</button></a>
                        <a href="https://www.linkedin.com/in/tom-leonard-abella/" target="_blank"><button className="linkedIn"> <i className="fa fa-linkedin-square" aria-hidden="true"></i>LinkedIn</button></a>
            </header>
        
    )

}