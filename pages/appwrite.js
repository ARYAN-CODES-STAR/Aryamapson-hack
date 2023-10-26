// // appwrite.js

import { Client, Account } from 'appwrite';

export const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') 
  .setProject('6538406f6c766021d3f5'); 

  export const account = new Account(client);
export { ID } from 'appwrite';