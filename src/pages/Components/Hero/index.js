import React from "react";
import titulo from '../../../assets/titulo.png'

const Hero = () => {
    return (
        <div id="hero" class="container-fluid">
            <div class="container">
            <div id="hero-infos" class="row">
                <div class="col-6">
                <img src={titulo} alt="titulo as passageiras" />
                <div class="" style={{display: 'flex',}}>
                    <div id="top-10">
                        TOP<span>10</span>
                    </div>
                    <h1 className="text-white">Top 1 de hoje no brasil</h1>
                </div>
                <p class="text-white subtitulo">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ex eius odio maxime reprehenderit architecto.</p>
                <br/>
                <button class="btn btn-lg bg-light">
                    <i class="ri-play-mini-fill"></i>

                    Assistir
                </button>
                <button class="btn btn-lg btn-custom-trans ms-4">
                    <i class="ri-information-line"></i>
                    Mais informações
                </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Hero;