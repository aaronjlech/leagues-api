import Champion from './champion-coll.js';



const ACTIONS = {

   allChamps: ()=>{
      let coll = new Champion();

      coll.fetch().then(function(serverRes){
         console.log(serverRes)


      })

   }



}




module.exports = ACTIONS
