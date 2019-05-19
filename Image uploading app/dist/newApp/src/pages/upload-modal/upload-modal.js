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
let UploadModalPage = class UploadModalPage {
    constructor(navCtrl, navParams, viewCtrl, imagesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.imagesProvider = imagesProvider;
        this.imageData = this.navParams.get('data');
    }
    saveImage() {
        this.imagesProvider.uploadImage(this.imageData, this.desc).then(res => {
            this.viewCtrl.dismiss({ reload: true });
        }, err => {
            this.dismiss();
        });
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
};
UploadModalPage = __decorate([
    ionic_angular_1.IonicPage(),
    core_1.Component({
        selector: 'page-upload-modal',
        templateUrl: 'upload-modal.html',
    })
], UploadModalPage);
exports.UploadModalPage = UploadModalPage;
//# sourceMappingURL=upload-modal.js.map