import React from 'react';

const Form = ({ handleSubmit, handleChange, value }) => {
  const btnStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: '1px solid #ccc',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px',
  };

  return (
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
        style={btnStyle}
      />
    </form>
  );
};

export default Form;