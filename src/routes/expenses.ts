// src/routes/expenses.ts
import express, { Request, Response } from 'express';
import { Expense } from '../types/Expense';

const router = express.Router();

// Sample data - replace this with actual database integration
let expenses: Expense[] = [];

// GET all expenses
router.get('/', (req: Request, res: Response) => {
  try {
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a specific expense by ID
router.get('/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const expense = expenses.find((expense) => expense.id === id);
    if (!expense) {
      res.status(404).json({ message: 'Expense not found' });
      return;
    }
    res.json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new expense
router.post('/', (req: Request, res: Response) => {
  const newExpense: Expense = req.body;
  try {
    expenses.push(newExpense);
    res.status(201).json({ message: 'Expense created successfully', expense: newExpense });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an existing expense by ID
router.put('/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedExpense: Expense = req.body;
  try {
    const index = expenses.findIndex((expense) => expense.id === id);
    if (index === -1) {
      res.status(404).json({ message: 'Expense not found' });
      return;
    }
    expenses[index] = { ...expenses[index], ...updatedExpense };
    res.json({ message: 'Expense updated successfully', expense: expenses[index] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete an expense by ID
router.delete('/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    expenses = expenses.filter((expense) => expense.id !== id);
    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;