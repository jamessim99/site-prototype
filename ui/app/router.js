import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', { path: '/' });
  this.route('about');
  this.route('login');
  this.route('protected');
  this.route('privacy');
  this.route('welcome');
  this.route('my-events');
  this.route('my-cliques');
  this.route('find-a-game');
  this.route('my-account');
  this.route('capture');
  this.route('sign-up');
  this.route('mission');
  this.route('examples');
  this.route('contact');
});

export default Router;
