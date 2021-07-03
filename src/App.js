import React, { useState } from 'react'
import Form from './components/Form/Form'
import StepsList from './components/StepsList/StepsList'
import { INITIAL_FORM } from './components/Form/Form.const';

export default function App() {
  const [state, setState] = useState([INITIAL_FORM])

  const onAdd = (form) => {
    setState((prev) => {
      let result;
      const ind = prev.findIndex((item) => (form.date - item.date) === 0);
      if (ind !== -1) {
        prev[ind].distance += form.distance;
        result = [...prev];
      } else {
        result = [...prev, form];
      }
      return result.sort((a, b) => (b.date - a.date));;
    })
  }

  const onDelete = (item) => {
    setState((prev) => {
      prev.splice(item, 1);
      return [...prev]
    })
  }

  return (
    <div className='App'>
      <Form onAdd={onAdd} />
      <StepsList items={state} onDelete={onDelete} />
    </div>
  )
}
