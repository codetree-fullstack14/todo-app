import React from 'react';

const List = ({ data, handleClick, handleCompleteChange }) => {
  const btnStyle = {
    backgroundColor: '#fff',
    color: 'black',
    border: '1px solid #ccc',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    float: 'right',
  };

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

  return (
    <div style={getStyle(data.completed)}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
  );
};

export default List;