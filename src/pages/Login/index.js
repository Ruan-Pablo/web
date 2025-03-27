import React from "react";
import logo from '../../assets/logo.png';

const Login = () => {
    return (
        <div class="container-fluid bg-filmes"
            style={{
                position: 'fixed',
                height: '100%',
            }}
        >
            <header class="row">
                {/* <img src={require("../../assets/logo.png")}/> */}
                <img className="logo" src={logo} alt="Logo" />
            </header>
            <div id="caixa_login" class="col-4 offset-4">
                <h1 class="text-white">Entrar</h1>
                <br/>
                <form>
                    <input
                        type="email"
                        name="email" id=""
                        class="form-control form-control-lg"
                        placeholder="Email ou numero de telefone"/>
                    <br/>
                    <input
                        type="password"
                        name="password" id=""
                        class="form-control form-control-lg"
                        placeholder="Senha"/>
                    <br/>
                    <button class="btn btn-block btn-danger btn-lg">Entrar</button>
                    <div class="row mt-4">
                        <div class="col text-muted">
                            <input type="checkbox" name="lembrar" id=""/> Lembrar de mim.
                        </div>
                        <div class="col text-right">
                            <a href="home.html" class=" text-muted">Precisa de ajuda?</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
}

export default Login;