import Api from '../../constants/Api';
import JsonService from '../common/JsonService';

const endpoint = '/recipes/';
const suffix = '/analyzedInstructions';

export default class RecipeService extends JsonService {
  constructor() {
    super(
      endpoint,
      {
        apiKey: Api.key,
        id: null,
      },
      suffix
    );
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
