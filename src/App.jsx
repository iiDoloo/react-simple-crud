import { useState } from 'react'
import './App.css'
import Info from './components/FormProvider/Info'
import MyContextProvider from './components/FormProvider/MyContextProvider'
import InfoForm from './components/FormProvider/InfoForm'

function App() {
  const [data,setData]= useState([])

  return (
    <>
    <div className='bg-white dark:bg-slate-800'>
    <MyContextProvider value={{data,setData}}>
      <Info></Info>
      <InfoForm></InfoForm>
    </MyContextProvider>
    </div>
    </>
  )
}

export default App
