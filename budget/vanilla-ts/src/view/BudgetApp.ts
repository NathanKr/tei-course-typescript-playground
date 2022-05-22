import Body, { updateBodyOnAdd, updateBodyOnDelete } from "./Body";
import Head, { UpdateHead as updateHead } from "./Head";
import Input from "./Input";

export default function BudgetApp(app : HTMLDivElement){
    app.innerHTML += Head();
    app.innerHTML += Input(onAddBudgetItem);
    app.innerHTML += Body(onDeleteBudgetItem);
}

function onDeleteBudgetItem() : void{
    // update head
    updateHead();

    // update body
    updateBodyOnDelete();
}

function onAddBudgetItem() : void{
    // update head
    updateHead();
    

    // update body
    updateBodyOnAdd();
}

