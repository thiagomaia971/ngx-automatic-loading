"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var loading_button_service_1 = require("./loading-button.service");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ngx_progressbar_1 = require("ngx-progressbar");
var MyBrowserXhr = (function (_super) {
    __extends(MyBrowserXhr, _super);
    function MyBrowserXhr(service, loadingButtonService) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.loadingButtonService = loadingButtonService;
        _this.currentRequest = 0;
        return _this;
    }
    MyBrowserXhr.prototype.build = function () {
        var _this = this;
        var xhr = _super.prototype.build.call(this);
        xhr.onload = function (evt) { return _this.done(); };
        xhr.onerror = function (evt) { return _this.done(); };
        xhr.onabort = function (evt) { return _this.done(); };
        xhr.onloadstart = function (event) {
            _this.currentRequest++;
            if (!_this.service.isStarted()) {
                _this.loadingButtonService.onStartLoadingButtons();
                _this.service.start();
            }
        };
        return xhr;
    };
    MyBrowserXhr.prototype.done = function () {
        this.currentRequest--;
        if (this.currentRequest === 0) {
            this.loadingButtonService.onStopLoadingButtons();
            this.service.done();
        }
    };
    return MyBrowserXhr;
}(http_1.BrowserXhr));
MyBrowserXhr = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ngx_progressbar_1.NgProgressService, loading_button_service_1.LoadingButtonService])
], MyBrowserXhr);
exports.MyBrowserXhr = MyBrowserXhr;
//# sourceMappingURL=my-browser-xhr.service.js.map