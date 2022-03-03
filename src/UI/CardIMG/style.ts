import styled from "styled-components";

export const SCCardWrapper = styled.div`
  height: 320px;
  width: 240px;
  margin: 5px;
  background: linear-gradient(
    to right,
    #000000,
    #006203,
    #0f9200,
    #30cb00,
    #4ae54a,
    #a4fba6,
    #a4fba6,
    #4ae54a,
    #30cb00,
    #0f9200,
    #006203,
    #000000
  );
`;
export const SCCard = styled.div`
  width: 240px;
  height: 320px;
  cursor: pointer;
  background-color: #a9a9a9;

  &:hover {
    height: 318px;
  }
`;
export const SCCardIMG = styled.div`
  height: 112px;
  width: 100%;
  background-image: url("https://pbs.twimg.com/media/D5i1SWkX4AAXNcU.jpg");
  background-size: 100% auto;
  background-repeat: no-repeat;
`;
export const SCCardText = styled.div`
  height: 65%;
  width: 100%;
  padding: 5px;
`;
