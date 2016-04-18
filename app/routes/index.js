import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  	// Ember Data will make a GET request to /rentals.
    return this.store.findAll('rental');
  }
});
