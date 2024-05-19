import trevo from "../../../../assets/trevo-lotofacil.png";
import { useLoteria } from "../../../../hooks";
import styled from "styled-components";

export default function TimeNome() {
    const { timemania } = useLoteria();
    return (
        <SldNome>
        <div className="timemania-bloco-principal">
            <div>
                <div className="timemania-bloco-loteria">
                    <img src={trevo} alt="" />
                    <span className="timemania-nome-loteria">TIMEMANIA</span>
                </div>
            </div>
        </div>
        </SldNome>
    );
};
const SldNome = styled.div`
.timemania-bloco-principal {
    display: flex;
    padding: 30px 0px;
    border-bottom: 1px solid #ddd;
}

.timemania-bloco-loteria {
    display: flex;
}

.timemania-nome-loteria {
    font-size: 28px;
    font-weight: bold;
    color: #260085;
    margin-left: 10px;
}
`;
