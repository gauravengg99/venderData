import {type GoogleApis } from "googleapis";

class Google {
   public google:GoogleApis; 
 constructor(private keyFile:string ,private scopes:string[] , google:GoogleApis) {
  this.keyFile = keyFile;
  this.scopes = scopes;
    this.google = google;
 }       
   auth(){
     const auth = new this.google.auth.GoogleAuth({
        keyFile:this.keyFile,
        scopes:this.scopes
     })
     return auth
   }
}

export default Google;