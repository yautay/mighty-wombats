export default {
  isLoading(context) {
    context.commit("setHomeLoading", true);
  },
  isNotLoading(context) {
    context.commit("setHomeLoading", false);
  },
};


