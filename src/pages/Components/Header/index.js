import React from "react";
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        // <header class="row">
        //     <img src={require("../../assets/logo.png")}/>
        //     {/* <img className="logo" src={logo} alt="Logo" /> */}
        // </header>
        <header class="row">
            <div class="col-2">
                <img class="logo" src={logo}/>
            </div>
            <div class="col-10 m-auto " >
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
        </header>
    )
}

export default Header;