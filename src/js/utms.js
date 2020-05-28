function getParameterByName(name) {
  var name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

var utm = {
  source: getParameterByName('utm_source'),
  medium: getParameterByName('utm_medium'),
  campaign: getParameterByName('utm_campaign'),
  content: getParameterByName('utm_content'),
  term: getParameterByName('utm_term')
};

let utmInputs = document.querySelectorAll('.utm'),
  dynamicTitle = document.querySelector('.firstblock__dynamic-title');

utmInputs.forEach(element => {
  element.value = JSON.stringify(utm);
});
