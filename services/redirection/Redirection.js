import MasterService from "../../models/MasterService.js";

class RedirectionService extends MasterService {
  constructor() {
    super();
  }

  redirect(pathname, timeout = 0) {
    if (timeout > 0) {
      this.notifService.setContent({
        content: "Redirection en cours ...",
        type: "info",
      });
    }
    setTimeout(() => {
      window.location.pathname = pathname;
    }, timeout);
  }
}

export default RedirectionService;
