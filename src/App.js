// Add Settings
//  Theme
//  Currency

import Header from './Components/Header'
import BudgetCard from './Components/BudgetCard'

function App() {
  return (
    // Container
    <div className="container mx-auto my-4 p-4 text-slate-800">
      {/* Header */}
      <Header></Header>
      {/* Cards */}
      <BudgetCard name= "Entertainment" amount={250} max={1000}></BudgetCard>
      <BudgetCard name= "Uncategorized" amount={600} max={1200}></BudgetCard>
    </div>
  )
}

export default App
