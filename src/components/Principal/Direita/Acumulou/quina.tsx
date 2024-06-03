import { useLoteria } from "../../../../hooks";
import styled from "styled-components";
import { quina2 } from "../../../../styles/theme";

export default function QuinaAcumulou() {
    const { quina } = useLoteria();
    return (
        <SldAcumulou colors = {quina2}>
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
const SldAcumulou= styled.div<{ colors: typeof quina2 }>`
.quina-texto-acumulou {
    font-size: 28px;
    font-weight: bold;
    color: ${({ colors }) => colors.acumulou};
    padding-top: 30px;
    padding-left: 60px;
}
`;