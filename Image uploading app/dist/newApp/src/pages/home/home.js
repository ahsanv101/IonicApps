"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const ionic_angular_1 = require("ionic-angular");
let HomePage = class HomePage {
    constructor(navCtrl, camera, actionSheetCtrl, imagesProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.imagesProvider = imagesProvider;
        this.modalCtrl = modalCtrl;
        this.images = [];
        this.reloadImages();
    }
    reloadImages() {
        this.imagesProvider.getImages().subscribe(data => {
            this.images = data;
        });
    }
    openImage(img) {
        let modal = this.modalCtrl.create('PreviewModalPage', { img: img });
        modal.present();
    }
    deleteImage(img) {
        this.imagesProvider.deleteImage(img).subscribe(data => {
            this.reloadImages();
        });
    }
    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Select image source',
            buttons: [
                {
                    text: 'Load from library',
                    handler: () => {
                        this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use camera',
                    handler: () => {
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
    takePicture(sourceType) {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(imagePath => {
            let modal = this.modalCtrl.create('UploadModalPage', { data: imagePath });
            modal.present();
            modal.onDidDismiss(data => {
                if (data && data.reload) {
                    this.reloadImages();
                }
            });
        }, err => {
            console.log('Error: ', err);
        });
    }
};
HomePage = __decorate([
    ionic_angular_1.IonicPage(),
    core_1.Component({
        selector: 'page-home',
        templateUrl: 'home.html',
    })
], HomePage);
exports.HomePage = HomePage;
//# sourceMappingURL=home.js.map