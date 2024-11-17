import MasterService from "../../models/MasterService.js";

class FormatValidatorService extends MasterService {
  constructor() {
    super();
  }

  validatePassword(pwd) {
    const pattern = new RegExp(/^[a-z0-9èéùïàçû?!-}]{12,20}$/, "ig");
    const isFormatPasswordValid = pattern.test(pwd);
    if (!isFormatPasswordValid) {
      this.notifService({
        content:
          "Mot de passe non valide, il doit comprendre au moins 12 caractères",
        type: "error",
      });
      return false;
    } else {
      return true;
    }
  }
}

export default FormatValidatorService;
