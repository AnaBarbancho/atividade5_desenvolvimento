import styled from "styled-components";
import { useLoteria } from "../../../../hooks";

export default function MegasenaEstimativa() {
    const { megasena } = useLoteria();

    return (
        <SldEst>
        <div className="mega-bloco-estimativa">
            <div className="mega-texto-estimativa">
                Estimativa de prêmio do próximo concurso.
                Sorteio em {megasena.dataProximoConcurso}:
            </div>
            <div className="mega-valor-estimativa">
                {megasena.valorEstimadoProximoConcurso.toLocaleString("pt-Br", {
                    style: "currency",
                    currency: "BRL"
                })}
            </div>
        </div>
        </SldEst>
    );
};
const SldEst = styled.div`
.mega-bloco-estimativa {
    width: 240px;
    margin-left: 45px;
    margin-top: 15px;
}

.mega-texto-estimativa {
    font-size: 15px;
}

.mega-valor-estimativa {
    font-size: 20px;
    margin-top: 15px;
    font-weight: bold;
    color: #209869;
}

`;