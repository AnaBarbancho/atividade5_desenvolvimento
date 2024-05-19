import styled from "styled-components";
import { useLoteria } from "../../../../hooks";

export default function TimeAcumulou() {
    const { timemania } = useLoteria();
    return (
        <SldAcumulou>
        <div className="timemania-texto-acumulou">
            {
                timemania.quantidadeGanhadores === 0 ?
                    "ACUMULOU!" :
                    `${timemania.quantidadeGanhadores} GANHADORES`
            }
        </div>
        </SldAcumulou>
    );
};
const SldAcumulou= styled.div`
.timemania-texto-acumulou {
    font-size: 28px;
    font-weight: bold;
    color: #0066b3;
    margin-top: 15px;
    padding-left: 15px;
}
`;