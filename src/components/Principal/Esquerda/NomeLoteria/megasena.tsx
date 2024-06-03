import styled from "styled-components";
import trevo from "../../../../assets/trevo-megasena.png";
import { mega2 } from "../../../../styles/theme";

export default function MegasenaHeader() {
    return (
        <SldNome colors={mega2}>
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
const SldNome = styled.div<{ colors: typeof mega2 }>`

.mega-bloco-loteria {
    display: flex;
}

.mega-nome-loteria {
    font-size: 28px;
    font-weight: bold;
    color:${({ colors }) => colors.loteria};
    margin-left: 10px;
}`;
