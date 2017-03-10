import Ember from 'ember';


var items = [1,2,3];

export default Ember.Route.extend({
   
    actions:{
        newItem: function(){          
        console.log('ok');
        }
       
     }
});


