import { Client, Account, ID } from "appwrite";
import config from "./config";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({}) {}
}
const authService = new AuthService();

export default authService;
