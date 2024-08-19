import ExpenseList from "./ExpenseList";
import { Expense, ExpenseListTableProps } from "./../types/interfaces";

const ExpenseListTable = ({ expenses, onDelete }: ExpenseListTableProps) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense: Expense) => (
          <ExpenseList
            key={expense.id}
            expense={expense}
            onDelete={(id) => {
              if (onDelete) onDelete(id);
            }}
          ></ExpenseList>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {expenses
              .reduce((acc, expense) => acc + expense.amount, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseListTable;
