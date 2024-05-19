
import styled from "styled-components";
import { useLoteria } from "../../../../hooks";

export default function TimeData() {
    const { timemania } = useLoteria();
    return (
        <SldData>
            <div className="timemania-data-concurso">
                {
                    `Concurso ${timemania.numeroDoConcurso} - ${timemania.dataPorExtenso}`
                }
            </div>
        </SldData>
    );
};
const SldData= styled.div`
.timemania-data-concurso {
    margin-top: 15px;
    color: #4c556c;
    padding-left: 15px;
    font-size: 15px;
}
`;