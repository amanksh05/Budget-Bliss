import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = `${import.meta.env.API}/api`;

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [user, setUser] = useState(localStorage.getItem('token') || null);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null)
  const [userInfo,setUserInfo] = useState(localStorage.getItem('userInfo') || null);

  const register = async (username, email, password) => {
    const res = await axios.post(`${BASE_URL}/auth/register`, { username, email, password })
    return res.data;
  }

  const login = async (email, password) => {
      
      const res = await axios.post(`${BASE_URL}/auth/login`, { email, password });
      setUser(res.data.token);
      setUserId(res.data.id)
      console.log(res.data.id);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.id);
      await userDetails(res.data.id)

  }

  const userDetails = async (userId) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/profile`, { userId });
        localStorage.setItem('userInfo', response.data.username);
        // console.log(userInfo.name);

  
    } catch (error) {
        console.error('Nhi hua');
        console.log(userId);
    }
    console.log("userdetails: ", {userId});
};



  const logout = () => {
    setUser(null);
    setUserId(null);
    setUserInfo(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userInfo');
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
      userDetails(userId);
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
        userDetails,
        userInfo
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
