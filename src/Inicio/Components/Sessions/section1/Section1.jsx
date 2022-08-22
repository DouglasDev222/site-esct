import React from "react";
import "./section1.css";

export default function Section1() {
  return (
    <section className="container-fluid bg-geral">
      <div className="row justify-content-start">
        <div className="col-1"></div>
        <div className="col-6 mt-5 ">
          <h1 className="titulo">ESCT – Espaço Social Cidadania Pra Todos</h1>
          <hr className="linha" size="4"></hr>
          <p className="palagrafo">
            O ESCT atende um público com mais de 850 pessoas na cidade de
            Bayeux/PB, e abrange este público através da oferta de serviços no
            formato de oficinas com as práticas de jiu-jitsu, futsal, teatro,
            coral, dança e ginástica para idosos.
          </p>
          <button className="btn btn-lg button"> SAIBA MAIS </button>
        </div>
        <div className="col-5 titulo">
          <img src="/imagens/section1/jovens.png" alt="" width="500px" />
        </div>
      </div>
    </section>
  );
}
