import React from "react";
import { useLoteria } from "../../hooks";
import styled from "styled-components"
import QuinaNome from "../Principal/Esquerda/NomeLoteria/quina";
import QuinaEstimativa from "../Principal/Esquerda/Estimativa/quina";
import QuinaResultado from "../Principal/Direita/Resultado/quina";
import QuinaAcumulou from "../Principal/Direita/Acumulou/quina";
import QuinaData from "../Principal/Direita/Data/quina";

const Quina: React.FC = () => {
    const { quina } = useLoteria();

    return (
        <Sldprincipal>
            <QuinaNome />
            <QuinaEstimativa />
            <QuinaResultado/>
            <QuinaAcumulou />
            <QuinaData />
        </Sldprincipal>
    );
}
const Sldprincipal = styled.div`
.quina-bloco-principal {
    display: flex;
    padding: 30px 0px;
    border-bottom: 1px solid #ddd;
}`;

export default Quina;
