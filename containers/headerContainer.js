import RedirectionService from "../services/redirection/Redirection.js";

export default () => ({
  homeHandler() {
    new RedirectionService().redirect("/index.html");
  },
  loginHandler() {
    new RedirectionService().redirect("/html/login.html");
  },
  storeHandler() {
    new RedirectionService().redirect("/html/store.html");
  },
});
