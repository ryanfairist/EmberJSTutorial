// gives us access to the actual Ember.js library as the variable Ember
import Ember from 'ember';
//line gives us access to our app's configuration data as the variable 
//config. const is a way to declare a read-only variable, as to make sure it is not accidentally reassigned elsewhere. 
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
});

//makes the Router variable defined in this file available to other parts of the app.
export default Router;
