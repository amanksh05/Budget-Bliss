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

function App() {
  const { user } = useGlobalContext();
  const [active, setActive] = useState(1);
  const orbMemo = useMemo(() => <Orb />, []);

  const displayData = () => {
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

  const PrivateRoute = ({ children }) => {
    return user ? children : <Navigate to='/login' />;
  };

  return (
    <Router>
      <AppStyled className="App">
        {orbMemo}
        <MainLayout>
          {user ? (
            <>
              <Navigation active={active} setActive={setActive} />
              <main>
                  {displayData()}
                <Routes>

                  if(active===1){
                    <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                  }
                  else if(active===2){
                    <Route path="/income" element={<PrivateRoute><Income /></PrivateRoute>} />
                  }
                  else if(active===3){
                    <Route path="/expenses" element={<PrivateRoute><Expenses /></PrivateRoute>} />
                  }
                </Routes>
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
  );
}

const AppStyled = styled.div`
  height: 100vh;
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
