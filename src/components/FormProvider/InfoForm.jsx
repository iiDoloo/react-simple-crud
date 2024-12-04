import React from 'react'
import { useMyContext } from './MyContextProvider'

const InfoForm = () => {
    const {data,setData} = useMyContext()
    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setData({...data,isSubmitted:true})
    }
  return (
    <div className='bg-green-100'>InfoForm
        <form onSubmit={handleSubmit}>
            <label > Nom <input type="text" name='nom' onChange={handleChange} /></label>
            <label > Prenom <input type="text" name='prenom' onChange={handleChange}/></label>
            <label > Email <input type="email" name='email' onChange={handleChange}/></label>
            <button className='bg-green-500 text-white font-bold py-1 px-2 rounded my-5'>Envoyer</button>
        </form>
    </div>

  )
}

export default InfoForm