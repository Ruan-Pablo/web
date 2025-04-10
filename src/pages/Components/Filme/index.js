import React from "react";

const Filme = ({filme}) => {
    return(
        <li class="filme" data-bs-toggle="modal" data-bs-target="#modal-filme">
            {console.log(filme.thumb)}
            <img src={filme.thumb} alt={filme.titulo} class="img-fluid"/>
            <div class="filme-info">
                <div class="col-12">
                    <a href="#" class="btn-custom-round btn btn-light rounded-circle">
                    <i class="ri-play-large-fill"></i>
                    </a>
                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                    <i class="ri-thumb-up-fill text-white"></i>
                    </a>
                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                    <i class="ri-thumb-down-fill text-white"></i>
                    </a>
                    <a href="#" class="btn-custom-round border-white btn rounded-circle opacity-50">
                    <i class="ri-add-fill text-white"></i>
                    </a>
                </div>
                <p>T3:EP5 <text>"Meu Episodio"</text></p>
            </div>
        </li>
    )
}

export default Filme;