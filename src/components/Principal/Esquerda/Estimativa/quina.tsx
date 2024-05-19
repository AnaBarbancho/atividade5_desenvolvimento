import { useLoteria } from "../../../../hooks";
import styled from "styled-components";

export default function QuinaEstimativa() {
    const { quina } = useLoteria();
    return (
        <SldEstimativa>
        <div className="quina-bloco-estimativa">
            <div className="quina-texto-estimativa">
                Estimativa de prêmio do próximo concurso.
                Sorteio em {quina.dataProximoConcurso}:
            </div>
            <div className="quina-valor-estimativa">
                {quina.valorEstimadoProximoConcurso.toLocaleString("pt-Br", {
                    style: "currency",
                    currency: "BRL"
                })}
            </div>
        </div>
        </SldEstimativa>
    );
};
const SldEstimativa = styled.div`
.quina-bloco-estimativa {
    width: 240px;
    margin-left: 45px;
    margin-top: 15px;
}

.quina-texto-estimativa {
    font-size: 15px;
    color: #4c556c;
}

.quina-valor-estimativa {
    font-size: 20px;
    margin-top: 15px;
    font-weight: bold;
    color: #260085;
}
`;
