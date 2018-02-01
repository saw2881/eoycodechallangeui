"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var CustomRequestOptions = (function (_super) {
    __extends(CustomRequestOptions, _super);
    function CustomRequestOptions() {
        var _this = _super.apply(this, arguments) || this;
        _this.headers = new http_1.Headers({
            'Authorization': 'Bearer Angular 2',
        });
        return _this;
    }
    return CustomRequestOptions;
}(http_1.BaseRequestOptions));
CustomRequestOptions = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CustomRequestOptions);
exports.CustomRequestOptions = CustomRequestOptions;
// import { Injectable } from '@angular/core';
// import { Headers, Http, RequestOptions } from '@angular/http';
// @Injectable()
// export class CustomRequestOptions extends RequestOptions {
//   constructor(private requestOptionArgs: RequestOptions) {
//     super();
//   }
//   addHeader(headerName: string, headerValue: string) {
//     (this.requestOptionArgs.headers as Headers).set(headerName, headerValue);
//   }
// } 
//# sourceMappingURL=custom-request-options.js.map