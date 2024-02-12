// App.tsx
import React, { useState } from 'react';
import HomePage from './components/HomePage';
import AddEditExpensePage from './components/AddEditExpensePage';

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<{
    coffee: number;
    food: number;
    alcohol: number;
  }>({
    coffee: 0,
    food: 0,
    alcohol: 0,
  });

  const calculateAverage = () => {
    const total = expenses.coffee + expenses.food + expenses.alcohol;
    const average = total / 3;
    return average;
  };

  const handleAddExpense = (type: string, amount: number) => {
    setExpenses((prevExpenses) => ({
      ...prevExpenses,
      [type]: prevExpenses[type] + amount,
    }));
  };

  return (
    <div>
      <HomePage averageSpend={expenses} />
      <AddEditExpensePage onAddExpense={handleAddExpense} />
    </div>
  );
};

export default App;