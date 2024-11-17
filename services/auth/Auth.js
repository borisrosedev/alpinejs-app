import MasterService from "../../models/MasterService.js";
import FormatValidatorService from "../validators/FormatValidator.js";

class AuthService extends MasterService {
  constructor() {
    super();
    this.formatValidatorService = new FormatValidatorService();
  }

  endSessionRecord(email) {
    const logs = this.storage.getOneItem("logs");
    if (!logs) {
      this.storage.setOneItem("logs", {
        date: new Date().toLocaleString(),
        content: `fin de session de l'utilisateur de l'email: ${email}`,
      });
    } else {
      logs.push({
        date: new Date().toLocaleString(),
        content: `fin de session de l'utilisateur de l'email: ${email}`,
      });
      this.storage.setOneItem("logs", logs);
    }
  }

  securityRecord(email, type = "connexion") {
    const logs = this.storage.getOneItem("logs");
    if (!logs) {
      this.storage.setOneItem("logs", {
        date: new Date().toLocaleString(),
        content: `tentative de ${type}   ${email ? `via l'email suivant` : "sans identifiant"}`,
      });
    } else {
      logs.push({
        date: new Date().toLocaleString(),
        content: `tentative de ${type} ${email ? `via l'email suivant` : "sans identifiant"}`,
      });
      this.storage.setOneItem("logs", logs);
    }
  }

  register(credentials) {
    const { email, password, firstname, lastname } = credentials;
    if (!(email && password && firstname && lastname)) {
      this.notifService.setContent(
        { content: "Veuillez remplir le formulaire", type: "error" },
        4000,
      );
      this.securityRecord(null, "inscription");
    } else {
      const isFormatPasswordValid =
        this.formatValidatorService.validatePassword(password);
      if (!isFormatPasswordValid) {
        return false;
      } else {
        this.notifService.setContent(
          { content: "Inscription réussie", type: "success" },
          4000,
        );
        return true;
      }
    }
  }

  login(credentials) {
    const { email, password } = credentials;
    if (!(email && password)) {
      this.notifService.setContent(
        { content: "Veuillez remplir le formulaire", type: "error" },
        4000,
      );
      this.securityRecord(null);
    } else {
      const isFormatPasswordValid =
        this.formatValidatorService.validatePassword(password);
      if (!isFormatPasswordValid) {
        return false;
      } else {
        this.notifService.setContent(
          { content: "Connexion réussie", type: "success" },
          4000,
        );
        return true;
      }
    }
  }

  logout() {
    const user = this.storage.getOneItem("user");
    this.storage.removeOneItem("user");
    this.endSessionRecord(user.email);
    this.notifService.setContent({
      content: `A bientôt ${user.firstname} ${user.lastname}`,
    });
  }
}

export default AuthService;
