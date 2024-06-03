
import styled from "styled-components";
import { useLoteria } from "../../../../hooks";
import { mega2 } from "../../../../styles/theme";

export default function MegasenaBolas() {
    const { megasena } = useLoteria();

    return (
        <Sld colors = {mega2}>
            <div className="mega-bloco-direita">
                <div className="mega-linha-bola">
                    {
                        megasena.dezenas.map(dezena =>
                            <div className="mega-bola" key={dezena}>{dezena}</div>
                        )
                    }
                </div>
            </div>
        </Sld>
    );
};
export const Sld = styled.div<{ colors: typeof mega2 }>`
.mega-bloco-direita {
    margin-left: 50px;
}

.mega-linha-bola {
    display: flex;
}

.mega-bola {
    font-size: 18px;
    font-weight: bold;
    background-color: ${({ colors }) => colors.bola};
    color:  ${({ colors }) => colors.bolafonte};
    border-radius: 25px;
    padding: 10px;
    margin: 0px 10px;
}`;

