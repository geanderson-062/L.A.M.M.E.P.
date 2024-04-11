import React from "react";
import ComiteProfileCard from "../ComiteProfileCard";
import ViceCoordenadorImg from "../../../Assets/img/ViceCoordenador.png";

const ViceCoordenadorProfileCard = () => {
  return (
    <ComiteProfileCard
      image={ViceCoordenadorImg}
      profileName="Antônio C. D. Antonino"
      profileTitle="Vice-Coordenador"
      profileEmail="antonio.antonino@ufpe.br"
    />
  );
};

export default ViceCoordenadorProfileCard;
