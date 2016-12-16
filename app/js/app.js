import './module.js'
import './vendor/semantic-ui.js'
(function(){

  var $ = require('jquery');

  var eventHandler = ()=>{
    var btn = document.getElementById('modal-launch');

    var showModal = ()=>{
      $('.ui.modal').modal('show');
    }

    btn.addEventListener('click', showModal);
  }

  if (document.readyState === 'complete' || document.readyState !== 'loading') {
    eventHandler();
  } else {
    document.addEventListener('DOMContentLoaded', eventHandler);
  }

})();