import React, { createContext, useContext } from 'react'

const myContext = createContext({})

const MyContextProvider = (props) => {
    const data = props.value
  return (
    <>
    <myContext.Provider value={data}>
        {props.children}
    </myContext.Provider>
    </>
  )
}

export const useMyContext = ()=> useContext(myContext)

export default MyContextProvider