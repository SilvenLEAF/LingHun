

const Strategy = require('passport-twitter').Strategy;
const User = require('../../models/User');







module.exports = TwitterStrategy = new Strategy(
  {
    clientID: process.env.TWITTER_CLIENT_ID,
    clientSecret: process.env.TWITTER_CLIENT_SECRET,
    callbackURL: `/auth/twitter/callback`
  },




  (accessToken, refreshToken, profile, done)=>{
    console.log(profile);
  }
)