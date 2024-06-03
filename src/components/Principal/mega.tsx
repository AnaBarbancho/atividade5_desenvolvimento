import React from "react";
import MegasenaHeader from "./Esquerda/NomeLoteria/megasena";
import MegasenaEstimativa from "./Esquerda/Estimativa/megasena";
import MegasenaBolas from "./Direita/Resultado/megasena";
import MegasenaData from "./Direita/Data/megasena";
import MegasenaAcumulou from "./Direita/Acumulou/megasena";
import styled from "styled-components";
import { mega2 } from "../../styles/theme";

const Megasena: React.FC = () => {
  return (
    <Sldprincipal colors={mega2}>
      <div className="mega-bloco-principal">
        <div className="mega-esquerda">
          <MegasenaHeader />
          <MegasenaEstimativa />
        </div>
        <div className="mega-direita">
          <MegasenaBolas />
          <MegasenaAcumulou />
          <MegasenaData />
        </div>
      </div>
    </Sldprincipal>
  );
};

const Sldprincipal = styled.div<{ colors: typeof mega2 }>`
  .mega-bloco-principal {
    display: flex;
    align-items: center;
    padding: 10px 0px;
  }

  .mega-esquerda, .mega-direita {
    display: flex;
    flex-direction: column;
    color:${({ colors }) => colors.loteria}
  }

  .mega-direita {
    font-size: 28px;
    font-weight: bold;
    color: ${({ colors }) => colors.loteria}
    margin-left: 20px;
  }
`;

export default Megasena;