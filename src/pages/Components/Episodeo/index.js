import React from "react";

const Episodio = () => {
    return(
        <li>
            <div class="row">
                <div class="col-1 my-auto text-center">
                    <h3 class="text-white">1</h3>
                </div>
                <div class="col-4">
                    <img class="img-fluid" src={require("../../../assets/filme-capa.jpg")} alt=""/>
                </div>
                <div class="col-7">
                    <h6 class="text-white">Nome do Episodio</h6>
                    <p class="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nemo ipsa.
                    </p>
                </div>
            </div>
        </li>
    )
}

export default Episodio;