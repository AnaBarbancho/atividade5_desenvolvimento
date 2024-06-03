import trevo from "../../../../assets/trevo-quina.png";
import styled from "styled-components";
import { quina2 } from "../../../../styles/theme";


export default function QuinaNome() {
    return (
        <SldNome colors={quina2}>
            <div className="quina-bloco-principal">
                <div className="quina-bloco-loteria">
                    <img src={trevo} alt="Trevo da Quina" />
                    <span className="quina-nome-loteria">QUINA</span>
                </div>
            </div>
        </SldNome>
    );
}

const SldNome = styled.div<{ colors: typeof quina2 }>`
  .quina-bloco-loteria {
    display: flex;
  }

  .quina-nome-loteria {
    font-size: 28px;
    font-weight: bold;
    color: ${({ colors }) => colors.loteria};
    margin-left: 10px;
  }
`;
