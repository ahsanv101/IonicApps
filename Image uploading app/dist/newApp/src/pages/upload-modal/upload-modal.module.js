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
const upload_modal_1 = require("./upload-modal");
let UploadModalPageModule = class UploadModalPageModule {
};
UploadModalPageModule = __decorate([
    core_1.NgModule({
        declarations: [
            upload_modal_1.UploadModalPage,
        ],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(upload_modal_1.UploadModalPage),
        ],
    })
], UploadModalPageModule);
exports.UploadModalPageModule = UploadModalPageModule;
//# sourceMappingURL=upload-modal.module.js.map