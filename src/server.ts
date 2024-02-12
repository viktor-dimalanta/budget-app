// server.ts
import express from 'express';
import bodyParser from 'body-parser';
import { Expense } from './types/Expense'; // Assuming you have Expense type defined

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Sample data - replace this with actual database integration
let expenses: Expense[] = [];

// Routes
app.get('/expenses', (req, res) => {
  res.json(expenses);
});

app.post('/expenses', (req, res) => {
  const newExpense: Expense = req.body;
  expenses.push(newExpense);
  res.status(201).send('Expense added successfully');
});

app.put('/expenses/:id', (req, res) => {
  const { id } = req.params;
  const updatedExpense: Expense = req.body;
  expenses = expenses.map((expense) =>
    expense.id === id ? { ...expense, ...updatedExpense } : expense
  );
  res.send('Expense updated successfully');
});

app.delete('/expenses/:id', (req, res) => {
  const { id } = req.params;
  expenses = expenses.filter((expense) => expense.id !== id);
  res.send('Expense deleted successfully');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});