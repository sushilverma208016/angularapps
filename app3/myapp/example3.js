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
var HighlightDirective = (function () {
    function HighlightDirective(el, renderer) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
    HighlightDirective = __decorate([
        core_1.Directive({ selector: '[myHighlight]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], HighlightDirective);
    return HighlightDirective;
}());
exports.HighlightDirective = HighlightDirective;
var core_2 = require("@angular/core");
var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        core_2.Component({
            selector: "main",
            template: "<div myHighlight> Main App </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
//-------------------------
var core_3 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ExampleModule = (function () {
    function ExampleModule() {
    }
    ExampleModule = __decorate([
        core_3.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [MainComponent, HighlightDirective],
            bootstrap: [MainComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ExampleModule);
    return ExampleModule;
}());
//Bootstrap module ----
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(ExampleModule);
//# sourceMappingURL=example3.js.map