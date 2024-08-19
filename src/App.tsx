import { useState } from "react";
import ExpenseListTable from "./components/ExpenseListTable.js";
import ExpenseFilter from "./components/ExpenseFilter.js";
import ExpenseForm from "./components/ExpenseForm.js";
import { Expense, ExpenseListTableProps } from "./types/interfaces.js";

function App() {
  const [selectedCategory, updateSelectedCategory] = useState<string>("");
  const [expenses, updateExpenses] = useState<Expense[]>([]);

  const handleDelete = (id: number) => {
    updateExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const handleSelectedCategory = (category: string) => {
    updateSelectedCategory(category);
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            updateExpenses([
              ...expenses,
              {
                ...expense,
                id: expenses.length + 1,
              },
            ])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelect={handleSelectedCategory}></ExpenseFilter>
      </div>
      {visibleExpenses.length > 0 && (
        <ExpenseListTable expenses={visibleExpenses} onDelete={handleDelete} />
      )}
    </>
  );
}

export default App;
