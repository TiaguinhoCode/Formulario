import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  { Login } from '../../components/Pages/Login/Login';
import { Register } from '../../components/Pages/Register/Register';
import Header from '../../components/Menu/Header';

export const AppRouter = () => {
    return (
        <div id="root">
            <Header />
        <Router>
            <Routes>
                <Route path="/logar"  element={<Login/>} />
                <Route path="/register"  element={<Register/>} />
            </Routes>
        </Router>
        </div>
    )
}