import { useLoteria } from "../../../../hooks";
import styled from "styled-components";

export default function QuinaData() {
    const { quina } = useLoteria();
    return (
        <SldData>
        <div className="quina-data-concurso">
            {
                `Concurso ${quina.numeroDoConcurso} - ${quina.dataPorExtenso}`
            }
        </div>
        </SldData>
    );
};
const SldData= styled.div`
.quina-data-concurso {
    margin-top: 15px;
    color: #4c556c;
    padding-left: 15px;
    font-size: 15px;
}
`;