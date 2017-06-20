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
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: 'Home Component'
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about',
            template: 'About Component'
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contact',
            template: 'Contact Component'
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
var router_1 = require('@angular/router');
var appRoutes = [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'example1.html', component: HomeComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        core_1.Component({
            selector: "main",
            template: "\n        <h1>Angular Router</h1>\n        <nav>\n            <a routerLink=\"/example1.html\" routerLinkActive=\"active\">Home</a>\n            <a routerLink=\"/about\" routerLinkActive=\"active\">About</a>\n            <a routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a>\n        </nav>\n        <router-outlet></router-outlet>\n\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
//------------------------------------------
var core_2 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var Example1Module = (function () {
    function Example1Module() {
    }
    Example1Module = __decorate([
        core_2.NgModule({
            imports: [platform_browser_1.BrowserModule, exports.routing],
            declarations: [MainComponent, HomeComponent, AboutComponent, ContactComponent],
            bootstrap: [MainComponent],
            providers: [exports.appRoutingProviders]
        }), 
        __metadata('design:paramtypes', [])
    ], Example1Module);
    return Example1Module;
}());
//--------------------------------------------
// Bootstrap Module
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(Example1Module);
//# sourceMappingURL=example11.js.map