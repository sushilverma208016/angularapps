import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {NgModule, Component, ViewChild, ElementRef, AfterViewInit} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

const platform = platformBrowserDynamic();

@Component(
    {
        selector : "analogclock",
        template :
        `
        <canvas id="canvas" width="400" height="400" style="background-color:#333" #can>
        </canvas>
        `
    }
)
class AnalogClock implements AfterViewInit {

    @ViewChild("can")
    private can : ElementRef ;

private ctx : any ;
private radius  : any ;

     ngAfterViewInit() {

        this.ctx = this.can.nativeElement.getContext("2d");      
        this.radius = this.can.nativeElement.height / 2;
        this.ctx.translate(this.radius, this.radius);
       this. radius = this.radius * 0.90

       var component = this;
       setInterval(function () { 
           component.drawClock();
        }, 1000);
    }

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

@NgModule(
    {
        imports: [ BrowserModule ],    
        declarations : [AnalogClock],
        exports : [ AnalogClock ]
    }
)
class UtilityModule {
}




//--------------------------------------------------------------------
@Component(
    {
        selector: "onlinetestedit",
        template: 
        `
        <img src="loading.gif" *ngIf="loading"/>
        <div *ngIf="!loading">
            <div *ngFor="let question of questions; let qi = index;">
                <div>
                    <input type="text" [(ngModel)]="question.statement">
                    <button (click)="deleteQuestion( qi )">Delete Question</button>
                </div>
                <div *ngFor="let option of question.options; let oi = index ;">                   
                    
                    <button (click)="deleteOption( question, oi )">Delete Option </button>
                   
                    <label>                     
                        <input type="checkbox" [(ngModel)]="option.isCorrect"/> 
                        isCorrect
                    </label>
    
                    <input type="text" [(ngModel)]="option.optionText">
                    <input type="text" [(ngModel)]="option.marks">
                
                </div>
                <button (click)="addNewOption(question)">Add New Option</button>
            </div>
            <button (click)="addNewQuestion()">Add New Question</button>
        </div>
        
        `,
        styles : [
            `
            div { margin : 20px ;}
            `
        ]
    }
)
class OnlineTestEditComponent { 

       private loading : boolean = false ;
    private questions : any ;

    constructor(/* this = ref. of OnlineTestComponent object */) { 
        this.getQuestionsFromServerAsync() ;
    }

    deleteOption( question , oi ) {
        question.options.splice ( oi, 1 );
    }

    addNewOption ( question ) { 
        question.options.push (  { optionText : "", isCorrect : false, marks : 0 });
    }

    deleteQuestion( qi ) {
        this.questions.splice ( qi, 1 );
    }
    
    addNewQuestion() {
        this.questions.push ( { statement : "" , options : [ { optionText : "", isCorrect : false, marks : 0 } ] }  );
    }

    private done() {

        for ( var i = 0 ; i < this.questions.length ; i++ ) {

            var question = this.questions[i] ;

            for ( var j = 0 ; j < question.options.length ; j++  ) {
                var option = question.options[j];

                if ( option.isCorrect == true &&  option.userSelected == true ) {
                    alert ( "Correct");
                } else if ( option.isCorrect == false &&  option.userSelected == true ) {
                    alert ( "In Correct");
                }

            }
            
        }

    }

    private getQuestionsFromServerAsync(/* this = ref. of OnlineTestComponent object */) : void {
        var xhr = new XMLHttpRequest() ; 
        xhr.open ("get", "/questions", true /* async */);

        var component = this ;
         
        // register the function to be called when IO Completion Port receives the data
        xhr.onload = function(/* this = ref. of XHR object */) {
            if ( xhr.status === 200) { // success

                component.loading = false ;

                var json : string = xhr.responseText ; 

                // deserialize json stirng to javascript object in RAM
                component.questions = JSON.parse(json);

            } else { // failed

                component.loading = false ;

            }
        };

        xhr.send(); // will give the job of sending the request to IO Completion Port
        // and immediately return the main thread of the browser
        this.loading = true ;
    } // main thread goes back to event loop of the browser without the result
}
//----------------------------------------
@Component(
    {
        moduleId: module.id,
        selector: "onlinetest",
        template: 
        `
 <img src="loading.gif" *ngIf="loading"/>
        <div *ngIf="!loading">
            <div *ngFor="let question of questions">
                <div>{{question.statement}}</div>
                <div *ngFor="let option of question.options">
                   
                    <label> 
                        <input type="checkbox" [(ngModel)]="option.userSelected"/> 
                        {{option.optionText}}
                    </label>

                </div>
            </div>
            <button (click)="done()">Done</button>
        </div>
        `,
        styles : [""]
    }
)
class OnlineTestComponent { 

    private loading : boolean = false ;
    private questions : any ;

    constructor(/* this = ref. of OnlineTestComponent object */) { 
        this.getQuestionsFromServerAsync() ;
    }
    

    private done() {

        for ( var i = 0 ; i < this.questions.length ; i++ ) {

            var question = this.questions[i] ;

            for ( var j = 0 ; j < question.options.length ; j++  ) {
                var option = question.options[j];

                if ( option.isCorrect == true &&  option.userSelected == true ) {
                    alert ( "Correct");
                } else if ( option.isCorrect == false &&  option.userSelected == true ) {
                    alert ( "In Correct");
                }

            }
            
        }

    }

    private getQuestionsFromServerAsync(/* this = ref. of OnlineTestComponent object */) : void {
        var xhr = new XMLHttpRequest() ; 
        xhr.open ("get", "/questions", true /* async */);

        var component = this ;
         
        // register the function to be called when IO Completion Port receives the data
        xhr.onload = function(/* this = ref. of XHR object */) {
            if ( xhr.status === 200) { // success

                component.loading = false ;

                var json : string = xhr.responseText ; 

                // deserialize json stirng to javascript object in RAM
                component.questions = JSON.parse(json);

            } else { // failed

                component.loading = false ;

            }
        };

        xhr.send(); // will give the job of sending the request to IO Completion Port
        // and immediately return the main thread of the browser
        this.loading = true ;
    } // main thread goes back to event loop of the browser without the result
}
//----------------------------------------
@NgModule(
    {
        imports : [BrowserModule, FormsModule],
        declarations : [ OnlineTestComponent, OnlineTestEditComponent ],
        exports: [OnlineTestComponent, OnlineTestEditComponent]
    }
)
class TestModule  {
}
//--------------------------------------------------------------------
@Component(
    {
        selector: "mainapp",
        template: 
        `
        <table border="1" cellspacing="0" cellpadding="10">
            <tr>
                <td>
                    <onlinetest></onlinetest>
                </td>
                <td>
                    <onlinetestedit></onlinetestedit>
                </td>
                 <td>
                    <analogclock></analogclock>
                </td>
            </tr>
        </table>
        `,
        styles : [""]
    }
)
class MainAppComponent { 
}
@NgModule(
    {
        imports : [ BrowserModule, FormsModule, TestModule, UtilityModule ],
        declarations : [ MainAppComponent ],
        bootstrap: [ MainAppComponent ]
    }
)
class AppModule {
}
platform.bootstrapModule(AppModule);