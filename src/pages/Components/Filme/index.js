import React from "react";

const Filme = ({filme}) => {

    const selectFilme = () => {
        const event = new CustomEvent('selectFilme', {
            detail:filme,
        })

        window.dispatchEvent(event)
    }

    return(
        <li class="filme" onClick={selectFilme} data-bs-toggle="modal" data-bs-target="#modal-filme">
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
                <p>T3:EP5 <text>{filme.titulo}</text></p>
            </div>
        </li>
    )
}

export default Filme;