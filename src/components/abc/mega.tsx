import React from "react";
import MegasenaHeader from "../Principal/Esquerda/NomeLoteria/megasena";
import MegasenaEstimativa from "../Principal/Esquerda/Estimativa/megasena";
import MegasenaBolas from "../Principal/Direita/Resultado/megasena";
import MegasenaData from "../Principal/Direita/Data/megasena";
import MegasenaAcumulou from "../Principal/Direita/Acumulou/megasena";
import { useLoteria } from "../../hooks";
import styled from "styled-components"

const Megasena: React.FC = () => {
    const { megasena } = useLoteria();

    return (
        <Sldprincipal>
            <MegasenaHeader />
            <MegasenaEstimativa />
            <MegasenaBolas />
            <MegasenaAcumulou />
            <MegasenaData />
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

