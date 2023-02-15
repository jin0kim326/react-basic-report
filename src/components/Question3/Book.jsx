import React from 'react';

/**
 * 요구사항 
 * 1. 도서정보(title,author)를 상위컴포넌트로부터 props로 받아서 화면에 랜더링 하세요.
 */
export default function Book({book}) {
    return(
            <div style={{ display:"flex"}}>
                <h2>title : {book.title}</h2>
                {/* 🔥 랜더링 추가하기 */}
                <h6>author : {book.author}</h6>
            </div>
        );
}

