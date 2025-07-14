import React, { useState } from 'react';
import './App.css';
import Lists from './components/Lists'; // Lists 컴포넌트 임포트
import Form from './components/Form';   // Form 컴포넌트 임포트

const App = () => {
  const [todoData, setTodoData] = useState([
    { id: 1, title: '공부하기', completed: false },
    { id: 2, title: '운동하기', completed: false },
    { id: 3, title: '영화보기', completed: true }
  ]);
  const [value, setValue] = useState("");

  const handleClick = (id) => {
    const newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    };

    setTodoData([...todoData, newTodo]);
    setValue("");
  };

  const handleCompleteChange = (id) => {
    const newTodoData = todoData.map(data => {
      if (data.id === id) {
        return { ...data, completed: !data.completed };
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  return (
    <div className="container">
      <div className='todoBlock'>
        <div className='title'>
          <h1>To-Do List</h1>
        </div>

        {/* Lists 컴포넌트에 props 전달 */}
        <Lists
          todoData={todoData}
          handleClick={handleClick}
          handleCompleteChange={handleCompleteChange}
        />

        {/* Form 컴포넌트에 props 전달 */}
        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          value={value}
        />
      </div>
    </div>
  );
}

export default App;