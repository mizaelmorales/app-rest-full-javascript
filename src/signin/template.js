var yo = require('yo-yo');
var landing = require('../landing')
var signinForm  = yo`               <div class="col s12 m7">
<div class="row">
    <div class="signup-form">
        <h1 class="platzigram" >Mizagram</h1>
        <form class="signup-box">
                <div class="section">
                    <a class="btn btn-fb hide-on-small-only">Iniciar sesion con Facebook</a>
                    <a class="btn btn-fb hide-on-med-and-up">Iniciar sesion</a>
                </div>
                <div class="divider"></div>
                <div class="section">
                    <input type="text" name="email" placeholder="Nombre de usuario">
                    <input type="password" name="password" placeholder="Contraseña">
                    <button class="btn waves-effect waves-light center"  type="submit">Inicia Session </button>
                </div>
            
        </form>
    </div>

</div>
<div class="row center">
<div class="login-box">¿No Tienes un cuenta?<a href="/signup">Registrate</a>
</div>          
</div>  `;

module.exports= landing(signinForm);