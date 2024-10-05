import styled from "styled-components";


export const Container = styled.div`
    height: calc(100vh - 120px);
    aspect-ratio: 595 / 842;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    background-color: #FFFFFF;
`;

export const TextContainer = styled.div`
  width: calc(100% - 80px);
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  width: calc(100% - 80px);
  font-family: "KBIZ_mjo_b";
  font-size: 24px;
  font-weight: 800;
  text-align: left;
  line-height: 1.5;
  color: "#000000";
  white-space: pre-line;
`;

export const Text = styled.div`
  width: 100%;
  font-family: "KBIZ_mjo_b";
  font-size: 24px;
  font-weight: 800;
  text-align: left;
  line-height: 1.5;
  color: ${props => 
    props.answer === "correct" ? "#0083F0" :
    props.answer === "wrong" ? "#FF0000" :
    "#000000"
  };
  white-space: pre-line;
`;

export const WidthImage = styled.img`
  width: calc(100% - 80px);
  height: auto;
  max-height: 30%;
` 

export const HeightImage = styled.img`
  height: auto;
  max-height: 30%;
  align-self: flex-start;
  margin-left: 40px;
` 

export const DetailContainer = styled.div`
  display: flex;
  width: calc(100% - 80px);
  border: 1px solid #000000;
  justify-content: center;
`

export const DetailText = styled.div`
  width: calc(100% - 20px);
  font-family: "KBIZ_mjo_b";
  font-size: 20px;
  font-weight: 800;
  text-align: left;
  line-height: 1.5;
  color: #000000;
  margin: 10px 0px;
`

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  margin-top: auto;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 10px;
  width: calc(100% - 40px);
`;

export const InputLabel = styled.div`
    font-family: "KBIZ_sgo_b";
    font-size: 20px;
    font-weight: 700;
    color: #000000;
`;

export const InputSelect = styled.select`
  width: auto;
`;