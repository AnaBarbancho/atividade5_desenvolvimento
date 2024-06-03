
import styled from "styled-components";
import { useLoteria } from "../../../../hooks";
import { timemania2 } from "../../../../styles/theme";

export default function TimeResultado() {
    const { timemania } = useLoteria();
    return (
        <SldResultado colors = {timemania2}>
        <div className="timemania-bloco-direita">
            <div className="timemania-linha-bola">
                {
                    timemania.dezenas.map(dezena =>
                        <div className="timemania-bola" key={dezena}>{dezena}</div>
                    )
                }
            </div>
        </div>
        </SldResultado>
    );
};
const SldResultado= styled.div<{ colors: typeof timemania2 }>`
.timemania-bloco-direita {
    margin-left: 50px;
}

.timemania-linha-bola {
    display: flex;
}

.timemania-bola {
    font-size: 18px;
    font-weight: bold;
    background-color: ${({ colors }) => colors.bola};
    color: ${({ colors }) => colors.bolafonte};
    border-radius: 25px;
    padding: 10px;
    margin: 0px 10px;
}
`;