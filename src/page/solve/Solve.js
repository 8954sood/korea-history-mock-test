import { useSelector } from "react-redux";
import { Button } from "../../component/Button.style";
import { Spacer } from "../../component/Spacer.style";
import * as S from "./Solve.style";


export const Solve = () => {
    const successProblems = useSelector((state) => state.problem.successProblems);

    return (
        <S.Container>
            <Spacer/>
            <S.Title>모의 한국사 결과</S.Title>
            <S.FirstContent>{`결과 : ${successProblems.map((item) => (item.score)).reduce((a, b) => a+ b, 0)}점!!`}</S.FirstContent>
            <Button>틀린 문제 보러가기</Button>
            <Spacer/>
        </S.Container>
    )
}