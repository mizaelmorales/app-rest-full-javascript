var page = require ('page');

var main = document.getElementById('main-container');

page('/', function(ctx,next){
    main.innerHTML = 'home <a href="/signup">signup</a>'; //home
})

page('/signup', function(ctx,next){
    main.innerHTML = 'Signup <a href="/">home</a>'//signup
})

page();