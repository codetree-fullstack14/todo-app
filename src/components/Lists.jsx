import React from 'react';
import List from './List';
 // List 컴포넌트 임포트

const Lists = ({ todoData, handleClick, handleCompleteChange }) => {
  return (
    <div>
      {todoData.map((data) => (
        <List
          key={data.id}
          data={data} // 개별 할 일 데이터
          handleClick={handleClick} // 삭제 핸들러
          handleCompleteChange={handleCompleteChange} // 완료 상태 변경 핸들러
        />
      ))}
    </div>
  );
};

export default Lists;