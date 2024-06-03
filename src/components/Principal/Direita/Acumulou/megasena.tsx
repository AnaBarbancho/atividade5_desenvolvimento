import styled from "styled-components";
import { useLoteria } from "../../../../hooks";
import { mega2 } from "../../../../styles/theme";

export default function MegasenaAcumulou() {
    const { megasena } = useLoteria();

    return (
        <Sld colors = {mega2}>
            <div className="mega-texto-acumulou">
                {
                    megasena.quantidadeGanhadores === 0 ?
                        "ACUMULOU!" :
                        `${megasena.quantidadeGanhadores} GANHADORES`
                }
            </div>
        </Sld>
    );
};
export const Sld = styled.div<{ colors: typeof mega2 }>`
.mega-texto-acumulou {
    font-size: 28px;
    font-weight: bold;
    color: ${({ colors }) => colors.acumulou};
    margin-top: 15px;
    padding-left: 15px;
}`;

  