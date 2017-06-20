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
var Counter = (function () {
    function Counter() {
        this.count = 0;
    }
    return Counter;
}());
var ChildComponent1 = (function () {
    function ChildComponent1() {
        var _this = this;
        // @Input()
        // private month : number  = 10;
        this._month = 10;
        this.c = new Counter();
        this.alarm = new core_1.EventEmitter();
        //setInterval ( () => { this.alarm.emit("Good Morning: " + new Date().getSeconds() ); }  , 2000);
        setInterval(function () { _this.c.count++; _this.alarm.emit(_this.c); }, 2000);
    }
    Object.defineProperty(ChildComponent1.prototype, "month", {
        get: function () { return this._month; },
        set: function (val) {
            this._month = val;
            this.monthName = ChildComponent1.monthNames[this.month - 1];
        },
        enumerable: true,
        configurable: true
    });
    ChildComponent1.prototype.ngOnInit = function () {
        this.monthName = ChildComponent1.monthNames[this.month - 1];
    };
    ChildComponent1.monthNames = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ChildComponent1.prototype, "alarm", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], ChildComponent1.prototype, "month", null);
    ChildComponent1 = __decorate([
        core_1.Component({
            selector: "child1",
            template: "Child1: {{month}} - {{monthName}} - {{c.count}}"
        }), 
        __metadata('design:paramtypes', [])
    ], ChildComponent1);
    return ChildComponent1;
}());
//-------------------------------------------
var core_2 = require("@angular/core");
var MainComponent = (function () {
    function MainComponent() {
        this.mn = 11;
    }
    // onAlarm(msg : string) {
    //     this.message = msg;
    // }
    MainComponent.prototype.onAlarm = function (msg) {
        this.message = msg.count + "";
        msg.count = 0;
    };
    MainComponent.prototype.cwc1 = function () {
        this.mn = 12;
        this.chsjshfjsdhfjhdjhfjdsh1.month = 12;
    };
    __decorate([
        core_2.ViewChild("ch1"), 
        __metadata('design:type', ChildComponent1)
    ], MainComponent.prototype, "chsjshfjsdhfjhdjhfjdsh1", void 0);
    MainComponent = __decorate([
        core_1.Component({
            selector: "main",
            template: "\n        <child1 [month]='mn'></child1>\n        <br/>\n        <child1 [month]='11' #ch1></child1>\n        <br/>      \n\n        <child1 [month]='11' (alarm)=\"onAlarm($event)\"></child1>\n\n        <br/> \n        Message from Child: {{message}}\n        <br/>\n\n        <button (click)='cwc1()'>Communicate With Child1</button>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
//------------------------------------------
var core_3 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var Example1Module = (function () {
    function Example1Module() {
    }
    Example1Module = __decorate([
        core_3.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [MainComponent, ChildComponent1],
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
//# sourceMappingURL=example5.js.map