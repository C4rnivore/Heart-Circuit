import React from 'react';
import pfp_icon from './img/pfp_icon.svg'

function checkInput(){
    const login = document.getElementById("login-input")
    const password = document.getElementById("password-input")
    const repeatedPassword = document.getElementById("repeat-password-input")
    const errorArea = document.getElementById("error-label")

    if(login.value === "" || password.value === ""|| repeatedPassword.value === "")
        errorArea.innerHTML="Необходимо заполнить все поля!";
    else if(password.value !== repeatedPassword.value)
        errorArea.innerHTML="Пароли не совпадают!";
    else if(password.value.length < 6)
        errorArea.innerHTML="Минимальная длина пароля - 6 символов";
    else
        errorArea.innerHTML="ОК!";
}


function Registration() {
    return (
        <div className="registration-page-container">
            <div className="reg-panel-mobile">
                <div className="input-panel-mobile">
                    <img className="reg-icon" src={pfp_icon} alt={""} />
                    <span className="input-text reg-label">
                        Регистрация учетной записи
                    </span>
                    <span className="input-text reg-sub-label">
                        <i>Заполните поля ниже</i>
                    </span>
                    <div className="input-fields-container">
                        <input id="login-input"  type="text" name="txt" placeholder=" Имя пользователя "/>
                        <input id="password-input" minLength={6} type="password" name="pswd" placeholder=" Пароль"/>
                        <input id="repeat-password-input" minLength={6} type="password" name="pswd" placeholder=" Повтор пароля"/>
                    </div>
                    <div id="error-label"><p></p></div>
                    <button onClick={checkInput} className="create-button">
                        Создать учетную запись
                    </button>
                    <p className="agreement">Создавая учетную запись, я принимаю условия <a>Пользовательского соглашения </a>
                        и даю согласие на обработку моих персональных данных в соответствии с Федеральным законом
                        XXXXXXX "О персональных данных".
                    </p>
                </div>
            </div>

            <div className="reg-panel">
                <div className="input-panel">
                    <img src={pfp_icon} alt={""} />
                    <span className={"input-text reg-label"}>
                        Регистрация учетной записи
                    </span>
                    <span className={"input-text"}>
                        Заполните поля ниже
                    </span>
                    <div className="input-fields-container">
                        <input type="text" name="txt" placeholder=" Имя пользователя " required=""/>
                        <input type="password" name="psw" placeholder=" Пароль" required=""/>
                        <input type="password" name="psw" placeholder=" Повтор пароля" required=""/>
                    </div>
                    <button onClick={checkInput} className="create-button">
                        Создать учетную запись
                    </button>
                    <p className="agreement">Создавая учетную запись, я принимаю условия <a>Пользовательского соглашения </a>
                        и даю согласие на обработку моих персональных данных в соответствии с Федеральным законом
                        XXXXXXX "О персональных данных".
                    </p>
                </div>
            </div>
            <div className="info">
                <div className="reg-text-container">
                    <p className="reg-aside-product-name">
                        PRODUCT NAME
                    </p>
                    <p className="reg-aside-product-txt">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum."
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Registration;
