"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
1;
2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
const core_1 = require("@angular/core");
const ionic_angular_1 = require("ionic-angular");
let PreviewModalPage = class PreviewModalPage {
    constructor(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.img = this.navParams.get('img');
    }
    close() {
        this.viewCtrl.dismiss();
    }
};
PreviewModalPage = __decorate([
    ionic_angular_1.IonicPage(),
    core_1.Component({
        selector: 'page-preview-modal',
        templateUrl: 'preview-modal.html',
    })
], PreviewModalPage);
exports.PreviewModalPage = PreviewModalPage;
//# sourceMappingURL=preview-modal.js.map