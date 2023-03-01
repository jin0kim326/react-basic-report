import React, { useState } from 'react';

export default function Question4() {
    const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  // const [num, setNum] = useState(0);
  const [todos, setTodos] = useState([
    {
      keyNum : 0,
      text : "New Todo"
    }
  ]);


  // object 타입의 state update
  // 
  // const user = {
  //   name :" jy"
  //   age :26
  // }
  // usestate 부분이 있다치고 
  // setUser(user=>{return{...user, age : age+1}})


  function handleIncrement() {
    // 🔥 카운트 1증가시키기
    
    setCount((count) => count + 1);
  }

  function handleDecrement() {
    // 🔥 카운트 1감소시키기 
    setCount((count) => count - 1);
  }

  function handleNameChange(e) {
    // 🔥 이름입력에 대한 이벤트 처리 
    setName(e.target.value);
  }

  function handleAddTodo(e) {
    // 🔥 리스트 추가시키기
    e.preventDefault();
    // setNum((num) => num + 1)
    setTodos(todos => [...todos, {keyNum: 1, text:"new text" }]);    
    // 사용자가 버튼을 클릭할때마다 오브젝트를 추가하는데 유일한 키와 고정된 텍스트값을 가진다
    // ex { id : 고유한 키값, text: "New Todo(고정된 스트링 값))"}
  }

  return (
    <div>
      { name !== '' && <h1>{name}'s Todo List</h1>}
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <input type="text" value={name} onChange={handleNameChange} placeholder={`이름을 입력하세요`}/>

      <button onClick={handleAddTodo}>Add Todo</button>
      <hr/>
      <ul>
            {/* 🔥 사용자가 추가한 리스트 출력 */}
            {/* 위 요구사항에 의해 똑같은 텍스트를 가진 아이템이 계속 나올것임. */}
        {
          todos.map((todo, index)=> {
            return(
              <li key={index}>
                <span>{todo.keyNum}</span>
                <span>{todo.text}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

