import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/GlobalContext'

function History() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()

    return (
        <HistoryStyled>
            <h2 className='font-serif underline underline-offset-8 mb-4 pl-6'>Last transactions</h2>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="flex flex-row w-full justify-between border-2 border-zinc-600 bg-zinc-900 p-3 px-8 rounded-lg box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06)">
                        <p className='capitalize' style={{
                            color: type === 'expense' ? 'red' : 'green'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'green'
                        }}>
                            {
                                type === 'expense' ? `- ${amount <= 0 ? 0 : amount}` : `+ ${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 0%; 
    gap: 0.5rem;
`;

export default History