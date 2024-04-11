import React from "react";
import CoordenadorImg from "../../../Assets/img/Coordenador.jpeg";
import ComiteProfileCard from "../ComiteProfileCard";

const CoordenadorProfileCard = () => {
  return (
    <ComiteProfileCard
      image={CoordenadorImg}
      profileName="Rômulo Menezes"
      profileTitle="Coordenador"
      profileEmail="romulo.menezes@ufpe.br"
    />
  );
};

export default CoordenadorProfileCard;
