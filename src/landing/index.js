var yo = require('yo-yo');
var translate = require('../translate');
module.exports = function landing (box){ 

 return yo`<div class="container">
    <div class="row">
       <div class="col s10 push-s1">
           <div class="row">
               <div class="col m5 hide-on-small-only">
                   <img class="iphone" src="iphone.png">
               </div>
                    ${box}
  
            </div>
       </div> 
    </div>
    </div>`;}