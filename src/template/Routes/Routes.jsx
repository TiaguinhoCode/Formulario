import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  { Login } from '../../components/Pages/Login/Login';
import { Register } from '../../components/Pages/Register/Register';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/"  element={<Login/>} />
                <Route path="/register"  element={<Register/>} />
            </Routes>
        </Router>
    )
}