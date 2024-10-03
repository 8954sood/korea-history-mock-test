import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 468px;
  background-color: #FFFFFF;
  border-radius: 18px;
`;

export const Title = styled.div`
  margin-top: 40px;
  margin-left: 40px;

  text-align: center;
  font-family: "KBIZ_sgo_h";
  font-size: 28px;
  font-weight: 900;
  white-space: pre-line;
  text-align: left;
  width: 100%;
`;

export const FirstContent = styled.div`
  width: calc(100% - 40px);
  margin-top: 40px;
  font-family: "KBIZ_sgo_m";
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  white-space: pre-line;

`;