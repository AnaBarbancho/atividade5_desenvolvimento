import React from "react";
import { useLoteria } from "../../hooks";
import styled from "styled-components"
import TimeNome from "../Principal/Esquerda/NomeLoteria/time";
import TimeEstimativa from "../Principal/Esquerda/Estimativa/time";
import TimeResultado from "../Principal/Direita/Resultado/time";
import TimeAcumulou from "../Principal/Direita/Acumulou/time";
import TimeData from "../Principal/Direita/Data/time";

const Megasena: React.FC = () => {
    const { megasena } = useLoteria();

    return (
        <Sldprincipal>
            <TimeNome />
            <TimeEstimativa />
            <TimeResultado />
            <TimeAcumulou />
            <TimeData />
        </Sldprincipal>
    );
}
const Sldprincipal = styled.div`
.mega-bloco-principal {
    display: flex;
    padding: 30px 0px;
    border-bottom: 1px solid #ddd;
}`;

export default Megasena;
