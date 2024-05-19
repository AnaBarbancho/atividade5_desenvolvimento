
import styled from "styled-components";
import { useLoteria } from "../../../../hooks";

export default function TimeResultado() {
    const { timemania } = useLoteria();
    return (
        <SldResultado>
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
const SldResultado= styled.div`
.timemania-bloco-direita {
    margin-left: 50px;
}

.timemania-linha-bola {
    display: flex;
}

.timemania-bola {
    font-size: 18px;
    font-weight: bold;
    background-color:#260085;
    color: #fff;
    border-radius: 25px;
    padding: 10px;
    margin: 0px 10px;
}
`;