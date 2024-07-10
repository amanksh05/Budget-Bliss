import { useMemo, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { MainLayout } from './styles/Layout'
import Orb from './components/orb/Orb'
import Navigation from './components/navigation/Navigation'
import Dashboard from './components/dashboard/Dashboard'
import Expense from './components/expenses/Expenses'
import Income from './components/income/Income'
import { useGlobalContext } from './context/GlobalContext'

function App() {
  const [active, setActive] = useState(1);
  
  const global = useGlobalContext()
  console.log(global);

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])



  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4:
        return <Expense />
      default: <Dashboard />

    }
  }

  return (
    <Appstyled className='App'>
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </Appstyled>
  )
}

// Improvement

const Appstyled = styled.div`
  height : 100vh;
  position: relative;
  main{
    flex: 1;
    background: rgba(252,246,249,0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkite-scrollbar{
      width: 0;
    }
  }
`;

export default App
