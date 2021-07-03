import React from 'react'
import './StepsList.css';

const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
}

export default function StepsList(props) {
  const { items, onDelete } = props;

  return (
    <table className='StepsList' >
      <thead className='StepsList-TableHead'>
        <tr className='StepsList-HeadersContainer'>
          <td className='StepsList-HeadersCell'>Дата (ДД.ММ.ГГ)</td>
          <td className='StepsList-HeadersCell'>Пройдено км</td>
          <td className='StepsList-HeadersCell'>Действия</td>
        </tr>
      </thead>
      <tbody className='StepsList-TableBody'>
        {items.map((day, index) => (
          <tr key={index}
            className="StepsListItem-Row" >

            <td className='StepsListItem-Cell'>{day.date.toLocaleString("ru", options)}</td>
            <td className='StepsListItem-Cell'>{day.distance}</td>
            <td className='StepsListItem-Cell'>
              <span
                onClick={() => onDelete(index)}>
                {day.date === '' ? '' : '✘'}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

