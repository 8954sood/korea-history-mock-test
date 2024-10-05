import { useState } from "react";
import * as S  from "./Onboarding.style";
import { Button } from "../../component/Button.style";
import { useNavigate } from "react-router-dom";
import { ProblemRoute } from "../problem/Problem.nav";
import { Spacer } from "../../component/Spacer.style";
import axios from "axios";
import { webhookUrl } from "../../wrapper/envWrapper";


const Onboarding = () => {

    const [page, setPage] = useState(0);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const onChagneName = (e) => {
        setName(e.target.value);
    }

    const Test = () => {        
        axios.post(
            webhookUrl,
            {
                content: null,
                embeds: [
                    {
                        title: "한국사 응시 시작 알림",
                        description: `응시자 : ${name}\n`,
                        color: 5763719,
                        timestamp: new Date().toISOString()
                    }
                ]
            }
        ).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
    <S.Container>
        <S.Title>
            {page == 0? "2024 2학년 2학기 중간고사 \n(모의) 한국사": page == 1? "유의사항": "응시 시작하기"}
        </S.Title>
        {page != 2 && (
            <S.FirstContent>
                {page == 0? "열심히 준비한 한국사 실력을\n검증해보세요!": "총 문제는 10개 이며, 실제 시험 문제와\n매우 다를 수 있음을 알립니다."}
            </S.FirstContent>
        )}
        {page == 2 && (
            <S.ThirdContainer>
                <S.Text>이름 :</S.Text>
                <input type="text" value={name} onChange={onChagneName}/>
            </S.ThirdContainer>
        )}
        <Spacer height="40px"/>
        <Button onClick={() => {
            if (page != 2) {
                setPage(page + 1);
            }
            else {
                Test()
                navigate(ProblemRoute);
            }
        }}>
            {page === 0 || page === 1 ? "다음으로" : "응시하기"}
        </Button>
        <Spacer height="40px"/>
        <Spacer/>
    </S.Container>
    );
}

export default Onboarding;