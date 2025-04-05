import React , {useState} from "react";
import Header from "../Components/Header";
import api from "../../services/api";



const Login = () => {

    const [credenciais, setCredenciais] = useState({
        email: '',
        senha: '',
    })

    const login = async () => {
        try {
            const response = await api.post('/usuario/login', credenciais)
            const res = response.data

            if(res.error){
                alert(res.message)
                return false
            }
            // função de login
            // guarda esses dados no browser 
            // ----------------- Key      Value
            localStorage.setItem('@user', JSON.stringify(res.usuario))

            // recarregar a página, pq quando ja estiver com o login ele vai redirecionar para o Home
            window.location.reload()
            
        } catch (err) {
            alert(err.message)
        }
    }
    return (
        <div class="container-fluid bg-filmes"
            style={{
                position: 'fixed',
                height: '100%',
            }}
        >
            {/* <header class="row">
                {/* <img src={require("../../assets/logo.png")}/> 
                <img className="logo" src={logo} alt="Logo" />
            </header> */}
            <Header hideMenu={true} />
            <div id="caixa_login" class="col-4 offset-4">
                <h1 class="text-white">Entrar</h1>
                <br/>
                <>
                    <input
                        type="email"
                        name="email" id=""
                        class="form-control form-control-lg"
                        placeholder="Email ou numero de telefone"
                        onChange={(e) => {
                            setCredenciais({
                                ...credenciais , 
                                email: e.target.value })
                        }}
                        />
                    <br/>
                    <input
                        type="password"
                        name="password" id=""
                        class="form-control form-control-lg"
                        placeholder="Senha"
                        onChange={(e) => {
                            setCredenciais({
                                ...credenciais , 
                                senha: e.target.value })
                        }}
                        />
                    <br/>
                    <button class="btn btn-block btn-danger btn-lg" onClick={login}>Entrar</button>
                    <div class="row mt-4">
                        <div class="col text-muted">
                            <input type="checkbox" name="lembrar" id=""/> Lembrar de mim.
                        </div>
                        <div class="col text-right">
                            <a href="home.html" class=" text-muted">Precisa de ajuda?</a>
                        </div>
                    </div>
                </>
            </div>
        </div>
        )
}

export default Login;