if (Slideshows.find().count() === 0) {

        Slideshows.insert({
            title: 'Slideshow1',
            author: 'Sacha Greif',
            url: 'http://sachagreif.com/introducing-telescope/'
        });
        Slideshows.insert({
            title: 'Slideshow2',
            author: 'Tom Coleman',
            url: 'http://meteor.com'
        });
        Slideshows.insert({
            title: 'Slideshow3',
            author: 'Tom Coleman',
            url: 'http://themeteorbook.com'
        });
    }