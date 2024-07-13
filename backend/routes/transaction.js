const { addExpense, getExpenses, deleteExpense } = require('../controllers/Expense')
const { addIncome, getIncomes, deleteIncome } = require('../controllers/Income')
const router = require('express').Router()
const authenticate = require('../middleware/Auth')


router.post('/add-income',authenticate, addIncome)
    .get('/get-incomes',authenticate,getIncomes)
    .delete('/delete-income/:id',authenticate,deleteIncome)
    .post('/add-expense',authenticate,addExpense)
    .get('/get-expenses',authenticate,getExpenses)
    .delete('/delete-expense/:id',authenticate,deleteExpense)

module.exports = router