import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import CSS for DatePicker
import { useGlobalContext } from '../../context/GlobalContext';
import Button from '../button/Button';
import { plus } from '../../utils/Icons';

function Form() {
    const { addIncome, getIncomes } = useGlobalContext();
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '', // Initialize with current date
        category: '',
        description: '',
    });

    const { title, amount, date, category, description } = inputState;

    const handleSubmit = (e) => {
        e.preventDefault();
        addIncome(inputState);
        // getIncomes()
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })


    };

    const handleInput = (name) => (e) => {
        setInputState({ ...inputState, [name]: e.target.value });
    };

    return (
        <FormStyled onSubmit={handleSubmit}>
            <div className='flex flex-col gap-3 justify-center items-center mb-8 font-medium text-1xl'>
                Income Details
                <div className='w-2/4 h-px rounded-lg bg-[#a0a0a0]'></div>
            </div>
            <div className="input-control ">
                <input
                    type="text"
                    value={title}
                    name="title"
                    placeholder="Title of income"
                    onChange={handleInput('title')}
                    className='px-6 py-3 text-base rounded-md w-full text-black'
                />
            </div>
            <div className='flex flex-row flex-wrap w-full gap-3 justify-between '>

                <div className="input-control flex-1">
                    <input
                        type="number"
                        value={amount}
                        name="amount"
                        placeholder="Salary amount"
                        onChange={handleInput('amount')}
                        className='px-6 py-3 w-full text-base rounded-md  text-black'
                    />
                </div>
                <div className="input-control flex-1 ">
                    <DatePicker
                        id="date"
                        placeholderText="Enter a Date"
                        selected={date}
                        dateFormat="dd/MM/yyyy"
                        onChange={(date) => setInputState({ ...inputState, date })}
                        className='px-6 py-3 text-base w-full rounded-md text-black'
                        wrapperClassName="w-full"
                    />
                </div>
                <div className="text-black flex-1">
                    <select
                        required
                        value={category}
                        name="category"
                        id="category"
                        onChange={handleInput('category')}
                        className='custom-select px-6 py-3 text-base rounded-md w-full pr-10 appearance-none  '
                    >
                        <option value="" disabled>Select Option</option>
                        <option value="salary">Salary</option>
                        <option value="freelancing">Freelancing</option>
                        <option value="investments">Investments</option>
                        <option value="stocks">Stocks</option>
                        <option value="bitcoin">Bitcoin</option>
                        <option value="bank">Bank</option>
                        <option value="youtube">YouTube</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div className="input-control">
                <textarea
                    value={description}
                    name="description"
                    placeholder="Add a description"
                    id='description'
                    cols="30"
                    rows="2"
                    onChange={handleInput('description')}
                    className='px-6 py-3 text-base rounded-md w-full text-black '
                />
            </div>
            <div className="submit-btn w-full">
                <Button
                    name={"Add Income"}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}

                    color={'#fff'}

                />
            </div>
        </FormStyled>
    );
}

const FormStyled = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 0.8rem; 
    padding: 2rem 2rem;
    background-color: #3c3c3c;
    border-radius: 8px;
    /* padding-bottom: 20px; */
    margin-bottom: 20px;
`;

export default Form;
