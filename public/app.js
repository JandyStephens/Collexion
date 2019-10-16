//function to add in data will be changed from backend
const fakeData = [{
    id: 'shoeCollec',
    title: 'My Christmas Sweater Collection',
    description: 'I have been collecting these sweaters for 30 years! My grandma taught me to knit as a child and ever since I have been obsessed! I knit my own sweaters and in my free time I search thift shops, garbage cans and old attics for more! I am always looking to expand my collection, so send me any good sweaters you have! I would love to trade or buy any fun sweaters you have!',
    banner:'images/sweater1.jpg',
    images: ['./images/sweater1.jpg','./images/sweater2.jpg','./images/sweater3.jpg','./images/sweater4.jpg','./images/sweater5.jpg','./images/sweater6.jpg','./images/sweater7.jpg','./images/sweater8.jpg']
}]

generateCollections();

//sibling attribute = get siblings of each element in matched element set 
$(document).on('click', '.trigger-images', function(){
    var runCollection = $(this).siblings('img').attr('data-state') === 'collection';
    var runIndividual = $(this).siblings('img').attr('data-state') === 'individual';
    var runResetCollections = $(this).attr('data-state') === 'reset';
    var collectionId = $(this).siblings('img').attr('data-ref');
    var currentCollection = fakeData.filter(function(collection){
        return collection.id === collectionId;
    }).pop();
    if(runCollection) {
        $('#grid').empty();
        currentCollection.images.forEach(function(imageUrl){
            $('#grid').append(
                `
                <li>
                    <a href="#" class="toggle-slide" data-id="toggle-slide">
                    <div class="hexagon">
                    <img data-state="individual" src="${imageUrl}" data-ref="${collectionId}" data-url="${imageUrl}" alt="Lorem Ipsum"/>
                    <div class="overlay trigger-images"></div>
                    </div>  
                    </a>
                </li>
                `
            )
        });
        $('[data-state="reset"]').removeClass('hidden');
        
    }

    if(runIndividual){
        //Populate the 'slide' with title description and proper image
        var url = $(this).siblings('img').attr('data-url');
        var title = currentCollection.title;
        var description = currentCollection.description;
        $('.slide-over-title').text(title);
        $('.slide-over-desc').text(description);
        $('.slide-over-image').attr('src',url);

        //Now we need to trigger programattically
        console.log($(this).parent().parent())
        var anchor = $(this).parent().parent();
        anchor.attr('href', '#slide-over');
        anchor.get(0).click();
    }

    if(runResetCollections){
        $('#grid').empty();
        generateCollections();
        $('[data-state="reset"]').addClass('hidden');
    }
});

//
function toggleSlideStateOn () {
    var anchors = $('.toggle-slide');
    for (let i = 0; i < anchors.length; i++) {
        const element = $(anchors[i]);
        element.attr('href', 'slide-over');
        
    }
}

function toggleSlideStateOff () {
    var anchors = $('.toggle-slide');
    for (let i = 0; i < anchors.length; i++) {
        const element = $(anchors[i]);
        element.attr('href', '#');
        
    }
}
//Needs work
$('#title > h1').on('click', function(){
    var imageRefs = $('.trigger-images');
        for (var i = 0; i < imageRefs.length; i++) {
            var element = imageRefs[i];
            var oldImage = $(element).siblings('img').attr('data-original');
            $(element).siblings('img').attr('src', oldImage);
            $(element).siblings('img').attr('data-state', 'collection');
        }
    toggleSlideStateOff();
}); 

function generateCollections() {
    fakeData.forEach(function(collection){
        var html = `
        <li>
            <a href="#" class="toggle-slide">
            <div class="hexagon">
            <img data-state="collection" src="${collection.banner}" data-ref="${collection.id}" alt="Lorem Ipsum"/>
            <div class="overlay trigger-images"></div>
            </div>  
            </a>
        </li>
        `;
        $('#grid').append(html);
    });
}
