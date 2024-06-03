import { useLoteria } from "../../../../hooks";
import styled from "styled-components";
import { quina2 } from "../../../../styles/theme";

export default function QuinaResultado() {
    const { quina } = useLoteria();
    return (
        <SldResultado colors = {quina2}>
            <div className="quina-bloco-direita">
                <div className="quina-linha-bola">
                    {
                        quina.dezenas.map(dezena =>
                            <div className="quina-bola" key={dezena}>{dezena}</div>
                        )
                    }
                </div>
            </div>
        </SldResultado>
    );
};

const SldResultado= styled.div<{ colors: typeof quina2 }>`
.quina-bloco-direita {
    margin-left: 50px;
    margin-top:20px
}

.quina-linha-bola {
    display: flex;
}

.quina-bola {
    font-size: 18px;
    font-weight: bold;
    background-color: ${({ colors }) => colors.bola};
    color: ${({ colors }) => colors.bolafonte};
    border-radius: 25px;
    padding: 10px;
    margin: 0px 10px;
}


`;