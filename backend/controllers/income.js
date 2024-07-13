const IncomeSchema = require("../models/IncomeModel");
// const income = require('../models/incomeModel')
exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  try {
    const income = new IncomeSchema({
      title,
      amount,
      category,
      description,
      date,
      userId: req.user,
    });

    await income.save();
    res.status(200).json({ message: "Income Added" });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find({ userId: req.user });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteIncome = async (req, res) => {
  // const { id } = req.params;
  try{
    await IncomeSchema.findByIdAndDelete(req.params.id);
    res.json({message:"Income Deleted"})
  }
  catch(error){
    res.status(500).json({error:error.message})
  }
};
