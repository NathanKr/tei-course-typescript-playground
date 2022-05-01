import Body, { updateBody } from "./Body";
import Head, { updateHead } from "./Head";
import Input from "./Input";

const onAddBudgetItem = () => {
  updateHead();
  updateBody();
};

const onDeleteBudegetItem = () => {
  updateHead();
};

export default function BudgetApp(app: HTMLDivElement): void {
  app.innerHTML += Head();
  app.innerHTML += Input(onAddBudgetItem);
  app.innerHTML += Body(onDeleteBudegetItem);
}
