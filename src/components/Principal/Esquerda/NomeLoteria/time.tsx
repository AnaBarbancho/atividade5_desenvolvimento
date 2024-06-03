import time from "../../../../assets/time.png";
import styled from "styled-components";
import { timemania2 } from "../../../../styles/theme";


export default function TimeNome() {
    return (
        <SldNome colors={timemania2}>
        <div className="timemania-bloco-principal">
            <div>
                <div className="timemania-bloco-loteria">
                    <img src={time} alt="" />
                    <span className="timemania-nome-loteria">TIMEMANIA</span>
                </div>
            </div>
        </div>
        </SldNome>
    );
};
const SldNome = styled.div<{ colors: typeof timemania2 }>`
  .timemania-bloco-loteria {
    display: flex;
  }

  .timemania-nome-loteria {
    font-size: 28px;
    font-weight: bold;
    color: ${({ colors }) => colors.loteria};
    margin-left: 10px;
  }
`;


