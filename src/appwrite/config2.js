import { Client,Account,Databases,Storage } from "appwrite"


const client2 = new Client();
client2.setEndpoint(process.env.REACT_APP_ENDPOINT2).setProject(process.env.REACT_APP_PROJECT_ID2);
export const account2 = new Account(client2);
export const databases2 = new Databases(client2);
export const bucket2 = new Storage(client2);