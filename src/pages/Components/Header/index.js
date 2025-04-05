import React, {useState, useEffect} from "react";
import logo from '../../../assets/logo.png'

const Header = ({hideMenu}) => {

    const [user, setUser] = useState({})

    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }

    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('@user')))
    }, [])

    return (
        // <header class="row">
        //     <img src={require("../../assets/logo.png")}/>
        //     {/* <img className="logo" src={logo} alt="Logo" /> */}
        // </header>
        <header class="row">
            <div class="col-2">
                <img class="logo" src={logo}/>
            </div>
            {!hideMenu && (
                <>
                    <div class="col-8 m-auto " >
                        <ul class="menu_list">
                        <li>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Series</a>
                        </li>
                        <li>
                            <a href="#">Filmees</a>
                        </li>
                        <li>
                            <a href="#">Mais recentes</a>
                        </li>
                        <li>
                            <a href="#">Minha lista</a>
                        </li>
                        </ul>
                    </div>
                    <div class="col-2 m-auto ">
                        <a onClick={logout} class="text-white">Olá, {user?.nome}. Sair</a>
                        {/* ? - So pega o nome se user existir */}
                </div>
                </>

            )}

        </header>
    )
}

export default Header;