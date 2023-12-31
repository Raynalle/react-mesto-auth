import React from "react";

function Login(props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleEmailInput(evt) {
        setEmail(evt.target.value);
    }

    function handlePasswordInput(evt) {
        setPassword(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onLogin(email, password);
    }

    return (
        <section className="login">
            <h2 className="login__title">Вход</h2>
            <form className="login__form" onSubmit={handleSubmit}>
                <input className="login__input" type="email" placeholder="Email" onChange={handleEmailInput} required/>
                <input className="login__input" type="password" placeholder="Пароль" autoComplete="on" onChange={handlePasswordInput} required/>
                <button className="login__button login__button_entrance" type="submit">Войти</button>
            </form>
        </section>
    );
}

export default Login;