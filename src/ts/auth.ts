import * as fs from 'fs';

export default class Auth {
    #apiToken: string;
    static #instance?: Auth;

    private constructor() {
        if (!fs.readFileSync('../config.json', 'utf8')) {
            throw new Error ("Cannot read auth file!!!!");
        } else {
            let json = JSON.parse(fs.readFileSync('../config.json', 'utf8'));
            this.#apiToken = json.authorization.apiKey;
        }
        

    }
    static getInstance() {
        if (this.#instance) {
            return this.#instance;
        } else {
            this.#instance = new Auth();
            return this.#instance;
        }
    }

    static reload() {
      this.#instance = new Auth()
      return this.#instance;
    }

    getToken() {
        return this.#apiToken;
    }
}