import {Link} from "react-router-dom";
import logo from './img/logo1.png'



function onMenuClick(){
    const navbar = document.querySelector(".desktop-navbar")
    const button = document.querySelector(".mobile-menu-button")
    const mobileNavbar = document.querySelector(".mobile-navbar")
    const isVisible = navbar.getAttribute('data-visible')

    if(isVisible==="false"){
        navbar.setAttribute("data-visible",true )
        button.setAttribute("aria-expanded", true)
        mobileNavbar.setAttribute('data-visible',false)
    }
    else {
        navbar.setAttribute("data-visible",false )
        button.setAttribute("aria-expanded", false)
        mobileNavbar.setAttribute('data-visible',true)
    }
}
function hideMenu(){
    const navbar = document.querySelector(".desktop-navbar")
    const button = document.querySelector(".mobile-menu-button")
    navbar.setAttribute("data-visible",false )
    button.setAttribute('aria-expanded', false)
}

function Header() {
    return (
        <div className="header">
            <div className="mobile-navbar" data-visible = "true">
                <div className="mobile-navbar-logo " >
                    <Link to="/">TEST NAME</Link>
                </div>
            </div>
            <button onClick={onMenuClick}  aria-controls="navbar-container" className="mobile-menu-button" aria-expanded="false"><span className="sr-only"></span></button>

            <div id="navbar-container" className="desktop-navbar" data-visible="false">
                <img className="header-logo" src={logo} alt="site-logo"/>
                <div className="header-bar-nav-items nav-menu-list">
                    <div className="header-item header-button nav-menu-list-el"><Link to="/"><span onClick={hideMenu} aria-hidden="true">На главную</span> </Link></div>
                    <div className="header-item header-button nav-menu-list-el"><a href="#"><span aria-hidden="true">О нас</span></a></div>
                    <div className="header-item header-button nav-menu-list-el"><a href="#"><span aria-hidden="true">Контакты</span></a></div>
                </div>
                <div className="header-bar-nav-items header-buttons">
                    <div className="header-item header-button enter-btn"><Link to="/entrance"><span onClick={hideMenu} aria-hidden="true">Войти</span></Link></div>
                    <div className="header-item header-button create-btn"><Link to="/registration"><span aria-hidden="true" onClick={hideMenu}>Создать аккаунт</span></Link></div>
                </div>
            </div>
        </div>
    );
}

export default Header;