import {Link} from "react-router-dom";

function DynamicPageHeader() {
    return (
        <div className="header">
            <div className="header-item header-logo"><a href="#">TEST <span>NAME</span></a></div>
            <div className="header-bar-nav-items nav-menu-list">
                <div className="header-item header-button"><Link to="/"> На главную </Link></div>
                <div className="header-item header-button"><a href="#">О нас</a></div>
                <div className="header-item header-button"><a href="#">Контакты</a></div>
            </div>
            <div className="header-bar-nav-items header-buttons">
                <div className="header-item header-button enter-btn"><a href="#">Войти</a></div>
                <div className="header-item header-button create-btn"><Link to="/registration">Создать аккаунт</Link></div>
            </div>
        </div>
    );
}

export default DynamicPageHeader;