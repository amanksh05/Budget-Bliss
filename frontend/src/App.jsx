import { useMemo, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { MainLayout } from './styles/Layout'
import Orb from './components/orb/Orb'
import Navigation from './components/navigation/Navigation'

function App() {
  const [active,setActive] = useState(1);
  const orbMemo = useMemo(()=>{
    return <Orb/>
  },[])

  return (
    <Appstyled className='App'>
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
      </MainLayout>
    </Appstyled>
  )
}

// Improvement

const Appstyled = styled.div`
  height : 100vh;
  position: relative;
`;

export default App
