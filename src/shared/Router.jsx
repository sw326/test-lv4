import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Test from '../pages/Test';
import { useContext } from 'react';

const PrivateRoute = ({ element: Element, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

const PublicRoute = ({ element: Element, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/test" />;
};

const SharedRouter = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={<PublicRoute element={Login} />}
                />
                <Route
                    path="/register"
                    element={<PublicRoute element={Register} />}
                />
                <Route path="/" element={<PrivateRoute element={Home} />} />
                <Route path="/test" element={<PrivateRoute element={Test} />} />
            </Routes>
        </Router>
    );
};

export default SharedRouter;
