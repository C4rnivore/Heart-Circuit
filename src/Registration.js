import React from 'react';

function RegistrationCs(props) {
    return (
        <div>
            <div className="registration-form-container">
                <img className="reg-el " src="" alt=""/>
                    <div className="text-container reg-el">
                        <p>Создайте учетную запись</p>
                    </div>
                    <hr></hr>
                        <div className="reg-fields-container">
                            <input className="first-field" type="text" placeholder=" Введите логин" name="login-input"
                                   id="login-input" required/>
                            <input type="password" placeholder=" Придумайте пароль" name="password-input"
                                   id="password-input" required/>
                            <input type="password" placeholder=" Повторите пароль" name="repeat-password-input"
                                   id="repeat-password-input" required/>
                        </div>

                        <div className="button-container reg-el">
                            <button type="button">Создать аккаунт</button>
                        </div>
                        <div className="text-privacy-container reg-el">
                            <p>Создавая учетную запись вы соглашаетесь с нашими <a href="#">условиями
                                конфиденциальности</a></p>
                        </div>
            </div>
        </div>
    );
}

export default RegistrationCs;
