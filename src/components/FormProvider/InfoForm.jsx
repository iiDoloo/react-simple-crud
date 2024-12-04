import React, { useEffect, useRef, useState } from 'react'
import { useMyContext } from './MyContextProvider'

const InfoForm = () => {
    const {data,setData,selectedField,setSelectedField} = useMyContext()
    const [inputs,setInputs] = useState({})

    const handleChange = (e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setData([...data,inputs])
        setInputs({})
    }

    const handleEdit = (e)=>{
        e.preventDefault()
        setData((prevData) =>prevData.map((data)=>data.nom === selectedField.nom ? { ...data, nom:inputs.nom,prenom:inputs.prenom,email:inputs.email} : data));
        setSelectedField({})
        setInputs({})

    }
    
    useEffect(()=>{
        if(selectedField){
        setInputs({...inputs,nom:selectedField.nom,prenom:selectedField.prenom,email:selectedField.email})
    }
    },[selectedField])
  return (
    <div className='bg-green-100'>InfoForm
        <form >
            <label > Nom <input type="text" name='nom' value={inputs.nom || ""} onChange={handleChange}  /></label>
            <label > Prenom <input type="text" name='prenom' value={inputs.prenom|| ""}  onChange={handleChange}/></label>
            <label > Email <input type="email" name='email' value={inputs.email|| ""}  onChange={handleChange}/></label>
            {selectedField.nom?<button className='bg-blue-500 text-white font-bold py-1 px-2 rounded my-5' onClick={handleEdit}>Valider</button>:<button className='bg-green-500 text-white font-bold py-1 px-2 rounded my-5' onClick={handleSubmit}>Ajouter</button>}
        </form>
    </div>

  )
}

export default InfoForm