import styled from "styled-components";
import { useLoteria } from "../../../../hooks";
import { mega2 } from "../../../../styles/theme";

export default function MegasenaEstimativa() {
    const { megasena } = useLoteria();

    return (
        <SldEst  colors={mega2}>
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
const SldEst = styled.div<{ colors: typeof mega2 }>`
.mega-bloco-estimativa {
    width: 240px;
    margin-left: 45px;
    margin-top: 15px;
}

.mega-texto-estimativa {
    font-size: 15px;
    color:${({ colors }) => colors.data}
}

.mega-valor-estimativa {
    font-size: 20px;
    margin-top: 15px;
    font-weight: bold;
    color:  ${({ colors }) => colors.estimativa};
}

`;