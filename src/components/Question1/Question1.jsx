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

    const handleClick = () => {
        // 🔥 버튼 클릭이벤트를 coding해주세요.
    }

    return (
        <div>
            <p> { `🔥 지금 배경색은 ???? 입니다. `}</p>
            <button> 색 바꾸기 </button>
            <ColorComponent /> {/* 🔥 */}
        </div>
    );
}

export const COLOR = {
    RED: 'RED',
    BLUE: 'BLUE'
}

