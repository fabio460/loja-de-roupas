import React from 'react'
import './banner.css';
export default function Banner() {
  return (
    <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_780,h_283/https://lojastropicalonline.com.br/wp-content/uploads/2020/12/Moda-Masculina-Tropical.png" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                 
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://i.pinimg.com/originals/f4/4b/04/f44b04304daac11aebaed9d364dc7614.jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p></p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://images.tcdn.com.br/img/img_prod/1081546/1644515663_banner_full_-_moda_infantil_2.jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                  
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://s3.us-east-1.amazonaws.com/megamoda.smserver.com.br/fliper-plus-size-banner.png" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
    </div>
  )
}
