import { useEffect, useState } from "react";
import { Button } from "../../component/Button.style";
import { Spacer } from "../../component/Spacer.style";
import { 문제4, 문제6, 문제8 } from "../../wrapper/imageWrapper";
import * as S  from "./Problem.style";
import { ProblemModel } from "./Problem.model";

export const Problem = () => {

    const [failedProblems, setFailedProblems] = useState([])
    const [successProblems, setSuccessProblems] = useState([])
    
    const [problems, setProblems] = useState(
        [
            new ProblemModel(
                1,
                "다음 “1920년대 문화 통치” 와 관련 없는 것은?",
                null,
                null,
                ["회사령이 폐지되고 신고제가 도입되었다.","산미 증식 계획으로 인한 이중적 수탈 구조로 한국 농민이 몰락하였다.", "농민의 영구 경작권이 상실되었다.", "관셰제가 폐지되어 한국인 소유의 기업이 큰 타격을 입었다.", "보통 경찰제가 실시되었다."],
                3,
                8
            ),
            new ProblemModel(
                2,
                "단체와 관계가 옳지 않게 짝지어 진 것은?",
                null,
                null,
                ["독립 의군부 - 민주 공화국 수립 주장 ", "대한 광복회 - 민주 공화국 수립 지향", "대한인 국민회 - 군자금 지원 활동", "대조선 국민군단 - 무장 독립 전쟁 준비", "신한 청년당 - 파리 강화 회의 대표 파견"],
                1,
                10
            ),
            new ProblemModel(
                3,
                "단체와 관계가 옳지 않게 짝지어 진 것은?",
                "강도 일본을 쫓아내려면 오직 혁명으로만 가능하며, 혁명이 아니고는 강도 일본을 쫓아낼 방법이 없는 바이다. ······ 중략\n민중은 우리 혁명의 대본영(大本營)이다.\n폭력은 우리 혁명의 유일한 무기이다.\n우리는 민중 속으로 가서 민중과 손을 맞아 끊임 없는 폭력 - 암살, 파괴, 폭동 - 으로써 강도 일본을 통치를 타도하고 ······ 생략",
                null,
                ["박재혁", "김익상", "김상옥", "김지섭", "이봉창"],
                5,
                11
            ),
            new ProblemModel(
                4,
                "(가), (나), (다) 에 대한 사실로 옳지 않은 것은?",
                null,
                문제4,
                ["(가) 지역은 권업회가 활동하던 지역이야.", "(가) 지역은 신한촌이 건설되었어.", "(나) 지역은 중광단 이라는 무장 독립 단체가 활동했어.", "(다) 지역은 대종교가 활동한 지역이야.", "(다) 지역은 신흥 강습소가 지어졌어."],
                4,
                12
            ),
            new ProblemModel(
                5,
                "다음 자료를 강령으로 가진 단체에 대한 설명으로 옳은 것은?",
                "1. 부호의 의연금 및 일본인이 불법 징수하는 세금을 압수하여 무장을 준비한다.\n2. 남북 만주에 군관 학교를 세워 독립 전사를 양성한다.\n3. 종래의 의병 및 해산 군인과 만주 이주민을 소집하여 훈련한다.\n7. 무력이 완비되는 대로 일본인 섬멸전을 단행하여 최후의 목적을 이룬다.",
                null,
                ["고종을 복위시키려는 목표를 가지고 있었어.", "해당 단체는 북로 군정서로 발전했어.", "민주 공화국의 수립을 지향했어.", "임병찬의 주도로 결성되었어.", "대한민국 임시 정부 수립의 기반을 조성했어."],
                3,
                9
            ),
            new ProblemModel(
                6,
                "(가)에 들어갈 내용으로 옳지 않은 것은?",
                null,
                문제6,
                ["삼권 분립의 원칙에 따라 의정원, 국무원, 법원으로 구성되었어요.", "『 한 · 일 관계 사료집 』을 간행했어요.", "소련으로부터 독립운동 자금을 지원받았어요.", "북만주에 광복군 사령부, 광복군 총영을 두어 무장 투쟁을 전개했어요.", "상하이에 정부를 두고 있었어요."],
                4,
                12
            ),
            new ProblemModel(
                7,
                "다음 자료의 결과로 옳은 것은?",
                "오늘날 조선인이 세계 문화 민족의 일원으로 남과 어깨를 견주고 우리의 생존을 유지하며 문화의 창조와 향상을 기도하려면, 대학의 설립이 아니고는 다른 방도가 없도다.",
                null,
                ["일제가 정치 운동이라는 구실로 탄압하였다.", "일제의 우민화 교육을 극복하였다.", "한인 애국단을 조직하였다.", "약소민족의 반제국주의 운동에 영향을 주었다.", "무력 투쟁 운동으로 발전했다."],
                1,
                9
            ),
            new ProblemModel(
                8,
                "다음 자료의 설명으로 옳지 않은 것은?",
                null,
                문제8,
                ["『 조선일보 』가 전개한 운동이다.", "‘민중 속으로’ 라는 의미를 가진 운동이다.", "농촌 계몽 운동이다.", "실력 양성 운동의 일종이다.", "학생을 모아 행사를 기획하고 교재를 공급했다."],
                1,
                9
            ),
            new ProblemModel(
                9,
                "다음 자료의 대한 설명으로 옳지 않은 것은?",
                "내 살림 내 것으로! ······ 중략\n입어라! 조선 사람이 짠 것을 / 먹어라! 조선 사람이 만든 것을 / 써라! 조선 사람이 지은 것을 / 조선사람, 조선 것.",
                null,
                ["개성에서 조만식이 주도하였다.", "사회주의자로부터 자본가와 상인의 이익만을 추구하는 이기적 운동이라고 비난을 받기도 하였다.", "토산품 애용, 근검저축 등을 주장하였다.", "“내 살림 내 것으로”, “조선 사람 조선 것” 등의 구호를 앞세웠다.", "민족의 산업의 보호 및 육성을 위한 운동이었다."],
                1,
                9
            ),
            new ProblemModel(
                10,
                "다음 중 의열단에 대한 설명으로 옳지 않은 것은?",
                null,
                null,
                ["식민 통치 기구나 수탈 기구에 대한 거사를 치루었다.", "중국 공산당 정부의 지원으로 조선 혁명 간부 학교를 설립 하였다.", "김원봉의 주도로 설립되었다.", "민족 혁명당 결성에 주도적 역할을 담당하였다.", "신채호의 ｢조선 혁명 선언｣ 을 통해 활동에 의미를 부여하였다."],
                2,
                11
            )
        ]
    )

    const [count, setCount] = useState(1);

    const [nowSelect, setNowSelect] = useState(1);

    const [nowProblem, setNowProblem] = useState(() => {
        const randomIndex = Math.floor(Math.random() * problems.length);
        return problems.splice(randomIndex, 1)[0];
    })

    const onChangeSelect = (e) => {
        setNowSelect(e.target.value);
    }

    const onClickNext = () => {
        if (problems.length === 0) {

            if (nowSelect == nowProblem.answer) {
                setSuccessProblems([...successProblems, nowProblem]);
            } else {
                setFailedProblems([...failedProblems, nowProblem]);
            }   
            setNowProblem(new ProblemModel(
                11,
                "문제 풀이가 끝났습니다.",
                null,
                null,
                [`총 점수: ${successProblems.map((item) => (item.score)).reduce((a, b) => a+ b, 0)}`, "틀린 문제"],
                0,
            ))
            return;
        }

        // 문제 정답 처리
        if (nowSelect == nowProblem.answer) {
            setSuccessProblems([...successProblems, nowProblem]);
        } else {
            setFailedProblems([...failedProblems, nowProblem]);
        }

        // 다음 문제 랜덤 선택

        const randomIndex = Math.floor(Math.random() * problems.length);
        setNowSelect(1);
        setNowProblem(problems.splice(randomIndex, 1)[0]);
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