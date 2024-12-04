import React, { useEffect } from 'react'
import { useMyContext } from './MyContextProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faRemove } from '@fortawesome/free-solid-svg-icons';


const Info = () => {
    const {data,setData,selectedField,setSelectedField} = useMyContext()
    const delData = (dataId)=>{
        setData(data.filter((x,i)=>i!=dataId))
    }
    const editData = (dataId)=>{
        const dataToBeEdited = data.filter((x,i)=>i==dataId)
        console.log(dataToBeEdited[0].nom)
        setSelectedField(dataToBeEdited[0])
    }

  return (
    <div className='bg-sky-500/100'>
        Informations :
        {data && data.map((x,i)=>{
            return(
                <p key={i}>Nom : {x.nom} - Prenom : {x.prenom} - Email : {x.email} <FontAwesomeIcon className='ml-3' icon={faRemove} onClick={()=>{delData(i)}}/><FontAwesomeIcon className='ml-3' icon={faEdit} onClick={()=>{editData(i)}}/></p>
            )
        })}
        
    </div>
  )
}
export default Info