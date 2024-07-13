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
            <div className="input-control">
                <input
                    type="text"
                    value={title}
                    name="title"
                    placeholder="Salary title"
                    onChange={handleInput('title')}
                />
            </div>
            <div className="input-control">
                <input
                    type="number"
                    value={amount}
                    name="amount"
                    placeholder="Salary amount"
                    onChange={handleInput('amount')}
                />
            </div>
            <div className="input-control">
                <DatePicker
                    id="date"
                    placeholderText="Enter a Date"
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => setInputState({ ...inputState, date })}
                />
            </div>
            <div className="selects input-control">
                <select
                    required
                    value={category}
                    name="category"
                    id="category"
                    onChange={handleInput('category')}
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
            <div className="input-control">
                <textarea
                    value={description}
                    name="description"
                    placeholder="Add a description"
                    id='description'
                    cols="30"
                    rows="4"
                    onChange={handleInput('description')}
                />
            </div>
            <div className="submit-btn">
                <Button
                    name={"Add Income"}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                    h
                />
            </div>
        </FormStyled>
    );
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input,textarea,select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0,0,0,0.6);
        color: rgba(34,34,96,0.9);
        &::placeholder{
            color: rgba(34,34,96,0.4);
        }
    }
    .input-control{
        input{
            width: 100%;
        }
    }
    .selects{
        display: flex;
        justify-content: flex-end;
        select{
            color: rgba(34,34,96,0.4);
            &:focus ,&:active{
                color: rgba(34,34,96,1);
            }
        }
    }

    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0,0,0,0.6);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;

export default Form;
