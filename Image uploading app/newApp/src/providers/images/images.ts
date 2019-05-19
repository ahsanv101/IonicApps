// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {FileTransfer, FileUploadOptions} from '@ionic-native/file-transfer';
import 'rxjs/add/operator/map';

@Injectable()
export class ImagesProvider {
  apiURL='http://localhost:3000/'; 
  // apiURL='https://habib-app-v1.herokuapp.com/';
  constructor(public http: Http, private transfer: FileTransfer) {
  }

 getImages(){
   return this.http.get(this.apiURL+'images').map(res=>res.json());
 }

 deleteImage(img){
  return this.http.get(this.apiURL+'images/'+img._id);
 }

 uploadImage(img, desc){
  let url=this.apiURL+'images';

  var options: FileUploadOptions={
    fileKey: 'image',
    chunkedMode: false,
    mimeType: 'multipart/form-data',
    params: {'desc': desc}
  }

  const fileTransfer = this.transfer.create();

  return fileTransfer.upload(img,url,options);
 }

}
