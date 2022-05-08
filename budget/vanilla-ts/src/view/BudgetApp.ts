import Head, { UpdateHead } from "./Head";
import Input from "./Input";

export default function BudgetApp(app : HTMLDivElement){
    app.innerHTML += Head();
    app.innerHTML += Input(onAddBudgetItem);
}


function onAddBudgetItem() : void{
    console.log('onAddBudgetItem');
    
    // update head
    UpdateHead();
    

    // update body
}