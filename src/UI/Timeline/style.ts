import styled from "styled-components";

export const SC_RGBRight = styled.div`
  background: linear-gradient(
    to right,
    #006203,
    #006203,
    #0f9200,
    #30cb00,
    #4ae54a,
    #a4fba6,
    #4ae54a,
    #30cb00,
    #0f9200,
    #006203,
    #006203
  );
  margin: 0 auto;
  padding-right: 2px;
  padding-top: 1px;
  padding-bottom: 1px;
`;
export const SC_BlackRight = styled.div`
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const SC_RGBLeft = styled(SC_RGBRight)`
  padding-right: 0px;
  padding-left: 2px;
`;
export const SC_BlackLeft = styled(SC_BlackRight)`
  padding-left: 1px;
  justify-content: flex-start;
`;
export const SC_TextRight = styled.div`
  text-align: right;
  margin: 5px;
`;
export const SC_TextLeft = styled(SC_TextRight)`
  text-align: left;
`;
export const SC_Timeline = styled.div`
  margin-bottom: 50px;
`;
export const SC_Test = styled.div`
  div:first-child {
    padding-top: 0px;
  }
  div:last-child {
    padding-bottom: 0px;
  }
`;
