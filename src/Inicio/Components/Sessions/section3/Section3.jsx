import React from "react";
import "./section3.css";

export default function Section3() {
  return (
    <section className="container mt-5 mb-5">
      <div className="row justify-content-start">
        <div className="col-1"></div>
        <div className="col-6 mt-5 ">
          <h1 className="">
            Sobre <font color="#2e3192"> ESCT </font>{" "}
          </h1>
          <hr className="linha-futsal" size="4"></hr>
          <p className="palagrafo-futsal">
            O Espaço Social Cidadania Pra Todos, anteriormente chamado Fundação
            Criança em Cristo, Casa Nossa Senhora do Carmo iniciou oficialmente
            suas atividades em 2003 como fruto do sentimento de solidariedade e
            amor ao próximo de Josman de Lima Barbosa.
          </p>
          <p className="palagrafo-futsal">
            O desejo de contribuir de maneira significativa na sociedade e em
            especial na vida de crianças e adolescentes desamparadas e sem uma
            boa renda familiar da comunidade, deu suporte para a constituição de
            sua iniciativa privada sem fins lucrativos.
          </p>
        </div>
        <div className="col-5 mt-5">
          <img
            className="img-futsal"
            src="/imagens/section3/futsal.jpg"
            alt=""
            width="500px"
          />
        </div>
      </div>
    </section>
  );
}
