import axios from "axios";
import * as dotenv from 'dotenv'
dotenv.config()

export default {
  fetchBulletins(context) {
    const baseURL = process.env.WOMBATS_API_URI + "/bulletins-management/bulletins";
    axios
      .get(baseURL)
      .then(response => {
        context.commit("setBulletinsData", response.data);
      })
      .catch(e => {
        console.log(e);
      });
  },
  fetchLastFiveBulletins(context) {
    const baseURL = process.env.WOMBATS_API_URI + "/bulletins-management/bulletins?last=5";
    axios
      .get(baseURL)
      .then(response => {
        context.commit("setBulletinsData", response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
};


