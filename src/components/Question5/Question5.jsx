import React, { useEffect, useState } from 'react';

/**
 * 시계만들기 퀘스트
 * 현재 시간을 표시하세요. (hh:MM:ss)
 * 아침9시40분5초 -> 09:40:05
 * 
 * - 학습내용
 * useEffect사용
 * 
 * 🔥 여기를 채워주세요!
 */
export default function Question5() {

    // Time state 세팅 (💡 new Date() -> 현재시각 가져옴 )
    const [time, setTime] = useState(new Date());

    // 시간 데이터 갱신 (1초마다 현재시각 가져오기)
    useEffect(() => {
        // 💡 setInterval() 
        //- javascript api 함수인 setInterval 함수를 사용해서 1초마다 현재시각 가져오기

        // 🔥 시간 가져오기
    }, []);

    /* 🔥 변수설정 
    const hours = 
    const minutes =
    const seconds = 
    */

    return (
        <div>
            {/* 🔥 <h1>{hours}:{minutes}:{seconds}</h1> */}
        </div>
    );
}

