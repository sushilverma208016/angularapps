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
var core_1 = require("@angular/core");
var Hero = (function () {
    function Hero(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return Hero;
}());
exports.Hero = Hero;
var HeroFormComponent = (function () {
    function HeroFormComponent() {
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.submitted = false;
        this.active = true;
    }
    HeroFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    HeroFormComponent.prototype.newHero = function () {
        var _this = this;
        this.model = new Hero(42, '', '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    HeroFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero-form',
            templateUrl: 'hero-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HeroFormComponent);
    return HeroFormComponent;
}());
exports.HeroFormComponent = HeroFormComponent;
var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        core_1.Component({
            selector: "main",
            template: "<hero-form> </hero-form>"
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
//-------------------------
var core_2 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require('@angular/forms');
var Example7Module = (function () {
    function Example7Module() {
    }
    Example7Module = __decorate([
        core_2.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [MainComponent, HeroFormComponent],
            bootstrap: [MainComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Example7Module);
    return Example7Module;
}());
//Bootstrap module ----
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(Example7Module);
//# sourceMappingURL=example7.js.map