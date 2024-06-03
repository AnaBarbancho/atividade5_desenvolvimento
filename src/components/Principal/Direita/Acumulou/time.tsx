import styled from "styled-components";
import { useLoteria } from "../../../../hooks";
import { timemania2 } from "../../../../styles/theme";

export default function TimeAcumulou() {
    const { timemania } = useLoteria();
    return (
        <SldAcumulou colors={timemania2}>
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
const SldAcumulou= styled.div<{ colors: typeof timemania2 }>`
.timemania-texto-acumulou {
    font-size: 28px;
    font-weight: bold;
    color:${({ colors }) => colors.acumulou}
    padding-top:20px;
    margin-top: 15px;
    padding-left: 60px;
}
`;