import { useMemo, useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { MainLayout } from './styles/Layout';
import Orb from './components/orb/Orb';
import Navigation from './components/navigation/Navigation';
import Dashboard from './components/dashboard/Dashboard';
import Expenses from './components/expenses/Expenses';
import Income from './components/income/Income';
import Login from './components/Login';
import Signup from './components/Signup';
import { useGlobalContext } from './context/GlobalContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { ToastContainer } from 'react-toastify';

function App() {
  const { user } = useGlobalContext();
  const [active, setActive] = useState(1);
  const orbMemo = useMemo(() => <Orb />, []);

  return (<>
    <ToastContainer autoClose={3000} />
    <Router>
      <AppStyled className="App">
        {orbMemo}
        <MainLayout>
          {user ? (
            <>
              <Navigation />
              <main>
                <Routes>
                  <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                  <Route path="/transactions" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                  <Route path="/incomes" element={<PrivateRoute><Income /></PrivateRoute>} />
                  <Route path="/expenses" element={<PrivateRoute><Expenses /></PrivateRoute>} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
                {/* {displayData(active)} */}
              </main>
            </>
          ) : (
            <main>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            </main>
          )}
        </MainLayout>
      </AppStyled>
    </Router>
  </>
  );
}

const displayData = (active) => {
  switch (active) {
    case 1:
      return <Dashboard />;
    case 2:
      return <Dashboard />;
    case 3:
      return <Income />;
    case 4:
      return <Expenses />;
    default:
      return <Dashboard />;
  }
};

const AppStyled = styled.div`
  height: 100vh;
  position: relative;
  main {
    flex: 1;
    background: rgba(51, 51, 51, 0.78);
    border: 2px solid #585858;
    backdrop-filter: blur(4.5px);
    border-radius: 10px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
