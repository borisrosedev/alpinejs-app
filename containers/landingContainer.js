import NotificationService from "../services/notification/notification.js";
import RedirectionService from "../services/redirection/Redirection.js";

export default () => ({
  showWelcome: false, 
  showCallToAction: false,
  init(){
    setTimeout(() => {
        this.showWelcome = true
        setTimeout(() => {
            this.showCallToAction = true
        }, 2000)
    }, 2000)

    new NotificationService().setContent({ content: 'Page d\'Accueil'})
  },
  storeHandler() {
    new RedirectionService().redirect("/html/store.html");
  },
});
