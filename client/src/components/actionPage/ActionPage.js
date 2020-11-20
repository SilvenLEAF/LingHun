import M from 'materialize-css'
import '../../styles/ActionPage.scss';


import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


import MyLoader from '../../helpers/MyLoader'




function ActionPage() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  
  return (
    <div className="container">
      <MyLoader title="Welcome!"/>      
    </div>
  )
}

export default ActionPage
