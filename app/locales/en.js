import Locale from 'ember-intl/models/locale';

export default Locale.extend({
  product: {
    info: '{product} will cost {price, number, USD}',
  }
});
