
import styled from "styled-components";
import { useLoteria } from "../hooks";
import Rotas from "../routes";

export default function Principal() {
  const { megasena } = useLoteria();

  return (
    <>
    <Sld>
      {megasena.dataApuracao ? (
        <div className="principal-bloco">
          <Rotas />
        </div>
      ) : (
        <div className="principal-carregando">
          <h3>Carregando...</h3>
        </div>
      )}
    </Sld>
    </>

  );
}
const Sld = styled.div`
.principal-bloco {
  padding: 0px 20px;
  font-family: roboto;
}

.principal-carregando {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  font-family: roboto;
}
`
