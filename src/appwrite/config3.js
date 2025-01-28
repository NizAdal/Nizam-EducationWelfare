import { Client,Account,Databases,Storage } from "appwrite"


const client3 = new Client();
client3.setEndpoint(process.env.REACT_APP_ENDPOINT3).setProject(process.env.REACT_APP_PROJECT_ID3);
export const account3 = new Account(client3);
export const databases3 = new Databases(client3);
export const bucket3 = new Storage(client3);