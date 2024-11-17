import AuthService from "../services/auth/auth.js";
import RedirectionService from "../services/redirection/Redirection.js";

export default () => ({
  isLoggingIn: true,
  init() {
    console.log("✅ login has mounted");
  },
  showPopup: false,
  popupMessage: "",
  message: "Pas encore inscrit(e) - Cliquez",
  fields: [
    {
      name: "email",
      type: "email",
      placeholder: "Entrez votre email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Entrez votre mot de passe",
    },
  ],
  switchFormHandler() {
    this.isLoggingIn = !this.isLoggingIn;
    if (this.isLoggingIn) {
      this.message = "Pas encore inscrit(e) - Cliquez";
      this.fields = [
        {
          name: "email",
          type: "email",
          placeholder: "Entrez votre email",
        },
        {
          name: "password",
          type: "password",
          placeholder: "Entrez votre mot de passe",
        },
      ];
    } else {
      this.message = "Déjà inscrit(e) - Cliquez";
      this.fields.unshift(
        {
          name: "firstname",
          type: "text",
          placeholder: "Entrez votre prénom",
        },
        {
          name: "lastname",
          type: "text",
          placeholder: "Entrez votre nom",
        },
      );
    }
  },
  submitHandler(event) {
    event.preventDefault();

    const emailValue = document.getElementById("email").value;
    const passwordValue = document.querySelector("#password").value;

    if (!this.isLoggingIn) {
      const firstnameValue = document.getElementById("firstname").value;
      const lastnameValue = document.getElementById("lastname").value;
      const isRegistered = new AuthService().register({
        firstname: firstnameValue,
        lastname: lastnameValue,
        email: emailValue,
        password: passwordValue,
      });
      if (isRegistered) {
        new RedirectionService().redirect("/html/dashboard.html", 3000);
      }
    } else {
      const isLoggedIn = new AuthService().login({
        email: emailValue,
        password: passwordValue,
      });
      if (isLoggedIn) {
        new RedirectionService().redirect("/html/dashboard.html", 3000);
      }
    }
  },
});
