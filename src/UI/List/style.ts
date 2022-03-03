import styled from "styled-components";

export const ListWrapper = styled.div`
  text-align: left;
  /* list-style reset */
  list-style: none;
  padding: 0;
  margin: 0;
  /* list-style reset */
`;

export const ListElem = styled.div`
  min-width: 280px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`;

export const ListIcon = styled.div`
  font-size: 24px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
`;

export const ListText = styled.div`
  width: 250px;
  text-align: left;
  font-size: 24px;
  font-family: "Helvetica Neue", sans-serif;
  line-height: 24px;
  margin: 0 0 24px;
  text-align: justify;
  text-justify: inter-word;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto 0;
`;

export const ListRating = styled.div`
  display: flex;
  flex-direction: row;
  width: 120px;
  text-align: left;
  font-size: 24px;
`;
