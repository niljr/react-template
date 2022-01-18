export default class Storage {
    static init() {
        try {
            localStorage.setItem('test-test', 1);
            localStorage.removeItem('test-test');

            this.storageType = localStorage;
        } catch (err) {
            this.storageType = sessionStorage;
        }
    }

    static setItem(key, value) {
        this.storageType.setItem(key, value);
    }

    static getItem(key) {
        return this.storageType.getItem(key);
    }

    static removeItem(key) {
        this.storageType.removeItem(key);
    }
}

Storage.init();
