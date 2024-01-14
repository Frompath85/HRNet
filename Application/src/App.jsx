import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';
import { Provider } from 'react-redux'
import { store } from "./features/store";


function App() {
  return (
    <Provider store={store}>
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/EmployeeList" element ={<EmployeeList />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
