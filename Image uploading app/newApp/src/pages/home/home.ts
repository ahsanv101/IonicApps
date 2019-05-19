import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';
import { ImagesProvider } from '../../providers/images/images';
import { Camera } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  images=[];
  constructor(public navCtrl: NavController,private camera: Camera,private actionSheetCtrl:ActionSheetController , private imagesProvider: ImagesProvider, private modalCtrl: ModalController) {
    this.reloadImages();
  }

  reloadImages() {
    this.imagesProvider.getImages().subscribe(data=>{
      this.images=data;
    });
  }

  openImage(img){
    let modal =this.modalCtrl.create('PreviewModalPage', {img:img});
    modal.present();
  }


  deleteImage(img){
    this.imagesProvider.deleteImage(img).subscribe(data=>{
      this.reloadImages();
    });
  }

  presentActionSheet(){
    let actionSheet= this.actionSheetCtrl.create({
      title: 'Select image source',
      buttons: [
        {
          text: 'Load from library',
          handler: ()=>{
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use camera',
          handler: ()=>{
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }

      ]
    });
    actionSheet.present();
  }
  takePicture(sourceType){
    var options={
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true

    }
    this.camera.getPicture(options).then(imagePath=>{
      let modal = this.modalCtrl.create('UploadModalPage',{data: imagePath});
      modal.present();
      modal.onDidDismiss(data=>{
        if(data && data.reload){
          this.reloadImages();
        }
      }); 
    }, err=>{
      console.log('Error: ',err);
    })
  }
}
 