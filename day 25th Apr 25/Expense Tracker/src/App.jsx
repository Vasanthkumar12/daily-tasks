// import './App.css'
// import { Demo } from './Demo'
import { Navbar } from './common/NavBar'
import { AddExpense } from './components/Budget/AddExpense'
import { DisplayExpenses } from './components/Budget/DisplayExpenses'
import { SetBudget } from './components/Budget/SetBudget'

function App() {

  return (
    <>
      <Navbar />
      <SetBudget />
      <AddExpense />
      <DisplayExpenses />
    </>
  )
}

export default App
