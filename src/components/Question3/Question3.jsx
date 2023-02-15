import React, { useState } from 'react';
import AddBook from './AddBook';
import Book from './Book';

/**
 * ⭐️ 학습내용
 * 1. 리스트[] state에 대한 상태관리 (추가 및 삭제)
 * 
 * 도서에 대한 Data는 2개
 * - title(String) : 제목  
 * - author(String) : 저자
 * 
 * 🫵 요구사항
 * 1. 사용자가 입력한 정보를 리스트에 추가시켜보세요. ==> AddBook 컴포넌트에 추가 설명되어있음
 * 2. 삭제이벤트 구현
 *   - 삭제하고자 하는 책의 이름을 입력받아서, 이름값이 완전 동일한 책이 있는경우 삭제시키기
 * 3. 현재 도서의 리스트를 화면에 출력시키기 => Book컴포넌트
 * 
 */
export default function Question3() {
    const [books, setBooks] = useState([
        {author:"1", title:"제목"},
        {author:"yeni2", title:"제목2"}
    ]);

    /*
    books = {
        book = {
            author, title
        }
    }

    books = [ 
        {author,title}, {auth,title}
    ]
    */

    // 🔥 입력한 도서 리스트에 추가하기
    const addBook = (e, book) => {
        // 🔥 + 브라우저 기본동작 막기 (새로고침 안되게 막기)
        e.preventDefault();
        //1. 변경 하기전의 state 유지 
        //2. 내가 바꾸고자(추가하고자)하는것만 적용
        setBooks(books=>{return[...books, book]});
        
        
    }

    console.log(books);

    const handleDelete = () => {
        // 💡 사용자가 입력한 값을 title 변수에 담음 => 이값으로 삭제 처리 구현하면된다!
        const title = prompt(`삭제하고 싶은 책의 이름은 무엇인가요?`);

        // 🔥 삭제구현
        const result = books.filter(book => title !== book.title);
        setBooks(result)
        // setBooks(book => books.filter(book => title !== book.title));
    }

    


    return (
        <div>
            {/* 🔥 도서 추가하기 */}
            <AddBook addBook={addBook}/>

            {/* 🔥 도서 삭제하기 */}
            <button onClick={handleDelete}> 도서 삭제하기 </button>

            {/* 🔥 도서 리스트 출력 */}
            {books.map((book)=><Book book={book}/>)}

            {/* return에 () 리턴안에 html 두줄 이상 일 때 
                (book)=>{return()}
                여기서 {return} 는 코드 두 줄 이상 일 때
                
                (book) => { return }
                (book) => console.log
                */}
            
        </div>
    );
}

