<h2>Mtivation</h2>
build the budget project (javascript project) in vanilla typescript. Check <a href='https://www.youtube.com/watch?v=z4cYVYMJs80&list=PLT6u32ApxFVBRo-wCMmwdp2c66GscEDy6&index=1'>here</a>


<h2>Highlights</h2>
<ul>
<li>practice with typescript base on the 10-90% course</li>
<li>use the power of es modules</li>
<li>implement powerfull logic-view architecture</li>
<li>use component based design</li>
<li>build cool client side application</li>
<li>use flexbox and advanced javascript features like class-list</li>
</ul>

<h2>Design</h2>
<ul>
<li>view directory for view , logic dirctory for logic</li>
<li>no persistence in localstorage - this may be an excercise</li>
<li>view
<ul>
<li>component based , like in react</li>
<li>Three main components : Head.ts , Input.ts , Body.ts</li>
<li>each component has css : Head.css , Input.css , Body.css</li>
<li>add\delete item cause render of few components !!! need to carefully check this</li>

</ul>   
</li>
<li>logic
<ul>
<li>IBudgetItem : description : string , amount : number , id : string</li>
<li>ICurrentBudgetItem : IBudgetItem , BudgetItemType : Income \ Outcome
<li>incomes : IBudgetItem [] , outcomes : IBudgetItem [] (percentage is computed thus not here)</li>
<li>operations : computeBudget,getCurrentDate, addIncome,addOutcome,deleteIncome,deleteOutcome , computePercentag....., isValid(done in html)
</ul>
 </li>
</ul>


<h2>Flow</h2>
<ol>
<li>do logic and view together on this order : Head , Input , Body</li>
</ol>


<h2>todo</h2>
<ol>
<li>css modules ???? possible ???</li>
<li>fix todo</li>
<li>income \ outcome of head and body can have big common stuff</li>
</ol>