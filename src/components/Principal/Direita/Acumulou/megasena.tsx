import styled from "styled-components";
import { useLoteria } from "../../../../hooks";

export default function MegasenaAcumulou() {
    const { megasena } = useLoteria();

    return (
        <Sld>
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
export const Sld = styled.div`
.mega-texto-acumulou {
    font-size: 28px;
    font-weight: bold;
    color: #0066b3;
    margin-top: 15px;
    padding-left: 15px;
}`;

  