import Api from '../../constants/Api';
import JsonService from '../common/JsonService';

const endpoint = '/recipes/';
const suffix = '/information';
export default class RecipeInformationService extends JsonService {
  constructor() {
    super(endpoint, {
      apiKey: Api.key,
      id: null,
    });
  }

  reset() {
    this.parameters = {
      apiKey: Api.key,
      id: null,
    };
    this.suffix = suffix;
  }

  setId(id) {
    this.suffix = id + suffix;
  }
}
