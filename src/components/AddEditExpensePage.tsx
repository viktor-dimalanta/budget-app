// components/AddEditExpensePage.tsx
import React from 'react';

interface AddEditExpensePageProps {
  onAddExpense: (type: string, amount: number) => void;
}

const AddEditExpensePage: React.FC<AddEditExpensePageProps> = ({ onAddExpense }) => {
  const [type, setType] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const handleAddExpense = () => {
    if (!type || !amount) return;
    onAddExpense(type, parseFloat(amount));
    setType('');
    setAmount('');
  };

  return (
    <div>
      <h2>Add/Edit Expenses</h2>
      <div>
        <label>
          Type:
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
      </div>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default AddEditExpensePage;