import Api from '../../constants/Api';
import Service from './Service';

export default class JsonService extends Service {
  constructor(endpoint, parameters, suffix) {
    super(endpoint, parameters, suffix);
  }

  setMaxResults(number) {
    this.parameters.number = number;
  }

  get(context, callback) {
    super
      .get(Api.serviceUrl)
      .then((res) => res.json())
      .then((data) => callback.call(this, data))
      .catch((reason) => {
        console.log('r:' + reason);
      });
  }
}
