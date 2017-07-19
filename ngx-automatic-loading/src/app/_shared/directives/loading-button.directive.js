"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var loading_button_service_1 = require("../services/loading-button.service");
//import { LaddaDirective } from 'angular2-ladda/module/ladda.directive';
var ladda_config_1 = require("angular2-ladda/module/ladda-config");
var LoadingButtonDirective = (function () {
    function LoadingButtonDirective(el, config, loadingButtonService, rendered) {
        this.loadingButtonService = loadingButtonService;
        this.rendered = rendered;
        this.el = el.nativeElement;
        if (!config) {
            return;
        }
        // apply default styles if they aren't overwritten by an attribute
        for (var attribute in ladda_config_1.configAttributes) {
            var configValue = config[ladda_config_1.configAttributes[attribute]];
            if (!configValue) {
                continue; // don't waste time reading the attribute
            }
            if (!this.el.getAttribute(attribute)) {
                // attribute isn't set - apply the default config value
                var value = (typeof configValue === "number") ? configValue.toString() : configValue;
                this.el.setAttribute(attribute, value);
            }
        }
    }
    LoadingButtonDirective.prototype.ngOnChanges = function (changes) {
        if (!this._ladda) {
            return; // needed since ngOnChanges is called before ngOnInit
        }
        if (changes['loading']) {
            this.updateLadda(changes['loading'].previousValue);
        }
        if (changes['disabled']) {
            this.updateDisabled();
        }
    };
    LoadingButtonDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.substription = this.loadingButtonService.handleLoadingButton.subscribe(function (isShow) { return _this.handleLoadinButton(isShow); });
        //this._ladda = Ladda.create(this.el);
        // if the initial loading value isn't false, a timeout of 0 ms
        // is necessary for the calculated spinner size to be correct.
        setTimeout(function () { _this.updateLadda(false); }, 0);
    };
    LoadingButtonDirective.prototype.handleLoadinButton = function (isShow) {
        this.ladda = isShow;
        this.updateLadda(!isShow);
    };
    LoadingButtonDirective.prototype.ngOnDestroy = function () {
        if (this._ladda) {
            this._ladda.remove();
        }
        if (this.substription) {
            this.substription.unsubscribe();
        }
    };
    LoadingButtonDirective.prototype.updateLadda = function (previousValue) {
        var loading = typeof this.ladda === 'number' || !!this.ladda;
        var wasLoading = typeof previousValue === 'number' || !!previousValue;
        if (!loading) {
            if (wasLoading) {
                this._ladda.stop();
            }
            return this.updateDisabled();
        }
        if (!wasLoading && this._ladda) {
            this._ladda.start();
        }
        if (typeof this.ladda === 'number') {
            this._ladda.setProgress(this.ladda);
        }
    };
    LoadingButtonDirective.prototype.updateDisabled = function () {
        if (this.disabled) {
            this.el.setAttribute('disabled', '');
        }
        else {
            this.el.removeAttribute('disabled');
        }
    };
    return LoadingButtonDirective;
}());
__decorate([
    core_2.Input('ladda'),
    __metadata("design:type", Object)
], LoadingButtonDirective.prototype, "ladda", void 0);
__decorate([
    core_2.Input('disabled'),
    __metadata("design:type", Boolean)
], LoadingButtonDirective.prototype, "disabled", void 0);
LoadingButtonDirective = __decorate([
    core_1.Directive({
        selector: '[appLoadingButton]'
    }),
    __param(1, core_2.Inject(ladda_config_1.LaddaConfig)), __param(1, core_2.Optional()),
    __metadata("design:paramtypes", [core_1.ElementRef, ladda_config_1.LaddaConfigArgs,
        loading_button_service_1.LoadingButtonService,
        core_1.Renderer])
], LoadingButtonDirective);
exports.LoadingButtonDirective = LoadingButtonDirective;
//# sourceMappingURL=loading-button.directive.js.map