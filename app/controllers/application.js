import Ember from 'ember';

export default Ember.Controller.extend({
  cookType: "Chef",
  foods: [
    {name: 'Tacos', isAvailable: true},
    {name: 'Pizza',  isAvailable: true},
    {name: 'Steak', isAvailable: false},
    {name: 'Veggies', isAvailable: true},
    {name: 'Dessert', isAvailable: false},
  ],
  restaurant: {name: 'The Rest Stop', yearsOpen: 1},
  actions: {
    makeChefUnavailable(status) {
      Ember.set(status, 'cookingToday', false);
    },
    makeChefAvailable(status) {
      Ember.set(status, 'cookingToday', true);
    }
  }
});
