import React, { useState } from 'react';

export default function Question4() {
    const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);

  function handleIncrement() {
    // 🔥 카운트 1증가시키기
  }

  function handleDecrement() {
    // 🔥 카운트 1감소시키기 
  }

  function handleNameChange(e) {
    // 🔥 이름입력에 대한 이벤트 처리 
    setName(e.target.value);
  }

  function handleAddTodo() {
    // 🔥 리스트 추가시키기
    
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
      <ul>
            {/* 🔥 사용자가 추가한 리스트 출력 */}
            {/* 위 요구사항에 의해 똑같은 텍스트를 가진 아이템이 계속 나올것임. */}
      </ul>
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

