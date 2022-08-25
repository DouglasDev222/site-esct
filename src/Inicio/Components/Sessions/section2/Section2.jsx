import React from "react";
import "./section2.css";

export default function Section2() {
  return (
    <section className="container mt-5">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/imagens/section2/imagen1.jpg"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>
                Semana de Combate ao Abuso e Exploração Sexual de Crianças e
                Adolescentes
              </h5>
              <p>
                Na semana de Combate ao Abuso e Exploração Sexual de Crianças e
                Adolescentes foram realizadas algumas atividades junto as nossas
                crianças e adolescentes, que incluíram palestras, vídeos e
                dinâmicas de grupo que contribuiram para o desenvolvimento e
                conscientização de todos sobre o tema.
              </p>
              <button className="btn btn-outline-light">Leia Mais</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/imagens/section2/imagen1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>
                Semana de Combate ao Abuso e Exploração Sexual de Crianças e
                Adolescentes
              </h5>
              <p>
                Na semana de Combate ao Abuso e Exploração Sexual de Crianças e
                Adolescentes foram realizadas algumas atividades junto as nossas
                crianças e adolescentes, que incluíram palestras, vídeos e
                dinâmicas de grupo que contribuiram para o desenvolvimento e
                conscientização de todos sobre o tema..
              </p>
              <button className="btn btn-outline-light">Leia Mais</button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/imagens/section2/imagen1.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>
                Semana de Combate ao Abuso e Exploração Sexual de Crianças e
                Adolescentes
              </h5>
              <p>
                Na semana de Combate ao Abuso e Exploração Sexual de Crianças e
                Adolescentes foram realizadas algumas atividades junto as nossas
                crianças e adolescentes, que incluíram palestras, vídeos e
                dinâmicas de grupo que contribuiram para o desenvolvimento e
                conscientização de todos sobre o tema.
              </p>
              <button className="btn btn-outline-light">Leia Mais</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
