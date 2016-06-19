//import 'framework7/dist/js/framework7';

can.view.attr('f7-init', function(el, attrData) {
  console.log('f7-init !!!');

  if (!isSsr()){
    System.import('framework7/dist/js/framework7').then(module => {

      console.log('Framework7 loaded!!!');

      // Initialize app
      var myApp = new module.Framework7();

      // If we need to use custom DOM library, let's save it to $$ variable:
      var $$ = Dom7;

      // Add view
      var mainView = myApp.addView('.view-main', {
        // Because we want to use dynamic navbar, we need to enable it for this view:
        dynamicNavbar: true
      });
    });
  }
});

function isSsr(){
  return typeof process === "object" && {}.toString.call(process) === "[object process]";
}