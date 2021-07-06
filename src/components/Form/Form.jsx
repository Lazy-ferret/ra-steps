import React, { useState } from 'react'
import { INITIAL_FORM } from './Form.const';
import './Form.css';

export default function Form({ onAdd }) {
    const [form, setForm] = useState(INITIAL_FORM);

    const onFieldChange = (e) => {
        e.preventDefault();
        setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
    }

    const checkValidity = (date, distance) => {
        const errorList = [];

        if ((/^[0-3][0-9]\.[0-1][0-9]\.[0-9]{4}$/).test(date)) {
            const [d, m, y] = date.split('.');
            if (d < 1 || m < 1 || y < 1 || d > 31 || m > 12) {
                errorList.push({ message: 'Неверный формат даты' });
            }
        } else {
            errorList.push({ message: 'Неверный формат даты' });
        }
        if (Number.isNaN(Number.parseFloat(distance))) {
            errorList.push({ message: 'Неверное расстояние' });
        }
        return errorList;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const errorList = checkValidity(form.date, form.distance)

        if (errorList.length > 0) {
            errorList.forEach(e => alert(e.message))
        } else {
            const [d, m, y] = form.date.split('.');
            const currentDate = new Date(y, m - 1, d);
            onAdd({
                date: currentDate,
                distance: Number(form.distance)
            });
        }
        setForm(INITIAL_FORM);
    }

    return (
        <form className='Form' onSubmit={onSubmit}>
            <div className='Form-DateContainer'>
                <label htmlFor="date">Дата (ДД.ММ.ГГГГ) </label>
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












