import React, { useState, useEffect } from 'react'; // useState, useEffect 훅을 임포트합니다.
import './App.css';

const App = () => {
  // 1. 상태(state) 정의: useState 훅 사용
  // todoData: 할 일 목록
  const [todoData, setTodoData] = useState([
    { id: 1, title: '공부하기', completed: false },
    { id: 2, title: '운동하기', completed: false },
    { id: 3, title: '영화보기', completed: true }
  ]);
  // value: 새로운 할 일 입력 필드의 값
  const [value, setValue] = useState("");

  // 2. 인라인 스타일 정의 (상수는 컴포넌트 외부 또는 내부에 정의 가능)
  const btnStyle = {
    backgroundColor: '#fff',
    color: 'black',
    border: '1px solid #ccc',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    float: 'right',
  };

  // 3. getStyle 메서드 (함수형 컴포넌트에서는 일반 함수로 정의)
  const getStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
      backgroundColor: completed ? '#e0e0e0' : '#f9f9f9',
      margin: '5px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    };
  };

  // 4. 이벤트 핸들러 함수들
  const handleClick = (id) => {
    const newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData); // setTodoData로 상태 업데이트
  };

  const handleChange = (e) => {
    setValue(e.target.value); // setValue로 상태 업데이트
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    };

    setTodoData([...todoData, newTodo]); // setTodoData로 새 배열 전달
    setValue(""); // 입력 필드 초기화
  };

  const handleCompleteChange = (id) => {
    const newTodoData = todoData.map(data => {
      if (data.id === id) {
        return { ...data, completed: !data.completed };
      }
      return data;
    });
    setTodoData(newTodoData); // setTodoData로 상태 업데이트
  };

  // 5. JSX 렌더링 (클래스 컴포넌트의 render() 내용과 유사)
  return (
    <div className="container">
      <div className='todoBlock'>
        <div className='title'>
          <h1>To-Do List</h1>
        </div>

        {todoData.map((data) => (
          <div style={getStyle(data.completed)} key={data.id}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <input
                type='checkbox'
                checked={data.completed}
                onChange={() => handleCompleteChange(data.id)}
                style={{ marginRight: '10px' }}
              />
              {data.title}
            </div>
            <button style={btnStyle} onClick={() => handleClick(data.id)}>삭제</button>
          </div>
        ))}

        <form onSubmit={handleSubmit} style={{ display: 'flex', marginTop: '20px' }}>
          <input
            type="text"
            name='value'
            style={{ flexGrow: 1, padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
            placeholder='새로운 할 일을 입력하세요'
            value={value}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="입력"
            style={{ ...btnStyle, backgroundColor: '#4CAF50', color: 'white', marginLeft: '10px', float: 'none' }}
          />
        </form>
      </div>
    </div>
  );
}

export default App;