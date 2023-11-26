import React from 'react'

const Stats = ({ toDoList }) => {
  let conutList = toDoList.length;
  return (
    <div className='stats'>
      <p className='notify'>
      {conutList === 0 ? 'You got everything! Ready to go' : `You have ${conutList} items on your list.`}
    </p>
    </div>
  )
}

export default Stats;