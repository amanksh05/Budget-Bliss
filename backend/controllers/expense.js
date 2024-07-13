const ExpenseSchema = require("../models/ExpenseModel");
exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  try {
    const expense = new ExpenseSchema({
      title,
      amount,
      category,
      description,
      date,
      userId:req.user,
    });

    await expense.save();
    res.status(200).json({ message: "Expense Added" });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find({ userId: req.user });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    await ExpenseSchema.findByIdAndDelete(req.params.id);
    res.json({message:"Expense Deleted"})
  } catch (error) {
    res.status(500).json({error:error.message})
  }
};
