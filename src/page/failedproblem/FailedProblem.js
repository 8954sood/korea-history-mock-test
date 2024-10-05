import { useEffect, useState } from "react";
import { Button } from "../../component/Button.style";
import { Spacer } from "../../component/Spacer.style";
import { 문제4, 문제6, 문제8 } from "../../wrapper/imageWrapper";
import * as S  from "./FailedProblem.style";
import { useDispatch, useSelector } from "react-redux";
import { problemActions } from "../../reducer/Problem";
import { ProblemModel } from "../../model/Problem.model";
import { useNavigate } from "react-router-dom";
import { SolveRoute } from "../solve/Solve.nav";

export const FailedProblem = () => {
    const navigate = useNavigate();
    const answer = useSelector((state) => state.problem.answer);
    const failedProblems = useSelector((state) => state.problem.failedProblems);

    const [targetIndex, setTargetIndex] = useState(0);
    const nowProblem = failedProblems[targetIndex];


    const onClickNext = () => {
        if (failedProblems.length === targetIndex+1) {
            // 엔딩 페이지로 이동
            navigate(SolveRoute);
            return;
        }
        setTargetIndex(targetIndex + 1);
    }

    


    return (
        <S.Container>
            <Spacer/>
            <S.Title>{`${answer[nowProblem.id].problemIndex}. ${nowProblem.title} (${nowProblem.score}점)`}</S.Title>

            {nowProblem.image && (
                nowProblem.image === 문제8? <S.HeightImage src={nowProblem.image}/>:
                <S.WidthImage src={nowProblem.image}/>
            )}

            {nowProblem.detail && (
            <S.DetailContainer>
                <S.DetailText>{nowProblem.detail}</S.DetailText>
            </S.DetailContainer>
            )}
            
            <S.TextContainer>
                {nowProblem.select.map((item, index) => (
                    <S.Text answer={
                        index+1 == nowProblem.answer? "correct": 
                        index+1 == answer[nowProblem.id].answer? "wrong": ""
                    }
                    >{index+1}. {item}</S.Text>
                ))}
            </S.TextContainer>
            
            <S.AnswerContainer>
                <S.InputContainer>
                    <S.InputLabel>{`정답 : ${nowProblem.answer}`}</S.InputLabel>
                </S.InputContainer>
                <Button onClick={onClickNext}>다음으로</Button>
                <Spacer/>
            </S.AnswerContainer>
        </S.Container>
    )
}