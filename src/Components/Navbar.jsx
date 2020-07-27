import React from 'react'
import Youtube from 'react-youtube'
const Navbar = () => {
    const [show,handleShow]= React.useState(false);
    React.useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);

            }else{
                handleShow(false);
            }
        });
        return()=>{
            window.removeEventListener("scroll");
        };
    },[]);
    
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img src="https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png" alt="netflix ka logo" className="nav__logo"/>    
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="netflix ka logo" className="nav__avatar"/>    

        </div>
    )
}

export default Navbar
