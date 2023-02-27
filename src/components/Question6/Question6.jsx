import React, { useEffect, useState } from 'react';

/**
 * API 데이터 가져오기 연습
 * 참고 : 데이터는 public/data안에 json형태로 존재함 
 * 
 * 서버에 HTTP GET 메소드를 요청해서 데이터를 가져오는 화면이다.
 * 이 API를 호출하면 데이터를 가져오는데에 2초가 걸린다.
 * 데이터를 가져올 동안 사용자에게 로딩화면을 제공한다.
 * 
 * 🔥 곰돌이 부분을 처리해주세요~
 */
export default function Question6() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('data/user-data.json')  // 로컬의 json데이터를 가져온다.
    //   fetch('https://jsonplaceholder.typicode.com/users')   // 참고 : ex.외부 API를 호출하는 경우
        .then(response => response.json())                     // 참고 : JSON 데이터 -> Javascript Object 변환
        .then(data => {
          // 🔥 state 업데이트 (데이터, 로딩)
        })
        .catch(error => console.error(error));
    }, 2000);   // 데이터를 가져오는데에 2초 걸린다고 가정하기위해 세팅
  }, []);

{/* 🔥 1. 로딩상태 화면 랜더링 (간단하게 Loading... 텍스트 출력.)*/}
{/* 🔥 2. 데이터를 가져온 후 리스트 출력 (user의 이름/이메일 2가지) */}
  return (
    <div>
      
    </div>
  );
}

