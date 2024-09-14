import conf from '../src/conf/conf'
import {Client, Account , ID } from 'appwrite'

export class AuthService{
    client = new Client();
    //we want to create a client and an account whenever an object of this class is created.
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(client);
    }

    //creating a method
    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password);
            if(userAccount){
                //call another method
                //if account is created then we will login the user into the website
                return this.login(email, password);
            }
            else{
                return userAccount;
            }
        } catch(error){
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
            
        }
    }
}


//exporting object of the class:
const authservice = new AuthService();

export default authservice;