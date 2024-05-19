import { useLoteria } from "../../../../hooks";
import styled from "styled-components";

export default function QuinaResultado() {
    const { quina } = useLoteria();
    return (
        <SldResultado>
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

const SldResultado= styled.div`
.quina-bloco-direita {
    margin-left: 50px;
}

.quina-linha-bola {
    display: flex;
}

.quina-bola {
    font-size: 18px;
    font-weight: bold;
    background-color:#260085;
    color: #fff;
    border-radius: 25px;
    padding: 10px;
    margin: 0px 10px;
}


`;