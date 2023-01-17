const element = document.querySelector('.select-choices');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [48.872185, 2.354224],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 15
  });

  var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/Subtract.svg',
      iconImageSize: [28, 40],
      iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);
};

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.js-form', {
  colorWrong: '#FF5C00',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10
      }
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: 'Как вас зовут?',
    tel: 'Укажите ваш телефон',
    email: 'Укажите ваш e-mail'
  },

});

