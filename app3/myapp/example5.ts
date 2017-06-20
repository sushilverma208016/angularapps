
import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";

class Counter {
    public count: number = 0 ; 
}

@Component(
    {
        selector: "child1",
        template: "Child1: {{month}} - {{monthName}} - {{c.count}}"
    }
)
class ChildComponent1 implements OnInit {
    // @Input()
    // private month : number  = 10;

    private _month : number = 10 ;

    private monthName : string ;

    private static monthNames : string[] = [ "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"] ;

    private c : Counter = new Counter() ;

    @Output()
    // private alarm : EventEmitter<string> = new EventEmitter<string>();
    private alarm : EventEmitter<Counter> = new EventEmitter<Counter>();


    constructor() {

        //setInterval ( () => { this.alarm.emit("Good Morning: " + new Date().getSeconds() ); }  , 2000);
        setInterval ( () => { this.c.count++; this.alarm.emit( this.c ); }  , 2000);

    }


    @Input()
    set month(val: number) {
        this._month = val ;
        this.monthName = ChildComponent1.monthNames[this.month-1];
    }

    get month() { return this._month; }

    ngOnInit() {
        this.monthName = ChildComponent1.monthNames[this.month-1];
    }
}
//-------------------------------------------
import {ViewChild, ElementRef} from "@angular/core";
@Component(
    {
        selector: "main",
        template: 
        `
        <child1 [month]='mn'></child1>
        <br/>
        <child1 [month]='11' #ch1></child1>
        <br/>      

        <child1 [month]='11' (alarm)="onAlarm($event)"></child1>

        <br/> 
        Message from Child: {{message}}
        <br/>

        <button (click)='cwc1()'>Communicate With Child1</button>
        `
    }
)
class MainComponent {

    private message : string ;

    // onAlarm(msg : string) {
    //     this.message = msg;
    // }

     onAlarm(msg : Counter) {
        this.message = msg.count+"";
        msg.count = 0 ;
    }

    private mn : number = 11 ;

    // @ViewChild("ch1")
    @ViewChild("ch1")    
    private chsjshfjsdhfjhdjhfjdsh1 : ChildComponent1;

    cwc1() {

        this.mn = 12;
        this.chsjshfjsdhfjhdjhfjdsh1.month = 12;

    }
}
//------------------------------------------
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
@NgModule(
    {
        imports : [BrowserModule ],
        declarations : [MainComponent, ChildComponent1],
        bootstrap : [MainComponent]
    }
)
class Example1Module {
}
//--------------------------------------------
// Bootstrap Module
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
const platform = platformBrowserDynamic();
platform.bootstrapModule(Example1Module);