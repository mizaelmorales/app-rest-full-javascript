var page = require ('page');
var template = require ('./template.js');
var empty = require('empty-element');
var title = require('title');

page('/', function(ctx,next){
    title('Mizagram');
    var main = document.getElementById('main-container');
    //vacia un elemento y luego carga otro con el append

    var pictures = [
        {
           user: {
            username : 'miza',
            avatar: 'https://avatars3.githubusercontent.com/u/36098966?s=460&v=4'
            },
            url: 'https://materializecss.com/images/office.jpg',
            likes :2012,
            liked:true
        },
        {
            user: {
             username : 'miza',
             avatar: 'https://avatars3.githubusercontent.com/u/36098966?s=460&v=4'
             },
             url: 'https://materializecss.com/images/office.jpg',
             likes :2012,
             liked:true
         },
        
    ];

    empty(main).appendChild(template(pictures));
    })