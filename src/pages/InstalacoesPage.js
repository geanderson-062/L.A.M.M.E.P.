import React from "react";
import "../Assets/css/Instalacao.css";
import "../Assets/css/Global.css";
import TextInstalacao from "../components/Text/TextInstalacao";

function Instalacoes() {
  return (
    <>
      <div id="top-position">
        <div style={{ marginBottom: 100 }}>
          <div className="text-container">
            <TextInstalacao />
          </div>
        </div>
      </div>
    </>
  );
}

export default Instalacoes;
