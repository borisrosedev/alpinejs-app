class NotificationService {
  constructor() {
    this.timeoutId = null;
  }

  setContent(data, timer = 3000) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    const notification = document.getElementById("notification");
    notification.display = "flex";
    const paragraph = document.createElement("p");
    paragraph.textContent = data.textContent;
    notification.style.alignItems = "center";
    notification.style.justifyContent = "center";
    notification.style.padding = "10px";
    notification.style.position = "fixed";
    notification.style.bottom = "10px";
    notification.style.border = "solid 1px #fff";
    notification.style.borderRadius = "10px";
    notification.appendChild(paragraph);

    setTimeout(() => {
      notification.removeChild(paragraph);
      notification.display = "none";
    }, timer);
  }
}

export default NotificationService;
