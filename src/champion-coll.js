import Backbone from 'backbone';
import APIKEY from './api.js'



const Champion = Backbone.Collection.extend({

   url: `https://na.api.pvp.net/api/lol/na/v1.2/champion?api_key= + ${APIKEY}`,

})


export default Champion;
