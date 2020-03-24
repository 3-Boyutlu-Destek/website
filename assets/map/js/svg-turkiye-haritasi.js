/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

function svgturkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');

 const printer = document.getElementById("printer");
 const il = document.getElementById("il");
 const kurum = document.getElementById("kurum");


  element.addEventListener(
    'mouseover',
    function (event) {
      if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris') {


        il.innerHTML =  event.target.parentNode.getAttribute('data-iladi');
        printer.innerHTML =  event.target.parentNode.getAttribute('printer');
        kurum.innerHTML =  event.target.parentNode.getAttribute('kurum');

        info.innerHTML = [
          '<div class="uk-text-center">',

          '<b>',
          event.target.parentNode.getAttribute('data-iladi'),
          '</b>',

          '</div>'
        ].join('');
      }
    }
  );


  element.addEventListener(
      'click',
      function (event) {
        if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris') {


          il.innerHTML =  event.target.parentNode.getAttribute('data-iladi');
          printer.innerHTML =  event.target.parentNode.getAttribute('printer');
          kurum.innerHTML =  event.target.parentNode.getAttribute('kurum');

          info.innerHTML = [
            '<div class="uk-text-center">',

            '<b>',
            event.target.parentNode.getAttribute('data-iladi'),
            '</b>',

            '</div>'
          ].join('');
        }
      }
  );




  element.addEventListener(
    'mousemove',
    function (event) {
      info.style.top = event.pageY + 25 + 'px';
      info.style.left = event.pageX + 'px';
    }
  );


  element.addEventListener(
    'click',
    function (event) {
      if (event.target.tagName === 'path') {
        const parent = event.target.parentNode;
        const id = parent.getAttribute('id');

        if (
          id === 'guney-kibris'
        ) {
          return;
        }

        window.location.href = (
          '#'
          + id
          + '-'
          + parent.getAttribute('data-plakakodu')
        );
      }
    }
  );
}
