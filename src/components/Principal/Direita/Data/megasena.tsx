import styled from "styled-components";
import { useLoteria } from "../../../../hooks";
import { mega2 } from "../../../../styles/theme";

export default function MegasenaData() {
    const { megasena } = useLoteria();

    return (
        <SldData colors = {mega2}>
            <div className="mega-data-concurso">
                {
                    `Concurso ${megasena.numeroDoConcurso} - ${megasena.dataPorExtenso}`
                }
            </div>
        </SldData>
    );
};
export const SldData = styled.div<{ colors: typeof mega2 }>`
.mega-data-concurso {
    margin-top: 15px;
    color: ${({ colors }) => colors.data};
    padding-left: 15px;
    font-size: 15px;
}`;