/*The value of isImageShowing comes from our component's JavaScript file, in this case rental-listing.js. Since we do not want the image to be showing at first,
 we will set the property to start as false:*/
export default Ember.Component.extend({
	isImageShowing: false
	actions: {
	    imageShow() {
	      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    }
  }
});
//Now our users can toggle images on and off using the 
//"Show image" and "Hide image" buttons