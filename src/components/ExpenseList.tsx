import { ExpenseListProps } from "./../types/interfaces";

const ExpenseList = ({
  expense: { description, amount, category, id },
  onDelete,
}: ExpenseListProps) => {
  return (
    <tr>
      <td>{description}</td>
      <td>${amount.toFixed(2)}</td>
      <td>{category}</td>
      <td>
        <button
          onClick={() => {
            if (onDelete) {
              onDelete(id);
            }
          }}
          className="btn btn-outline-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ExpenseList;
