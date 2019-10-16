var db = require('../models');

db.Category.findOrCreate({
    where: {
    category_name: 'achievements',
    image_url: 'null'
}});

db.Category.findOrCreate({
    where:{
        category_name: 'art',
        image_url: 'null'
    }
});

db.Category.findOrCreate({
    where:{
        category_name: 'books',
        image_url: 'null'
    }
});

db.Category.findOrCreate({
    where:{
        category_name: 'electronics',
        image_url: 'null'
    }
});

db.Category.findOrCreate({
    where:{
        category_name: 'fashion',
        image_url: 'null'
    }
});

db.Category.findOrCreate({
    where:{
        category_name: 'food&drink',
        image_url: 'null'
    }
});

db.Category.findOrCreate({
    where:{
        category_name: 'historical',
        image_url: 'null'
    }
});

db.Category.findOrCreate({
    where:{
        category_name: 'music',
        image_url: 'null'
    }
});

db.Category.findOrCreate({
    where:{
        category_name: 'sports',
        image_url: 'null'
    }
});

db.Category.findOrCreate({
    where:{
        category_name: 'toys',
        image_url: 'null'
    }
});

db.Category.findOrCreate({
    where:{
        category_name: 'vehicles',
        image_url: 'null'
    }
});

db.Category.findOrCreate({
    where:{
        category_name: 'others',
        image_url: 'null'
    }
});









