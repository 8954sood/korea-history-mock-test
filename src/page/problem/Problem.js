import { useEffect, useState } from "react";
import { Button } from "../../component/Button.style";
import { Spacer } from "../../component/Spacer.style";
import { 문제4, 문제6, 문제8 } from "../../wrapper/imageWrapper";
import * as S  from "./Problem.style";
import { useDispatch, useSelector } from "react-redux";
import { problemActions } from "../../reducer/Problem";
import { ProblemModel } from "../../model/Problem.model";
import { useNavigate } from "react-router-dom";
import { SolveRoute } from "../solve/Solve.nav";

export const Problem = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const nowProblem = useSelector((state) => state.problem.nowProblem);
    const problems = useSelector((state) => state.problem.problems);
    const successProblems = useSelector((state) => state.problem.successProblems);
    const failedProblems = useSelector((state) => state.problem.failedProblems);

    const [count, setCount] = useState(1);

    const [nowSelect, setNowSelect] = useState(1);

    useEffect(() => {console.log(problems, successProblems, failedProblems);
    }, [problems, successProblems, failedProblems]);

    const onChangeSelect = (e) => {
        setNowSelect(e.target.value);
    }

    const onClickNext = () => {
        // 문제 정답 처리
        if (nowSelect == nowProblem.answer) {
            dispatch(problemActions.setSuccessProblems([...successProblems, nowProblem]));
        } else {
            dispatch(problemActions.setFailedProblems([...failedProblems, nowProblem]));
        }
        dispatch(problemActions.addAnswer({id: nowProblem.id, answer: nowSelect, problemIndex: count}));

        if (problems.length === 0) {
            // Solve 페이지 이동
            navigate(SolveRoute);
            return
            // if (nowSelect == nowProblem.answer) {
                
            //     setSuccessProblems([...successProblems, nowProblem]);
            // } else {
            //     setFailedProblems([...failedProblems, nowProblem]);
            // }   
            // setNowProblem(new ProblemModel(
            //     11,
            //     "문제 풀이가 끝났습니다.",
            //     null,
            //     null,
            //     [`총 점수: ${successProblems.map((item) => (item.score)).reduce((a, b) => a+ b, 0)}`, "틀린 문제"],
            //     0,
            // ))
            // return;
        }

        // 다음 문제 랜덤 선택
        
        const randomIndex = Math.floor(Math.random() * problems.length);
        setNowSelect(1);
        const newProblems = problems.filter((item, index) => index !== randomIndex);;
        dispatch(problemActions.setProblems(newProblems));
        dispatch(problemActions.setNowProblem(problems[randomIndex]));
        setCount(count + 1);
        
    }


    return (
        <S.Container>
            <Spacer/>
            <S.Text>{`${count}. ${nowProblem.title} (${nowProblem.score}점)`}</S.Text>

            {nowProblem.image && (
                nowProblem.image === 문제8? <S.HeightImage src={nowProblem.image}/>:
                <S.WidthImage src={nowProblem.image}/>
            )}

            {nowProblem.detail && (
            <S.DetailContainer>
                <S.DetailText>{nowProblem.detail}</S.DetailText>
            </S.DetailContainer>
            )}
            
            
            <S.Text>{nowProblem.select.map((item, index) => (`${index+1}. ${item}\n`))}</S.Text>
            
            <S.AnswerContainer>
                <S.InputContainer>
                    <S.InputLabel>정답 :</S.InputLabel>
                    <S.InputSelect onChange={onChangeSelect} value={nowSelect}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </S.InputSelect>
                </S.InputContainer>
                <Button onClick={onClickNext}>다음으로</Button>
                <Spacer/>
            </S.AnswerContainer>
        </S.Container>
    )
}