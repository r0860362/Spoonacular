import Api from '../../constants/Api';
import Service from '../common/JsonService';

const endpoint = '/food/ingredients/autocomplete';

export default class AutocompleteService extends Service {
  constructor() {
    super(endpoint, {
      apiKey: Api.key,
      query: null,
    });
  }

  setQuery(query) {
    this.parameters.query = query;
  }

  getParameters() {
    return this.parameters;
  }
}
