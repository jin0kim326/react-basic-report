import React, { useEffect, useState } from 'react';

/**
 * 사용자가 입력한 도서 정보를 상위컴포넌트(Question3)에 전달
 * 
 * ⭐️학습내용 
 * 1. 제어 컴포넌트(Controlled Component) vs 비제어 컴포넌트(UnControlled Component)
 * 
 * 요구사항
 * 1. 제어 컴포넌트로 구현해보세요.
 *  - 제어 컴포넌트란 사용자의 입력을 기반으로 state를 관리, 업데이트 하는 컴포넌트입니다.
 *  - 즉 사용자가 input 태그에 입력할때마다 상태값을 업데이트 
 *  - 최종적으로 버튼을 클릭했을때 입력되어 있는 정보를 상위 컴포넌트로 전달
 *  💡 hint : 상위컴포넌트로 state전달하는 방법 : 함수의 parameter 사용
 * 
 * 2. 도서를 추가하는 이벤트 추가해보세요.
 */

export default function AddBook({addBook}) {

    const [book, setBook] = useState({title:'', author:'' });

    // 💡 hint : controlled Component로 구현하기 위해 " 값이 변경될때 "마다 state update 구현
    const handleChange = (e) => {
        //🔥 

        //object distructor
        const {name, value} = e.target;
        // const name = e.target.name;
        // const value = e.target.value;
        setBook(book=>{return{...book, [name]:value}});        
    }



    return (
        <form onSubmit={(e)=>addBook(e, book)}>
            {/* <input type="text" name='title' placeholder='제목' onChange={(e) => setBook(book=>{return{...book, title:e.target.value}}) } />
            <input type="text" name='author' placeholder='저자' onChange={(e) => setBook({...book, author:e.target.value})}/> */}
            <input type="text" name='title' placeholder='제목' onChange={handleChange} />
            <input type="text" name='author' placeholder='저자' onChange={handleChange}/>
            <button type='submit'>추가하기</button>
        </form>
    );
}

