import Api from '../../constants/Api';
import CsvService from '../common/CsvService';

const endpoint = '/application/frontend/downloads/top-1k-ingredients.csv';

export default class IngredientListService extends CsvService {
  constructor() {
    super(endpoint, {}, { 0: 'description', 1: 'id' });
  }
}
