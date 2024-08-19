import categories from "../constants/categories";
import { SelectCategory } from "./../types/interfaces";

const ExpenseFilter = ({ onSelect }: SelectCategory) => {
  return (
    <select className="form-select" onChange={(e) => onSelect(e.target.value)}>
      <option>All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
