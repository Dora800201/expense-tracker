export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

export interface ExpenseListProps {
  expense: Expense;
  onDelete?: (id: number) => void;
}

export interface ExpenseListTableProps {
  expenses: Expense[];
  onDelete?: (id: number) => void;
}

export interface SelectCategory {
  onSelect: (category: string) => void;
}

export interface ExpenseFormProps {
  onSubmit: (data: FormData) => void;
}
