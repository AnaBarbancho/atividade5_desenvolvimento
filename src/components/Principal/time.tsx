import React from "react";
import styled from "styled-components";
import TimeNome from "./Esquerda/NomeLoteria/time";
import TimeEstimativa from "./Esquerda/Estimativa/time";
import TimeResultado from "./Direita/Resultado/time";
import TimeAcumulou from "./Direita/Acumulou/time";
import TimeData from "./Direita/Data/time";
import { timemania2 } from "../../styles/theme";

const Timemania: React.FC = () => {
    return (
        <Sldprincipal colors={timemania2} >
            <div className="time-bloco-principal">
                <div className="time-esquerda">
                    <TimeNome />
                    <TimeEstimativa />
                </div>
                <div className="time-direita">
                    <TimeResultado />
                    <TimeAcumulou />
                    <TimeData />
                </div>
            </div>
        </Sldprincipal>
    );
};

const Sldprincipal = styled.div<{ colors: typeof timemania2 }>`
    .time-bloco-principal {
        display: flex;
        align-items: center;
        padding: 20px 0px;
    }

    .time-esquerda {
        display: flex;
        flex-direction: column;
        padding:10px
    }

    .time-direita {
        font-size: 28px;
        font-weight: bold;
        color: ${({ colors }) => colors.loteria};
        margin-left: 20px;
    }
`;

export default Timemania;