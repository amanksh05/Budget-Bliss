import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout'
import { useGlobalContext } from '../../context/GlobalContext'
import Form from '../form/Form'
import IncomeItem from '../incomeItem/IncomeItem'
function Income() {
  const { addIncome, getIncomes, incomes, deleteIncome, totalIncome } = useGlobalContext()
  useEffect(() => {
    getIncomes()
  }, [])
  return (
    <IncomeStyled>
      <InnerLayout>
        <div className='flex flex-row justify-between items-center bg-cyan-950 py-4 px-8 rounded-md mb-8'>
          <div className='text-xl font-medium'>
            Total Income
          </div>
          <div className='font-mono text-2xl font-semibold'>
            $ {totalIncome()}
          </div>
        </div>
        {/* <div className="income-content"> */}
        <div className="flex flex-col">
          <div className="form-container">
            <Form />
          </div>
          <div className='flex flex-col gap-6 mt-4 p-2'>
            <h5 className='underline underline-offset-8 font-base  '>
              Recent incomes
            </h5>
            <div className="flex flex-col gap-2">
              {
                incomes.map((income) => {
                  const { _id, title, amount, date, category, description, type } = income;
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
                    deleteItem={deleteIncome}
                  />
                })
              }
            </div>
          </div>
        </div>

      </InnerLayout>
    </IncomeStyled>
  )
}
const IncomeStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
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
        color: var(--color-green);
      }
    }
    .income-content{
      display: flex;
      gap: 2rem;
      .incomes{
        flex: 1;
      }
    }
`

export default Income