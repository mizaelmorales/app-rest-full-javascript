var page = require ('page');
var template = require ('./template.js');
var empty = require('empty-element');


page('/signin', function(ctx,next){
    var main = document.getElementById('main-container');
    //vacia un elemento y luego carga otro con el append
    empty(main).appendChild(template);
    })