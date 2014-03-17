Meteor.publish('slideshows', function() {
    return Slideshows.find();
});
