import React from 'react'
import styled from 'styled-components'
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icons'
import Button from '../button/Button'
import { dateFormat } from '../../utils/dateFormat'

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {
    const categoryIcon = () => {
        switch (category) {
            case 'salary': return money;
            case 'freelancing': return freelance;
            case 'investments': return stocks;
            case 'stocks': return users;
            case 'bitcoin': return bitcoin;
            case 'bank': return card;
            case 'youtube': return yt;
            case 'other': return piggy;
            default: return '';

        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education': return book;
            case 'groceries': return food;
            case 'health': return medical;
            case 'subscriptions': return tv;
            case 'takeaways': return takeaway;
            case 'clothing': return clothing;
            case 'travelling': return freelance;
            case 'other': return circle;
            default: return '';
        }
    }


    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className='flex flex-row items-center gap-10 pl-2'>
                <div className='w-12 h-12 flex items-center justify-center rounded-full border-2 border-solid border-gray-500 background: #f5f5f5 text-2xl'>
                    {type === 'expense' ? expenseCatIcon() : categoryIcon()}
                </div>
                <div className='flex flex-col gap-2'>

                    <h5 className='text-xl font-semibold capitalize'>{title}</h5>

                    <div className="flex flex-wrap gap-10">
                        <p className='text-sm flex items-center gap-2'>{dollar}{amount}</p>
                        <p className='text-sm flex items-center gap-2'>{calender} {dateFormat(date)}</p>
                        <p className='text-sm flex items-center gap-2'>{comment} {description}</p>
                    </div>

                </div>
            </div>
            <div className="btn-con">
                <Button
                    icon={trash}
                    bPad={'1rem'}
                    color={'#fff'}
                    iColor={'#c90000'}
                    onClick={() => deleteItem(id)}
                />
            </div>

        </IncomeItemStyled>
    )
}
const IncomeItemStyled = styled.div`
    background:rgba(0, 0, 0, 0.455);
    border: 2px solid #4c4c4c;
    box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
    border-radius: 10px;
    padding: 1rem;
    /* margin-bottom: 1rem; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: #222260;
    /* .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
    } */
    /* .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }
        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items: center;
                gap:1.5rem;
            }
            p{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                color: var(--primary-color);
                opacity: 0.8;
            }
        }
    } */
`

export default IncomeItem