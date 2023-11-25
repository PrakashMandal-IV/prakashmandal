import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './component/Background/Background';
import Section1 from './component/Background/Sections/Section1';
import Section2 from './component/Background/Sections/Section2';
function App() {

  return (
    <>

    <div className='flex flex-col scroll-smooth'>
      <Background />

      <div className=' mx-auto  z-[999]  '>
        <Section1 />
      </div>
      <div className='w-full z-[999]  '>
        <Section2 />
      </div>
    </div>
  </>
  )
}

export default App
