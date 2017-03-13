import * as $ from 'jquery';
$(document).ready( () => {
  console.log('document is ready! Let\'s roll');
  const element = document.createElement('div');

  element.innerHTML = 'Click me to lazy load text which will get replaced here!';

  element.onclick = () => {
    import('./lazy_loaded_module').then((lazy) => {
      element.textContent = lazy.default;
    }).catch((err) => {
      console.error(err);
    });
  };

  document.body.appendChild(element);
  $('div')
    .css('border','1px solid blue')
    .css('font-family', 'Tahoma')
    .css('padding', '4px')
    .css('border-radius', '4');
});
