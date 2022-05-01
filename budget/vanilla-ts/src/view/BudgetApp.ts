import Body , { updateBodyOnAdd, updateBodyOnDelete } from "./Body";
import Head, { updateHead } from "./Head";
import Input from "./Input";

const onAddBudgetItem = () => {
  updateHead();
  updateBodyOnAdd();
};

const onDeleteBudegetItem = () => {
  updateHead();
  updateBodyOnDelete()
};

export default function BudgetApp(app: HTMLDivElement): void {
  app.innerHTML += Head();
  app.innerHTML += Input(onAddBudgetItem);
  app.innerHTML += Body(onDeleteBudegetItem);
}
