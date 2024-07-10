import { createContext, useContext, useState } from "react";
import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1/"


const GlobalContext = createContext()
export const GLobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])

    const [error, setError] = useState(null)


    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((error) => {
                setError(error.response.data.message)
            })
        getIncomes()
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        // console.log(response.data);
    }

    const deleteIncome = async (id) => {
        const res = await axios.delete(`${BASE_URL}/delete-income/${id}`);
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome = totalIncome + income.amount;
        })
        return totalIncome
    }
    // console.log(totalIncome());

    const addExpense = async (expense) => {
        const res = await axios.post(`${BASE_URL}add-expense`, expense)
            .catch((error) => {
                setError(error.response.data.message)
            })
        getExpenses()
        console.log(expense);
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data);
    }

    const deleteExpenses = async (id) => {
        const res = await axios.delete(`${BASE_URL}/delete-expense/${id}`);
        getExpenses()
    }
    const totalExpense = () => {
        let totalExpense = 0;
        expenses.forEach((income) => {
            totalExpense = totalExpense + income.amount;
        })
        return totalExpense
    }

    const totalBalance = () => {
        return totalIncome() - totalExpense()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }








    return (
        <GlobalContext.Provider value={
            {
                addIncome,
                getIncomes,
                incomes,
                deleteIncome,
                totalIncome,
                addExpense,
                getExpenses,
                expenses,
                deleteExpenses,
                totalExpense,
                totalBalance,
                transactionHistory
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

