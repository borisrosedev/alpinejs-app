import NotificationService from "../services/notification/notification.js";
import StorageService from "../services/storage/storage.js";

class MasterService {
  constructor() {
    this.notifService = new NotificationService();
    this.storage = new StorageService();
  }
}

export default MasterService;
