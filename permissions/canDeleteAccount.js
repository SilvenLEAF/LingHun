module.exports = canDeleteAccount = (userId, user)=>{

  // User can only delete their own account
  if(userId == user._id) return true;
  
  
  // They can not delete someone else's account
  return false;
}