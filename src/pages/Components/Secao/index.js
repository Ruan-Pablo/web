import React from "react";
import Filme from "../Filme";

const Secao = () => {
    return(
        <section>
            <div class="container">
                <div class="row">
                <div class="col-12">
                    <h5 class="text-white">Populares da netflix</h5>
                </div>
                </div>
            </div>
            <div class="col-12">
                <ul class="filme-lista">
                <Filme/> 
                {/* <li class="filme">
                    <img src={require("../../../assets/filmes/2.jpg")}a alt="" class="img-fluid"/>
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
                <li class="filme">
                    <img src={require("../../../assets/filmes/3.jpg")}a alt="" class="img-fluid"/>
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
                <li class="filme">
                    <img src={require("../../../assets/filmes/4.jpg")}a alt="" class="img-fluid"/>
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
                <li class="filme">
                    <img src={require("../../../assets/filmes/5.jpg")}a alt="" class="img-fluid"/>
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
                <li class="filme">
                    <img src={require("../../../assets/filmes/6.jpg")} alt="" class="img-fluid"/>
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
                <li class="filme">
                    <img src={require("../../../assets/filmes/7.jpg")}a alt="" class="img-fluid"/>
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
                <li class="filme">
                    <img src={require("../../../assets/filmes/8.webp")}a alt="" class="img-fluid"/>
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
                <li class="filme">
                    <img src={require("../../../assets/filmes/1.jpg")}a alt="" class="img-fluid"/>
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
                </li> */}
                </ul>
            </div>
        </section>
    )
}

export default Secao;