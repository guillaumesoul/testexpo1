var slideshowsData = [ {
    title: 'Slideshow1',
    author: 'Sacha Greif',
    url: 'http://sachagreif.com/introducing-telescope/'
}, {
    title: 'Slideshow2',
    author: 'Tom Coleman',
    url: 'http://meteor.com'
}, {
    title: 'Slideshow3',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com'
} ];


Template.slideshowsList.helpers({
    slideshows: function() {
        return Slideshows.find();
    }
});