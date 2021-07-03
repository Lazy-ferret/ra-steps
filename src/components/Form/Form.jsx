import React, { useState } from 'react'
import { INITIAL_FORM } from './Form.const';
import './Form.css';

export default function Form({ onAdd }) {
    const [form, setForm] = useState(INITIAL_FORM);

    const onFieldChange = (e) => {
        e.preventDefault();
        setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd({ date: new Date(form.date), distance: Number(form.distance) });
        setForm(INITIAL_FORM);
    }

    return (
        <form className='Form' onSubmit={onSubmit}>
            <div className='Form-DateContainer'>
                <label htmlFor="date">Дата (ДД.ММ.ГГ) </label>
                <input
                    className='Form-DateInput'
                    onChange={onFieldChange}
                    id="date"
                    name="date"
                    type="text"
                    value={form.date}
                />
            </div>

            <div className='Form-DistanceContainer'>
                <label htmlFor="distance"> Пройдено км </label>
                <input
                    className='Form-DistanceInput'
                    onChange={onFieldChange}
                    id="distance"
                    name="distance"
                    type="text"
                    value={form.distance}
                />
            </div>
            <button type='submit'
                className='Form-Button'
            >
                ОК
            </button>
        </form>
    )
}












