import trevo from "../../../../assets/trevo-quina.png";
import { useLoteria } from "../../../../hooks";
import styled from "styled-components";
export default function QuinaNome() {
    const { quina } = useLoteria();
    return (
        <SldNome>
        <div className="quina-bloco-principal">
            <div>
                <div className="quina-bloco-loteria">
                    <img src={trevo} alt="" />
                    <span className="quina-nome-loteria">QUINA</span>
                </div>
            </div>
        </div>
        </SldNome>
    );
}
const SldNome = styled.div`
.quina-bloco-principal {
    display: flex;
    padding: 30px 0px;
    border-bottom: 1px solid #ddd;
}

.quina-bloco-loteria {
    display: flex;
}

.quina-nome-loteria {
    font-size: 28px;
    font-weight: bold;
    color: #260085;
    margin-left: 10px;
}
`;
