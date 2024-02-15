import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import { Provider } from 'react-redux'
import { store } from "./features/store";
import Header from './components/Header.jsx'
import EmployeeTable from './components/EmployeeTable.jsx';


function App() {
  return ( 
    <Provider store={store}>  
     <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/EmployeeTable" element ={<EmployeeTable />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
