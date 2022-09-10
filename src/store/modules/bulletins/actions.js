import axios from "axios";

export default {
  fetchBulletins(context) {
    const baseURL = "http://localhost:3000/bulletins-management/bulletins";
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
    const baseURL = "http://localhost:3000/bulletins-management/bulletins?last=5";
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


