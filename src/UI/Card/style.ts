import styled from "styled-components";

export const SCCardWrapper = styled.div`
  width: ${(props) => (props.fullSize ? "100%" : "auto")};
`;
export const SCCard = styled.div`
  margin: 20px auto;
  max-width: 600px;
  padding: 1rem;
  color: white;
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(
      to bottom,
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
    )
    1 100%;
`;
