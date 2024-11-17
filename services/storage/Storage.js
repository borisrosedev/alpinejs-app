class StorageService {
  constructor() {}

  removeOneItem(key) {
    localStorage.removeItem(key);
  }

  getOneItem(key) {
    JSON.parse(localStorage.getItem(key));
  }

  setOneItem(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

export default StorageService;
