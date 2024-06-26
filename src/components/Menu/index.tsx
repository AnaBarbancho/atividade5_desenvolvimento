import styled from "styled-components";
import ItemMenu from "../ItemMenu";

export default function Menu() {
  return (
  
      <RightSld>
        <ItemMenu link="/timemania">TimeMania</ItemMenu>
        <ItemMenu link="/megasena">MegaSena</ItemMenu>
        <ItemMenu link="/quina">Quina</ItemMenu>
      </RightSld>
    
  );
}

const RightSld = styled.div`
  display: flex;
  flex-direction: row;
  
`;
