"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var loading_button_directive_1 = require("./_shared/directives/loading-button.directive");
var loading_button_service_1 = require("./_shared/services/loading-button.service");
var angular2_ladda_1 = require("angular2-ladda");
var my_browser_xhr_service_1 = require("./_shared/services/my-browser-xhr.service");
var AutomaticLoadingModule = AutomaticLoadingModule_1 = (function () {
    function AutomaticLoadingModule() {
    }
    AutomaticLoadingModule.forRoot = function () {
        return {
            ngModule: AutomaticLoadingModule_1,
            providers: [
                { provide: http_1.BrowserXhr, useClass: my_browser_xhr_service_1.MyBrowserXhr }
            ]
        };
    };
    return AutomaticLoadingModule;
}());
AutomaticLoadingModule = AutomaticLoadingModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            angular2_ladda_1.LaddaModule.forRoot({
                style: "zoom-in",
                spinnerColor: "rgb(204, 24, 30)",
                spinnerSize: 40,
                spinnerLines: 12
            }),
        ],
        declarations: [
            loading_button_directive_1.LoadingButtonDirective
        ],
        exports: [
            loading_button_directive_1.LoadingButtonDirective
        ],
        providers: [
            loading_button_service_1.LoadingButtonService
        ]
        //bootstrap: [AppComponent]
    })
], AutomaticLoadingModule);
exports.AutomaticLoadingModule = AutomaticLoadingModule;
var AutomaticLoadingModule_1;
//# sourceMappingURL=app.module.js.map