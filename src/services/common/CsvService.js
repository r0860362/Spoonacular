import Api from '../../constants/Api';
import Service from './Service';

const parseCsv = (res) => {
  console.log(res);

  return text.split('\n').map((line) => {
    const lineValues = line.split(';');
    let lineObject = {};
    return Object.entries(this.columns).map(({ index, key }) => {
      lineObject[key] = lineValues[index];
    });
    return lineObject;
  });
};

export default class CsvService extends Service {
  constructor(endpoint, parameters, columns) {
    super(endpoint, parameters);
    this.columns = columns;
  }

  get(context, callback) {
    try {
      const target = `https://spoonacular.com/application/frontend/downloads/top-1k-ingredients.csv`; //file
      //const target = `https://SOME_DOMAIN.com/api/data/log_csv?$"queryString"`; //target can also be api with req.query

      const res = fetch(target, {
        method: 'get',
        headers: {
          'content-type': 'text/csv;charset=UTF-8',
          //'Authorization': //in case you need authorisation
        },
      }).then((res) => {
        if (res.status === 200) {
          console.log(res);
          const data = res.text();
          console.log(data);
        } else {
          console.log(`Error code ${res.status}`);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
}
