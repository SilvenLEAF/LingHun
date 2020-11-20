import M from 'materialize-css'
import '../../styles/ActionPage.scss';


import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { containerVariant } from '../../helpers/animations/containerVariant';


import MyWelcome from '../../helpers/MyWelcome'




function ActionPage() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  
  return (
    <motion.div className="container"
      variants={ containerVariant }
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <MyWelcome title="Welcome!"/>      
    </motion.div>
  )
}

export default ActionPage
