var yo = require('yo-yo');
var landing = require('../landing');
var translate = require('../translate');
var signinForm  = yo`               <div class="col s12 m7">
<div class="row">
    <div class="signup-form">
        <h1 class="platzigram" >Mizagram</h1>
        <form class="signup-box">
                <div class="section">
                    <a class="btn btn-fb hide-on-small-only">${translate.message('signup.facebook')}</a>
                    <a class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official">${translate.message('signup.text')}</a>
                </div>
                <div class="divider"></div>
                <div class="section">
                    <input type="text" name="email" placeholder="${translate.message('username')}">
                    <input type="password" name="password" placeholder="${translate.message('password')}">
                    <button class="btn waves-effect waves-light center"  type="submit">${translate.message('signup.text')}</button>
                </div>
            
        </form>
    </div>

</div>
</div>
<div class="row center">
<div class="login-box">${translate.message('signup.have-account')}<a href="/signup">${translate.message('signup.call-to-action')}</a>
</div>          
</div>  `;

module.exports= landing(signinForm);