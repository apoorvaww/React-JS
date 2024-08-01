import conf from '../conf/conf'
import {Client, Account, ID} from "appwrite"

//this is all the authorisation related services
export class AuthService{
    //client and account creation:
    client = new Client();
    account;            

    // we are creating a constructor because we want to create account and client only after someone has created and object 
    //so we are putting all the code in constructor so that it works whenever object is created.
    constructor() {
        this.client 
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
    }

    async createAccount ({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                return this.login({email, password});
            }
            else{
                return userAccount
            }
        }
        catch(error){
            throw error;
        }
    }

    async login ({email, password}) {
        try{
            return await this.account.createEmailSession(email, password)
        }
        catch(error){
            throw error
        }
    }

    async getCurrentUser() {
        try{
            return await this.account.get()
        }
        catch(error){
            console.log("Appwrite Service :: gerCurrentUser :: error", error);
        }

        return null;
    }

    async logout (){
        try{
            await this.account.deleteSessions();
        }
        catch(error){
            console.log("Appwrite service :: logout :: error", error);;
        }
    }

}

// instance (object) of class Authservice class
const authService = new AuthService();

export default authService