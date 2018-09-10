var yo = require('yo-yo');
var translate = require('../translate');
module.exports = function(content){
   return yo`<div>
    <nav class="header">
        <div class ="nav-wrapper">
            <div class="">
                <div class="row">
                    <div class="col s12 m6 offset-m1">
                        <a href="/" class="brand-logo platzigram" >Mizagram </a>
                    </div>
                    <div class="col s12 l3 right-align">
                    <a href="#" class="btn btn-large btn-flat dropdown-button" data-activates="drop-user">
                    <i class="fas fa-user" aria-hidden="true"></i>
                     </a>
                    
                    <ul id="drop-user" class="dropdown-content" >
                        <li><a href="#">${translate.message('logout')}</a></li>
                    </ul>
                
                    </div>
                </div>
            </div>       
        </div>
    </nav>
    <div class="content">
        ${content}
    </div>
    </div> `;
}

