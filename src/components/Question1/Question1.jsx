import React, { useState } from 'react';
import ColorComponent from './ColorComponent';

/**
 * - 학습내용
 * 1. 단순 타입 State 관리 (String 문자열)
 * 2. Props 전달 & 하위 컴포넌트에서 전달받은 props 사용
 * 3. 클릭 이벤트 복습
 * 
 * 요구사항
 * 1. 버튼을 클릭했을때 박스의 배경화면을 바꾸세요. (레드인 경우 -> 파란색, 파란색인경우 -> 레드)
 * - 처음화면에 들어왔을때 (default)는 red입니다.
 * - 배경화면 적용은 postCss의 class를 바꾸는 방식으로 적용합니다. (css는 건들지마세요.)
 * - 배경화면은 두가지(red/blue)만 있습니다. 
 * - 빨간색 배경: .bg_red  //  파란색 배경: .bg_blue
 * - 💡hint : ColorComponent에 props로 color값을 전달하세요.
 * 
 * 2. 지금 배경색이 무슨색인지 텍스트로 출력해주세요. 
 *    현재색에 맞게 RED/BLUE
 */
export default function Question1() {
    // 🔥 state를 정의하세요. 
    const [color, setColor] = useState(COLOR.RED);  // 🧸 GOOD! : "default는 red로 설정 잘하셨습니다."
    //2가지
    //1. 코드를 작성하면서 오류를 체크할수있어.
    //2. 변경점 하나로 돼

    /**
     * 단, 제가 이 파일 제일 아래에 보면 상수(값이 변하지 않는 Data)를 정의해두었습니다.
       모범답안 제공 : const [color, setColor] = useState(COLOR.RED); 이렇게 변경해주는것이 더욱 좋은 코딩습관입니다.
     *  */ 

    const handleClick = () => {
        // 🔥 버튼 클릭이벤트를 coding해주세요.
        setColor(color===COLOR.RED?COLOR.BLUE:COLOR.RED) // 🧸 GOOD! : setColor()를 호출해서 state를 업데이트 해주는것이 맞아요. 
        // setColor(color => color===COLOR.RED?COLOR.BLUE:COLOR.RED);

        /**
         * 🧸 클릭했을때 Color를 업데이트 해야하는데 
         * 현재 state가 RED라면 -> Blue로, 그렇지 않다면(현재 blue라면) -> red로 업데이트 하면된다.
         * 3항 연산자 사용
         */
    }

    return (
        <div>
            <p> { `🔥 지금 배경색은 ${color} 입니다. `}</p>  {/* 🧸 정답제공 : 현재 color state를 출력합니다. */}
            <button onClick={handleClick}> 색 바꾸기 </button>
            
            <ColorComponent color={color}/> 
            {/* 🧸 color라는 props에 COLOR라는 값을 넣어주셨는데, 이 값은 어떤 값인가요?? */}
            {/* 🧸 저희 현재 파일에 COLOR라는 변수는 어디에도 없습니다.! color만 있죠. */}
            {/* 🧸 정답제공 : <ColorComponent color={color}/>  */}
        </div>
    );
}

// 상수
export const COLOR = {
    RED: 'RED',
    BLUE: 'BLUE'
}

