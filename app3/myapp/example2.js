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
var core_2 = require("@angular/core");
// class AnalogClock implements AfterViewInit {
//     @ViewChild("can")
//     private can : ElementRef ;
// private ctx : any ;
// private radius  : any ;
//      ngAfterViewInit() {
//         this.ctx = this.can.nativeElement.getContext("2d");      
//         this.radius = this.can.nativeElement.height / 2;
//         this.ctx.translate(this.radius, this.radius);
//        this. radius = this.radius * 0.90
//        var component = this;
//         setInterval(function () { 
//                 component.drawClock();
//         }, 1000);
//      }
//       drawClock() {
//             this.drawFace(this.ctx, this.radius);
//             this.drawNumbers(this.ctx, this.radius);
//             this.drawTime(this.ctx, this.radius);
//         }
//  drawFace(ctx, radius) {
//   var grad;
//   ctx.beginPath();
//   ctx.arc(0, 0, radius, 0, 2*Math.PI);
//   ctx.fillStyle = 'white';
//   ctx.fill();
//   grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
//   grad.addColorStop(0, '#333');
//   grad.addColorStop(0.5, 'white');
//   grad.addColorStop(1, '#333');
//   ctx.strokeStyle = grad;
//   ctx.lineWidth = radius*0.1;
//   ctx.stroke();
//   ctx.beginPath();
//   ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
//   ctx.fillStyle = '#333';
//   ctx.fill();
// }
//  drawNumbers(ctx, radius) {
//   var ang;
//   var num;
//   ctx.font = radius*0.15 + "px arial";
//   ctx.textBaseline="middle";
//   ctx.textAlign="center";
//   for(num = 1; num < 13; num++){
//     ang = num * Math.PI / 6;
//     ctx.rotate(ang);
//     ctx.translate(0, -radius*0.85);
//     ctx.rotate(-ang);
//     ctx.fillText(num.toString(), 0, 0);
//     ctx.rotate(ang);
//     ctx.translate(0, radius*0.85);
//     ctx.rotate(-ang);
//   }
// }
//  drawTime(ctx, radius){
//     var now = new Date();
//     var hour = now.getHours();
//     var minute = now.getMinutes();
//     var second = now.getSeconds();
//     //hour
//     hour=hour%12;
//     hour=(hour*Math.PI/6)+
//     (minute*Math.PI/(6*60))+
//     (second*Math.PI/(360*60));
//     this.drawHand(ctx, hour, radius*0.5, radius*0.07);
//     //minute
//     minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
//     this.drawHand(ctx, minute, radius*0.8, radius*0.07);
//     // second
//     second=(second*Math.PI/30);
//     this.drawHand(ctx, second, radius*0.9, radius*0.02);
// }
//     drawHand(ctx, pos, length, width) {
//         ctx.beginPath();
//         ctx.lineWidth = width;
//         ctx.lineCap = "round";
//         ctx.moveTo(0,0);
//         ctx.rotate(pos);
//         ctx.lineTo(0, -length);
//         ctx.stroke();
//         ctx.rotate(-pos);
//     }
// }
//--------------------------
var core_3 = require("@angular/core");
var AnalogClock = (function () {
    function AnalogClock(el) {
        this.el = el;
        this.ctx = el.nativeElement.getContext("2d");
        this.radius = el.nativeElement.height / 2;
        this.ctx.translate(this.radius, this.radius);
        this.radius = this.radius * 0.90;
        var component = this;
        setInterval(function () {
            component.drawClock();
        }, 1000);
    }
    AnalogClock.prototype.drawClock = function () {
        this.drawFace(this.ctx, this.radius);
        this.drawNumbers(this.ctx, this.radius);
        this.drawTime(this.ctx, this.radius);
    };
    AnalogClock.prototype.drawFace = function (ctx, radius) {
        var grad;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
        grad.addColorStop(0, '#333');
        grad.addColorStop(0.5, 'white');
        grad.addColorStop(1, '#333');
        ctx.strokeStyle = grad;
        ctx.lineWidth = radius * 0.1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
        ctx.fillStyle = '#333';
        ctx.fill();
    };
    AnalogClock.prototype.drawNumbers = function (ctx, radius) {
        var ang;
        var num;
        ctx.font = radius * 0.15 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        for (num = 1; num < 13; num++) {
            ang = num * Math.PI / 6;
            ctx.rotate(ang);
            ctx.translate(0, -radius * 0.85);
            ctx.rotate(-ang);
            ctx.fillText(num.toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, radius * 0.85);
            ctx.rotate(-ang);
        }
    };
    AnalogClock.prototype.drawTime = function (ctx, radius) {
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        //hour
        hour = hour % 12;
        hour = (hour * Math.PI / 6) +
            (minute * Math.PI / (6 * 60)) +
            (second * Math.PI / (360 * 60));
        this.drawHand(ctx, hour, radius * 0.5, radius * 0.07);
        //minute
        minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
        this.drawHand(ctx, minute, radius * 0.8, radius * 0.07);
        // second
        second = (second * Math.PI / 30);
        this.drawHand(ctx, second, radius * 0.9, radius * 0.02);
    };
    AnalogClock.prototype.drawHand = function (ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.moveTo(0, 0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    };
    AnalogClock = __decorate([
        core_3.Directive({
            selector: "[analogclock]"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AnalogClock);
    return AnalogClock;
}());
//-----------------
var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        core_2.Component({
            selector: "main",
            template: "\n        <canvas id=\"canvas\" width=\"400\" height=\"400\" style=\"background-color:#333\" analogclock>\n        </canvas>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
//-------------------------
var core_4 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var Example2Module = (function () {
    function Example2Module() {
    }
    Example2Module = __decorate([
        core_4.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [MainComponent, AnalogClock],
            bootstrap: [MainComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], Example2Module);
    return Example2Module;
}());
//Bootstrap module ----
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(Example2Module);
//# sourceMappingURL=example2.js.map