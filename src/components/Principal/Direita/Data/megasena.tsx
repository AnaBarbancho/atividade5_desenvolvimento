import styled from "styled-components";
import { useLoteria } from "../../../../hooks";

export default function MegasenaData() {
    const { megasena } = useLoteria();

    return (
        <SldData>
            <div className="mega-data-concurso">
                {
                    `Concurso ${megasena.numeroDoConcurso} - ${megasena.dataPorExtenso}`
                }
            </div>
        </SldData>
    );
};
export const SldData = styled.div`
.mega-data-concurso {
    margin-top: 15px;
    color: #4c556c;
    padding-left: 15px;
    font-size: 15px;
}`;