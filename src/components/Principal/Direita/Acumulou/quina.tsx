import { useLoteria } from "../../../../hooks";
import styled from "styled-components";

export default function QuinaAcumulou() {
    const { quina } = useLoteria();
    return (
        <SldAcumulou>
        <div className="quina-texto-acumulou">
            {
                quina.quantidadeGanhadores === 0 ?
                    "ACUMULOU!" :
                    `${quina.quantidadeGanhadores} GANHADORES`
            }
        </div>
        </SldAcumulou>
    );
};
const SldAcumulou= styled.div`
.quina-texto-acumulou {
    font-size: 28px;
    font-weight: bold;
    color: #0066b3;
    margin-top: 15px;
    padding-left: 15px;
}
`;