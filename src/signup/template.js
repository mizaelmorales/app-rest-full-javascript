var yo = require('yo-yo');
var landing = require('../landing')
var signupForm = yo`               <div class="col s12 m7">
<div class="row">
    <div class="signup-form">
        <h1 class="platzigram" >Mizagram</h1>
        <form class="signup-box">
            <h2>Registrate para ver fotos de tus amigos estudiando en Mizagram</h2>
                <div class="section">
                    <a class="btn btn-fb hide-on-small-only">Iniciar sesion con Facebook</a>
                    <a class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i>Iniciar sesion</a>
                </div>
                <div class="divider"></div>
                <div class="section">
                    <input type="email" name="email" placeholder="Correo Electronico">
                    <input type="text" name="name" placeholder="Nombre Completo">
                    <input type="text" name="email" placeholder="Nombre de usuario">
                    <input type="password" name="password" placeholder="Contraseña">
                    <button class="btn waves-effect waves-light center"  type="submit">Registrate</button>
                </div>
            
        </form>
    </div>

</div>
<div class="row center">
<div class="login-box">¿Tienes un cuenta?<a href="/signin">Entrar</a>
</div>          
</div>  `;

module.exports= landing(signupForm);