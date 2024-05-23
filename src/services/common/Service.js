import Api from '../../constants/Api';

const concatenateUrl = (url, endpoint, parameters, suffix) =>
  url +
  endpoint +
  suffix +
  Object.entries(parameters).reduce(
    (parameterString, [key, value]) => {
      if (value != null) {
        if (parameterString === '') {
          parameterString += Api.firstDelimiter;
        } else {
          parameterString += Api.delimiter;
        }
        parameterString += key + '=';
        parameterString += Array.isArray(value)
          ? concatenateParameterList(value)
          : encodeURIComponent(value);
      }
      return parameterString;
    },

    ''
  );
const concatenateParameterList = (values = []) =>
  values.reduce(
    (prev = '', current) =>
      (prev === '' ? '' : Api.listDelimiter) +
      prev +
      encodeURIComponent(current)
  );

export default class Service {
  constructor(endpoint, parameters = {}, suffix = '') {
    this.endpoint = endpoint;
    this.parameters = parameters;
    this.suffix = suffix;
  }

  reset() {
    console.warn('No reset method implemented for: ' + this.endpoint);
  }

  get(url, headers) {
    let concatenatedUrl = concatenateUrl(
      url,
      this.endpoint,
      this.parameters,
      this.suffix
    );
    console.log(concatenatedUrl);

    let res = fetch(concatenatedUrl);
    this.reset();
    return res;
  }
}
