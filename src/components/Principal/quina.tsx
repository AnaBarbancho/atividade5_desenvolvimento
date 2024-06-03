import styled from "styled-components";
import QuinaNome from "./Esquerda/NomeLoteria/quina";
import QuinaEstimativa from "./Esquerda/Estimativa/quina";
import QuinaResultado from "./Direita/Resultado/quina";
import QuinaAcumulou from "./Direita/Acumulou/quina";
import QuinaData from "./Direita/Data/quina";
import { quina2 } from "../../styles/theme";

const Quina: React.FC = () => {
  return (
    <Sldprincipal colors={quina2}>
      <div className="quina-bloco-principal">
        <div className="quina-esquerda">
          <QuinaNome />
          <QuinaEstimativa />
        </div>
        <div className="quina-direita">
          <QuinaResultado />
          <QuinaAcumulou />
          <QuinaData />
        </div>
      </div>
    </Sldprincipal>
  );
};

const Sldprincipal = styled.div<{ colors: typeof quina2 }>`
.quina-bloco-principal {
    display: flex;
    align-items: center;
    padding: 20px 0px;
}

.quina-esquerda {
    display: flex;
    flex-direction: column;
    color: ${({ colors }) => colors.loteria}
}

.quina-direita {
    font-size: 28px;
    font-weight: bold;
    color: ${({ colors }) => colors.loteria}
    margin-left: 20px;
}
`;

export default Quina;