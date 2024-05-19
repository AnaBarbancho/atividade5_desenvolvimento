import styled from "styled-components";
import { useLoteria } from "../../../../hooks";

export default function TimeEstimativa() {
    const { timemania } = useLoteria();
    return (
        <SldEstimativa>
            <div className="timemania-bloco-estimativa">
                <div className="timemania-texto-estimativa">
                    Estimativa de prêmio do próximo concurso.
                    Sorteio em {timemania.dataProximoConcurso}:
                </div>
                <div className="timemania-valor-estimativa">
                    {timemania.valorEstimadoProximoConcurso.toLocaleString("pt-Br", {
                        style: "currency",
                        currency: "BRL"
                    })}
                </div>
            </div>
        </SldEstimativa>
    );
};
const SldEstimativa = styled.div`
.timemania-bloco-estimativa {
    width: 240px;
    margin-left: 45px;
    margin-top: 15px;
}

.timemania-texto-estimativa {
    font-size: 15px;
    color: #4c556c;
}

.timemania-valor-estimativa {
    font-size: 20px;
    margin-top: 15px;
    font-weight: bold;
    color: #260085;
}
`;