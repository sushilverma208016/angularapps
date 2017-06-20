

import { AfterViewInit,ViewChild,ElementRef } from "@angular/core"; 
import { Component } from "@angular/core";

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

import { Directive  } from "@angular/core";
@Directive (
    {
        selector: "[analogclock]"
    }
)

class AnalogClock {
    constructor(private el: ElementRef) {
        this.ctx = el.nativeElement.getContext("2d");      
        this.radius = el.nativeElement.height / 2;
        this.ctx.translate(this.radius, this.radius);
        this. radius = this.radius * 0.90

        var component = this;
            setInterval(function () { 
                component.drawClock();
            }, 1000);
    }

    private ctx : any ;
    private radius  : any ;
    drawClock() {
        this.drawFace(this.ctx, this.radius);
        this.drawNumbers(this.ctx, this.radius);
        this.drawTime(this.ctx, this.radius);
    }

 drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

 drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

 drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    this.drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    this.drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    this.drawHand(ctx, second, radius*0.9, radius*0.02);
}

    drawHand(ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.moveTo(0,0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }

}
//-----------------
@Component(
    {
        selector: "main",
        template: 
        `
        <canvas id="canvas" width="400" height="400" style="background-color:#333" analogclock>
        </canvas>
        `
    }
)
class MainComponent {

}
//-------------------------
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
@NgModule(
    {   
        imports: [ BrowserModule ],
        declarations: [ MainComponent, AnalogClock ],
        bootstrap: [ MainComponent ]
    }
)
class Example2Module {

}

//Bootstrap module ----
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
const platform = platformBrowserDynamic();
platform.bootstrapModule(Example2Module);

