"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { HttpClient } from '@angular/common/http';
const core_1 = require("@angular/core");
require("rxjs/add/operator/map");
let ImagesProvider = class ImagesProvider {
    constructor(http, transfer) {
        this.http = http;
        this.transfer = transfer;
        this.apiURL = 'http://localhost:3000/';
    }
    getImages() {
        return this.http.get(this.apiURL + 'images').map(res => res.json());
    }
    deleteImage(img) {
        return this.http.get(this.apiURL + 'images/' + img._id);
    }
    uploadImage(img, desc) {
        let url = this.apiURL + 'images';
        var options = {
            fileKey: 'image',
            chunkedMode: false,
            mimeType: 'multipart/form-data',
            params: { 'desc': desc }
        };
        const fileTransfer = this.transfer.create();
        return fileTransfer.upload(img, url, options);
    }
};
ImagesProvider = __decorate([
    core_1.Injectable()
], ImagesProvider);
exports.ImagesProvider = ImagesProvider;
//# sourceMappingURL=images.js.map