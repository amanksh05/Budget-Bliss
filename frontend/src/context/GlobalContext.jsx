import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [user, setUser] = useState(localStorage.getItem('token') || null);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null)
  const [userInfo,setUserInfo] = useState({});

  const register = async (username, email, password) => {
    const res = await axios.post(`${BASE_URL}/auth/register`, { username, email, password })
    return res.data;
  }

  const login = async (email, password) => {
    const res = await axios.post(`${BASE_URL}/auth/login`, { email, password });
    setUser(res.data.token);
    setUserId(res.data.id)
    console.log(res.data.id);
    // console.log(userId);
    localStorage.setItem('token', res.data.token);
  }

  // const userDetails = async () =>{
  //   const response = await axios.get(`${BASE_URL}/auth/profile`,{userId});
  //   setUserInfo(response.data)
  //   console.log(response.data);
  // }

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  }

  const addIncome = async (income) => {
    try {
      await axios.post(
        `${BASE_URL}/transaction/add-income`,
        income,
        { headers: { Authorization: ` ${user}` } }
      );
      getIncomes();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const getIncomes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/transaction/get-incomes`, {
        headers: { Authorization: ` ${user}` }
      });
      setIncomes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteIncome = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/transaction/delete-income/${id}`, {
        headers: { Authorization: ` ${user}` }
      });
      getIncomes();
    } catch (error) {
      console.error(error);
    }
  };

  const addExpense = async (expense) => {
    try {
      await axios.post(
        `${BASE_URL}/transaction/add-expense`,
        expense,
        { headers: { Authorization: ` ${user}` } }
      );
      getExpenses();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const getExpenses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/transaction/get-expenses`, {
        headers: { Authorization: ` ${user}` }
      });
      setExpenses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteExpenses = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/transaction/delete-expense/${id}`, {
        headers: { Authorization: `${user}` }
      });
      getExpenses();
    } catch (error) {
      console.error(error);
    }
  };

  const totalIncome = () => {
    return incomes.reduce((total, income) => total + income.amount, 0);
  };

  const totalExpense = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  const totalBalance = () => {
    return totalIncome() - totalExpense();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return history.slice(0, 3);
  };

  useEffect(() => {
    if (user) {
      getIncomes();
      getExpenses();
    }
  }, [user]);

  return (
    <GlobalContext.Provider
      value={{
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
        transactionHistory,
        user,
        register,
        login,
        logout,
        error,
        // userDetails
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
