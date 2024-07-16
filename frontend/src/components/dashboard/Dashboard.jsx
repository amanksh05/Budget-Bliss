import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layout'
import Chart from '../chart/Chart'
import { dollar } from '../../utils/Icons'
import { useGlobalContext } from '../../context/GlobalContext'
import History from '../history/History'

function Dashboard() {
  const { totalIncome, incomes, expenses, totalExpense, totalBalance, transactionHistory, getIncomes, getExpenses } = useGlobalContext()

  useEffect(() => {
    getExpenses()
    getIncomes()
  }, [])
  return (
    <DashboardStyled>
      <InnerLayout>
        <div className="flex flex-col gap-10">
          {/* chart+ transaction */}
          <div className="flex flex-col items-center justify-between gap-4">

            <div className="flex flex-row gap-5 w-full  justify-evenly ">


              <div className="bg-zinc-800 border-2 border-solid border-zinc-400 flex flex-col flex-1 items-center justify-center rounded-lg gap-10 p-8 ">
                <h2 className='flex items-start w-full font-serif  text-slate-200 '>Total Income</h2>
                <p className='flex gap-2 items-baseline text-7xl font-sans'>
                  <span className=' font-serif  text-gray-300 text-2xl'>$ </span>{totalIncome()}
                </p>
              </div>


              <div className="bg-zinc-800 border-2 border-solid border-zinc-400 flex flex-col flex-1 items-center justify-center rounded-md gap-10 p-8 ">
                <h2 className='flex items-start w-full font-serif  text-slate-200 '>Total Expense</h2>
                <p className='flex gap-2 items-baseline text-7xl font-sans'>
                  <span className=' font-serif  text-gray-300 text-2xl'>$ </span>{totalExpense()}
                </p>
              </div>


              <div className="bg-zinc-800 border-2 border-solid border-zinc-400 flex flex-col flex-1 items-center justify-center rounded-md gap-10 p-8 ">
                <h2 className='flex items-start w-full font-serif  text-slate-200 text-xl'>Total Balance</h2>
                <p className='flex gap-2 items-baseline text-7xl font-sans' >
                  <span className=' font-serif  text-gray-300 text-2xl'>$ </span>{totalBalance()}
                </p>
              </div>


            </div>
            <Chart />
          </div>



          <div className="flex justify-between  gap-10">
            <History />
            <div className='flex flex-1 flex-col justify-between '>
              <h2 className='flex flex-col items-end w-full underline underline-offset-8 font-serif mb-6 pr-6'>Stats</h2>
              <div className='flex flex-1 flex-row gap-5'>


                <div className="flex flex-col justify-center items-center flex-1 border-2 p-4 gap-6 rounded-lg border-zinc-700 bg-zinc-900">
                  <h2 className=" text-zinc-300 underline underline-offset-4">Income</h2>
                  <div className='flex flex-row justify-between w-full'>
                    <div className='flex items-center flex-col gap-2'>
                      <h3 className=' text-zinc-400'>Minimum</h3>
                      <p>
                        ${Math.min(...incomes.map(item => item.amount))}
                      </p>
                    </div>
                    <div className='flex items-center flex-col gap-2 '>
                      <h3 className=' text-zinc-400'>Maximum</h3>
                      <p>
                        ${Math.max(...incomes.map(item => item.amount))}
                      </p>
                    </div>
                  </div>
                </div>


                <div className="flex flex-col justify-center items-center flex-1 border-2 p-4 gap-6 rounded-lg border-zinc-700 bg-zinc-900">
                  <h2 className="text-zinc-300 underline underline-offset-4">Expense</h2>
                  <div className='flex flex-row justify-between w-full'>
                    <div className='flex items-center flex-col gap-2'>
                      <h3 className=' text-zinc-400'>Min</h3>
                      <p>
                        ${Math.min(...expenses.map(item => item.amount))}
                      </p>
                    </div>
                    <div className='flex items-center flex-col gap-2'>
                      <h3 className=' text-zinc-400'>Max</h3>
                      <p>
                        ${Math.max(...expenses.map(item => item.amount))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled >
  )
}

const DashboardStyled = styled.div`
    /* .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4; */
            /* height: 400px; */
            /* .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
            } */
        /* } */

        /* .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center; */
                /* p{
                    font-weight: 600;
                    font-size: 1.6rem;
                } */
            /* } */
        /* } */
    /* } */
`;

export default Dashboard