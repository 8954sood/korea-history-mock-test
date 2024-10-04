import { Button } from "../../component/Button.style";
import { Spacer } from "../../component/Spacer.style";
import { 문제4, 문제8 } from "../../wrapper/imageWrapper";
import * as S  from "./Problem.style";

export const Problem = () => {
    return (
        <S.Container>
            <Spacer/>
            <S.Text>1. 다음 보기 중 옳지 않은 것을 고르시오. (3점)</S.Text>
            <S.Text>{"<보기>\nㄱ. 김규식은 파리 강화 회의에 참여했다.\nㄴ. 김규식은 파리 강화 회의에 참여했다.\nㄷ. 김규식은 파리 강화 회의에 참여했다.\nㄹ. 김규식은 파리 강화 회의에 참여했다."}</S.Text>
            {/* <S.HeightImage src={문제8} alt="google"/>
            <S.WidthImage src={문제4} alt="google"/> */}
            <S.DetailContainer>
                <S.DetailText>
                강도 일본을 쫓아내려면 오직 혁명으로만 가능하며, 혁명이 아니고는 강도 일본을 쫓아낼 방법이 없는 바이다. ··· 중략
                민중은 우리 혁명의 대본영(大本營)이다. 폭력은 우리 혁명의 유일한 무기이다. 우리는 민중 속으로 가서 민중과 손을 맞아 끊임 없는 폭력 - 암살, 파괴, 폭동 - 으로써 강도 일본을 통치를 타도하고 ······ 생략
                </S.DetailText>
            </S.DetailContainer>
            <S.Margin/>
            <S.InputContainer>
                <S.InputLabel>정답 :</S.InputLabel>
                <S.InputSelect>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </S.InputSelect>
            </S.InputContainer>
            <Button>다음으로</Button>
            <Spacer/>
        </S.Container>
    )
}