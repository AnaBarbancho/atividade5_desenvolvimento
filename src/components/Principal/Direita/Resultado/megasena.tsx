
import styled from "styled-components";
import { useLoteria } from "../../../../hooks";

export default function MegasenaBolas() {
    const { megasena } = useLoteria();

    return (
        <Sld>
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
export const Sld = styled.div`
.mega-bloco-direita {
    margin-left: 50px;
}

.mega-linha-bola {
    display: flex;
}

.mega-bola {
    font-size: 18px;
    font-weight: bold;
    background-color: #209869;
    color: #fff;
    border-radius: 25px;
    padding: 10px;
    margin: 0px 10px;
}`;

