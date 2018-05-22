var express = require ('express');
// para poder usar express
var app = express();

//para poder usar el motor de pug
app.set('view engine','pug');

app.use(express.static('public'));
//res.render para acomodar la vista con pug y se crea la carpeta views
app.get('/', function (req,res){
    res.render('index');
})
app.get('/signup', function (req,res){
    res.render('index');
})
app.get('/signin', function (req,res){
    res.render('index');
})
//para iniciar el servidor
app.listen(3000, function (err){
    if (err) return console.log('Hubo un error'), process.exit(1);
    console.log(' Mizagram escuchando en el puerto 3000');
})