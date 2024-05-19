import styled from "styled-components";
import trevo from "../../../../assets/trevo-megasena.png";

export default function MegasenaHeader() {
    return (
        <SldNome>
        <div className="mega-bloco-principal">
            <div>
                <div className="mega-bloco-loteria">
                    <img src={trevo} alt="" />
                    <span className="mega-nome-loteria">MEGA-SENA</span>
                </div>
            </div>
        </div>
        </SldNome>
    );
}
const SldNome = styled.div`
.mega-bloco-principal {
    display: flex;
    padding: 30px 0px;
    border-bottom: 1px solid #ddd;
}

.mega-bloco-loteria {
    display: flex;
}

.mega-nome-loteria {
    font-size: 28px;
    font-weight: bold;
    color: #209869;
    margin-left: 10px;
}`;
