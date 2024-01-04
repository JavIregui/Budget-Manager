import BudgetCard from './Components/BudgetCard'

function App() {
  return (
    <div className="container mx-auto my-4 p-4">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 space-y-4 sm:space-y-0">
        <h1 className="text-4xl font-bold">Budgets</h1>
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4">
          <button className="btn-primary bg-red-500 text-white px-4 py-2 rounded">Add Budget</button>
          <button className="btn-outline-primary ring-2 ring-red-500 ring-inset px-4 py-2 rounded">Add Expense</button>
        </div>
      </div>
      <BudgetCard name= "Entertainment" amount={200} max={1000}></BudgetCard>
      <BudgetCard name= "Entertainment" amount={200} max={1000}></BudgetCard>
    </div>
  )
}

export default App
