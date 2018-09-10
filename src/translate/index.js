
  var IntlMessageFormat= require('intl-messageformat');
  var es =require ('./es');
  var en =require ('./en-US');

  var MESSAGES = {};

  MESSAGES.es = es;
  MESSAGES['en-US'] = en;

  var locale = localStorage.locale || 'es';

  module.exports = {
      message:function (text,opts){
        opts = opts || {};
        var msg = new IntlMessageFormat(MESSAGES[locale][text]);
        return msg.format(opts);
    }
  }