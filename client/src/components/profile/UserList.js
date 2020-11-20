import M from 'materialize-css'
import '../../styles/profile/UserList.scss'

import React, { useEffect, useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { usePaginatedQuery } from 'react-query'
import { motion } from 'framer-motion'
import { containerVariant } from '../../helpers/animations/containerVariant';





import { AuthContext } from '../../contexts/subContexts/AuthContext'
import { AllUserContext } from '../../contexts/subContexts/AllUserContext'



import UserListItem from './UserListItem'
import MyLoader from '../../helpers/MyLoader';






const getAllUsers = async ()=>{
  

  const allUserRes = await fetch('/user/all');
  const allUserData = await allUserRes.json();

  console.log(allUserData);
  return allUserData
}





function UserList() {
  useEffect(()=>{
    M.AutoInit();
  }, [])





  const { userData, setUserData } = useContext(AuthContext)
  const { allUsers, setAllUsers } = useContext(AllUserContext)
  const history = useHistory()
  


  const { resolvedData, latestData, status } = usePaginatedQuery("allusers", getAllUsers)
  if(resolvedData) setAllUsers(resolvedData);





  if(!userData) history.push('/login');
  if(userData && !userData.isVerified) history.push('/verifyDoor');

  return !allUsers[0] ?  (
    <MyLoader/>
  ) : (
    <motion.div className="container myUserListPage"
      variants={ containerVariant }
      initial="hidden"
      animate="visible"
      exit="exit"
    >      
      <h6 className="blue-text">All users</h6>


      <ul>
        {
          allUsers[0] && allUsers.map((item, index)=>{
            return (
              <Link to={ "/userProfile/" + index } key={ index } >
                <UserListItem item={ item } />
              </Link>
            )
          })
        }
      </ul>



    </motion.div>
  )
}

export default UserList
