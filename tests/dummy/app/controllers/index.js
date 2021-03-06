import Ember from 'ember';

export default Ember.Controller.extend({
  tags: ['foo', 'bar'],

  actions: {
    addTag(tag) {
      this.get('tags').pushObject(tag);
    },

    removeTag(index) {
      this.get('tags').removeAt(index);
    }
  }
});
