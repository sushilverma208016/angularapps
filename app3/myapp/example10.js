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
var Book = (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    return Book;
}());
var TimeoutBookService = (function () {
    function TimeoutBookService() {
    }
    // simulation of getting data from server
    TimeoutBookService.prototype.getBookAsync = function () {
        return new Promise(function (resolve) {
            setTimeout(function () { resolve(new Book("T1", "A1")); }, 4000);
        });
    };
    TimeoutBookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TimeoutBookService);
    return TimeoutBookService;
}());
require('rxjs/add/operator/toPromise');
var http_1 = require("@angular/http");
var HTTPBookService = (function () {
    function HTTPBookService(http) {
        this.http = http;
    }
    HTTPBookService.prototype.getBookAsync = function () {
        return this.http.get("/books")
            .toPromise()
            .then(function () { })
            .catch(function () { });
    };
    HTTPBookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HTTPBookService);
    return HTTPBookService;
}());
var XHRBookService = (function () {
    function XHRBookService() {
    }
    XHRBookService.prototype.getBookAsync = function () {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("get", "/book", true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else {
                    reject(xhr.responseText);
                }
            };
            xhr.send();
        });
    };
    XHRBookService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], XHRBookService);
    return XHRBookService;
}());
var BookComponent = (function () {
    function BookComponent(tms) {
        this.tms = tms;
        this.book = new Book("", "");
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tms.getBookAsync()
            .then(function (bk) { _this.book = bk; })
            .catch(function () { });
    };
    BookComponent = __decorate([
        core_1.Component({
            selector: "book",
            template: "{{book.title}} - {{book.author}}"
        }), 
        __metadata('design:paramtypes', [TimeoutBookService])
    ], BookComponent);
    return BookComponent;
}());
//------------------------------------------------------------
var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        core_1.Component({
            selector: "main",
            template: "<book></book>"
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
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
            declarations: [MainComponent, BookComponent],
            providers: [TimeoutBookService],
            bootstrap: [MainComponent]
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
//# sourceMappingURL=example10.js.map