import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {name: 'Gordon Ramsey', cookingToday: true},
      {name: 'Jeff Smith', cookingToday: false},
      {name: 'Guy Fieri', cookingToday: true},
      {name: 'Paula Dean', cookingToday: false},
      {name: 'Kat Cora', cookingToday: true}
    ]
  }
});
