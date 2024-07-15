import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout'
import { useGlobalContext } from '../../context/GlobalContext'
import IncomeItem from '../incomeItem/IncomeItem'
import ExpenseForm from './ExpenseForm'
function Expenses() {
  const { addExpense, getExpenses, expenses, deleteExpenses, totalExpense } = useGlobalContext()
  useEffect(() => {
    getExpenses()
  }, [])
  return (
    <ExpenseStyled>
      <InnerLayout>
        <div className='flex flex-row justify-between items-center bg-cyan-950 py-4 px-8 rounded-md mb-8'>
          <div className='text-xl font-medium'>
            Total Expense
          </div>
          <div className='font-mono text-2xl font-semibold'>
            $ {totalExpense()}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className='flex flex-col gap-6 mt-4 p-2'>
            <h5 className='underline underline-offset-8 font-base  '>
              Recent expenses
            </h5>
            <div className="flex flex-col gap-2">
              {
                expenses.map((expense) => {
                  const { _id, title, amount, date, category, description, type } = expense;
                  return <IncomeItem
                    key={_id}
                    id={_id}
                    title={title}
                    description={description}
                    amount={amount}
                    date={date}
                    type={type}
                    category={category}
                    indicatorColor="var(--color-green)"
                    deleteItem={deleteExpenses}
                  />
                })
              }
            </div>
          </div>
        </div>

      </InnerLayout>
    </ExpenseStyled>
  )
}
const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-expense{
      display: flex;
      justify-content: center;
      align-items: center;
      background: #FCF6F9;
      border: 2px solid #FFFFFF;
      box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
      border-radius: 20px;
      padding: 1rem;
      margin: 1rem 0;
      font-weight: 600;
      font-size: 2rem;
      gap: .5rem;
      span{
        font-size: 2.5rem;
        font-weight: 800;
        color: red;
      }
    }
    .expense-content{
      display: flex;
      gap: 2rem;
      .expenses{
        flex: 1;
      }
    }
`

export default Expenses