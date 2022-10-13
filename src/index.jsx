import React from "react"
import ReactDOM from "react-dom/client"
import Info from "./Info"
import About from "./About"
import Interest from "./Interest"
import Footer from "./Footer"
const container = document.getElementById("root")

const root =ReactDOM.createRoot(container)


function Page(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-5 wrapper">
                    <Info/>
                    <About/>
                    <Interest/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
    
}

root.render(<Page/>)