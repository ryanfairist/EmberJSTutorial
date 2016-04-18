export default Ember.Component.extend({
  filter: null,
  filteredList: null,
  actions: {
    autoComplete() {
      this.get('autoComplete')(this.get('filter'));
    },
    search() {
      this.get('search')(this.get('filter'));
    },
    choose(city) {
      this.set('filter', city);
    }
  }
});

/*There's a property for each of the filter and filteredList, 
and actions as described above. What's interesting is that only the choose action is defined by the component. The 
actual logic of each of the autoComplete and search actions are pulled 
from the component's properties, which means that those actions need to be passed in by the calling object, a pattern 
known as closure actions.*/