import Ember from 'ember';

export default Ember.Controller.extend({
  cookType: "Chef",
  chefs: [
    {name: 'Gordon Ramsey', cookingToday: true},
    {name: 'Jeff Smith', cookingToday: false},
    {name: 'Guy Fieri', cookingToday: true},
    {name: 'Paula Dean', cookingToday: false},
    {name: 'Kat Cora', cookingToday: true}
  ],
  foods: [
    {name: 'Tacos', isAvailable: true},
    {name: 'Pizza',  isAvailable: true},
    {name: 'Steak', isAvailable: false},
    {name: 'Veggies', isAvailable: true},
    {name: 'Dessert', isAvailable: false},
  ],
  restaurant: {name: 'The Rest Stop', yearsOpen: 1}
  actions: {
    makeChefUnavailable(status) {
      Ember.set(status, cookingToday, false);
    },
    makeChefAvailable(status) {
      Ember.set(status, cookingToday, true);
    }
  }
});
