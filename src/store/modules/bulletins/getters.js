export default {
  getBulletins(state) {
    return state.bulletins;
  },
  getLastFiveBulletins(state) {
    return state.bulletins.slice(0, 5);
  }
}