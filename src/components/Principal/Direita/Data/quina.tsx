import { useLoteria } from "../../../../hooks";
import styled from "styled-components";
import { quina2 } from "../../../../styles/theme";

export default function QuinaData() {
    const { quina } = useLoteria();
    return (
        <SldData colors = {quina2}>
        <div className="quina-data-concurso">
            {
                `Concurso ${quina.numeroDoConcurso} - ${quina.dataPorExtenso}`
            }
        </div>
        </SldData>
    );
};
const SldData= styled.div<{ colors: typeof quina2 }>`
.quina-data-concurso {
    margin-top: 10px;
    color: ${({ colors }) => colors.data};
    padding-left: 60px;
    font-size: 15px;
}
`;