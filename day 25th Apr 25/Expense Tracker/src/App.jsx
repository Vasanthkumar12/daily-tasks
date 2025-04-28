// import './App.css'
// import { Demo } from './Demo'
import { ToastContainer } from 'react-toastify'
import { Navbar } from './common/NavBar'
import { AddExpense } from './components/Budget/AddExpense'
import { SetBudget } from './components/Budget/SetBudget'

function App() {

  return (
    <>
    <ToastContainer
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      limit={3}
    />
      <Navbar />
      <SetBudget />
      <AddExpense />
    </>
  )
}

export default App
