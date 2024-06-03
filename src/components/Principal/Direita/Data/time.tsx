
import styled from "styled-components";
import { useLoteria } from "../../../../hooks";
import { timemania2 } from "../../../../styles/theme";

export default function TimeData() {
    const { timemania } = useLoteria();
    return (
        <SldData colors={timemania2}>
            <div className="timemania-data-concurso">
                {
                    `Concurso ${timemania.numeroDoConcurso} - ${timemania.dataPorExtenso}`
                }
            </div>
        </SldData>
    );
};

const SldData = styled.div<{ colors: typeof timemania2 }>`
    .timemania-data-concurso {
        margin-top: 15px;
        color: ${({ colors }) => colors.data};
        padding-left: 60px;
        font-size: 15px;
    }
`;