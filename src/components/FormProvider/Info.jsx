import React, { useEffect } from 'react'
import { useMyContext } from './MyContextProvider'

const Info = () => {
    const {data} = useMyContext()
  return (
    <div className='bg-sky-500/100'>
        Info : 
        {data.isSubmitted && <p>Nom : {data.nom} Prénom : {data.prenom} Email : {data.email}
        </p>
        }
        
    </div>
  )
}
export default Info