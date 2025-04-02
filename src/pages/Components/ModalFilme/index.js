import React from "react";
import titulo from '../../../assets/titulo.png'
import Episodio from "../Episodeo";



const ModalFilme = () => {
    return (
        <div class="modal fade" id="modal-filme" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-hero">
                    <img src={titulo}/>
                    <div class="col-12 modal-hero-infos">
                        <button class="btn btn-lg bg-light">
                        <i class="ri-play-mini-fill"></i>
                        Assistir
                        </button>

                        <a href="#" class="btn-custom-round btn btn-lg btn-light rounded-circle">
                        <i class="ri-play-large-fill"></i>
                        </a>
                        <a href="#" class="btn-custom-round border-white btn btn-lg rounded-circle opacity-50">
                        <i class="ri-thumb-up-fill text-white"></i>
                        </a>
                        <a href="#" class="btn-custom-round border-white btn btn-lg rounded-circle opacity-50">
                        <i class="ri-thumb-down-fill text-white"></i>
                        </a>
                    </div>
                    </div>
                    <div class="modal-info">
                    <div class="container">
                        <div class="row">
                        <div class="col-7">
                            <p class="filme-descricao">  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum totam magnam obcaecati nobis vero, reiciendis itaque unde, corporis inventore incidunt. 
                            </p>
                        </div>
                        <div class="col-5">
                            <p class="filme-elenco">
                            Elenco: <text>Debby Ryan (Blaire), Lucy Fry (Zoé Moreau), Sydney Sweeney (Eva), Megan Fox (Grace), Alfie Owen-Allen (Victor). </text>
                            <br/>
                            <br/>
                            Generos: <text> Ação, Aventura, Drama.</text>
                            <br/>
                            <br/>
                            Cenas e momentos: <text>Violentos. </text>

                            </p>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-7">
                            <h3 class="text-white">Episodio</h3>
                        </div>
                        <div class="col-5 text-right">
                            <select name="" id="" class="form-control">
                            <option value="">Temporada 1</option>
                            </select>
                        </div>
                        </div>
                        <div class="row">
                        <ul id="lista-episodios">
                            <Episodio/>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalFilme;