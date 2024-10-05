import { useState } from "react";
import * as S  from "./Onboarding.style";
import { Button } from "../../component/Button.style";
import { useNavigate } from "react-router-dom";
import { ProblemRoute } from "../problem/Problem.nav";
import { Spacer } from "../../component/Spacer.style";


const Onboarding = () => {

    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    return (
    <S.Container>
        <S.Title>
            {page == 0? "2024 2학년 2학기 중간고사 \n(모의) 한국사": "유의사항"}
        </S.Title>
        <S.FirstContent>
            {page == 0? "열심히 준비한 한국사 실력을\n검증해보세요!": "총 문제는 10개 이며, 실제 시험 문제와\n매우 다를 수 있음을 알립니다."}
        </S.FirstContent>
        <Spacer height="40px"/>
        <Button onClick={() => {
            if (page == 0) {
                setPage(1);
            } else {
                navigate(ProblemRoute);
            }
        }}>{page == 0? "다음으로": "문제 풀이 시작하기"}</Button>
        <Spacer height="40px"/>
        <Spacer/>
    </S.Container>
    );
}

export default Onboarding;