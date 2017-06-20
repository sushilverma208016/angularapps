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
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
var AnalogClock = (function () {
    function AnalogClock() {
    }
    AnalogClock.prototype.ngAfterViewInit = function () {
        this.ctx = this.can.nativeElement.getContext("2d");
        this.radius = this.can.nativeElement.height / 2;
        this.ctx.translate(this.radius, this.radius);
        this.radius = this.radius * 0.90;
        var component = this;
        setInterval(function () {
            component.drawClock();
        }, 1000);
    };
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
    __decorate([
        core_1.ViewChild("can"), 
        __metadata('design:type', core_1.ElementRef)
    ], AnalogClock.prototype, "can", void 0);
    AnalogClock = __decorate([
        core_1.Component({
            selector: "analogclock",
            template: "\n        <canvas id=\"canvas\" width=\"400\" height=\"400\" style=\"background-color:#333\" #can>\n        </canvas>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], AnalogClock);
    return AnalogClock;
}());
var UtilityModule = (function () {
    function UtilityModule() {
    }
    UtilityModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [AnalogClock],
            exports: [AnalogClock]
        }), 
        __metadata('design:paramtypes', [])
    ], UtilityModule);
    return UtilityModule;
}());
//--------------------------------------------------------------------
var OnlineTestEditComponent = (function () {
    function OnlineTestEditComponent() {
        this.loading = false;
        this.getQuestionsFromServerAsync();
    }
    OnlineTestEditComponent.prototype.deleteOption = function (question, oi) {
        question.options.splice(oi, 1);
    };
    OnlineTestEditComponent.prototype.addNewOption = function (question) {
        question.options.push({ optionText: "", isCorrect: false, marks: 0 });
    };
    OnlineTestEditComponent.prototype.deleteQuestion = function (qi) {
        this.questions.splice(qi, 1);
    };
    OnlineTestEditComponent.prototype.addNewQuestion = function () {
        this.questions.push({ statement: "", options: [{ optionText: "", isCorrect: false, marks: 0 }] });
    };
    OnlineTestEditComponent.prototype.done = function () {
        for (var i = 0; i < this.questions.length; i++) {
            var question = this.questions[i];
            for (var j = 0; j < question.options.length; j++) {
                var option = question.options[j];
                if (option.isCorrect == true && option.userSelected == true) {
                    alert("Correct");
                }
                else if (option.isCorrect == false && option.userSelected == true) {
                    alert("In Correct");
                }
            }
        }
    };
    OnlineTestEditComponent.prototype.getQuestionsFromServerAsync = function () {
        var xhr = new XMLHttpRequest();
        xhr.open("get", "/questions", true /* async */);
        var component = this;
        // register the function to be called when IO Completion Port receives the data
        xhr.onload = function () {
            if (xhr.status === 200) {
                component.loading = false;
                var json = xhr.responseText;
                // deserialize json stirng to javascript object in RAM
                component.questions = JSON.parse(json);
            }
            else {
                component.loading = false;
            }
        };
        xhr.send(); // will give the job of sending the request to IO Completion Port
        // and immediately return the main thread of the browser
        this.loading = true;
    }; // main thread goes back to event loop of the browser without the result
    OnlineTestEditComponent = __decorate([
        core_1.Component({
            selector: "onlinetestedit",
            template: "\n        <img src=\"loading.gif\" *ngIf=\"loading\"/>\n        <div *ngIf=\"!loading\">\n            <div *ngFor=\"let question of questions; let qi = index;\">\n                <div>\n                    <input type=\"text\" [(ngModel)]=\"question.statement\">\n                    <button (click)=\"deleteQuestion( qi )\">Delete Question</button>\n                </div>\n                <div *ngFor=\"let option of question.options; let oi = index ;\">                   \n                    \n                    <button (click)=\"deleteOption( question, oi )\">Delete Option </button>\n                   \n                    <label>                     \n                        <input type=\"checkbox\" [(ngModel)]=\"option.isCorrect\"/> \n                        isCorrect\n                    </label>\n    \n                    <input type=\"text\" [(ngModel)]=\"option.optionText\">\n                    <input type=\"text\" [(ngModel)]=\"option.marks\">\n                \n                </div>\n                <button (click)=\"addNewOption(question)\">Add New Option</button>\n            </div>\n            <button (click)=\"addNewQuestion()\">Add New Question</button>\n        </div>\n        \n        ",
            styles: [
                "\n            div { margin : 20px ;}\n            "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], OnlineTestEditComponent);
    return OnlineTestEditComponent;
}());
//----------------------------------------
var OnlineTestComponent = (function () {
    function OnlineTestComponent() {
        this.loading = false;
        this.getQuestionsFromServerAsync();
    }
    OnlineTestComponent.prototype.done = function () {
        for (var i = 0; i < this.questions.length; i++) {
            var question = this.questions[i];
            for (var j = 0; j < question.options.length; j++) {
                var option = question.options[j];
                if (option.isCorrect == true && option.userSelected == true) {
                    alert("Correct");
                }
                else if (option.isCorrect == false && option.userSelected == true) {
                    alert("In Correct");
                }
            }
        }
    };
    OnlineTestComponent.prototype.getQuestionsFromServerAsync = function () {
        var xhr = new XMLHttpRequest();
        xhr.open("get", "/questions", true /* async */);
        var component = this;
        // register the function to be called when IO Completion Port receives the data
        xhr.onload = function () {
            if (xhr.status === 200) {
                component.loading = false;
                var json = xhr.responseText;
                // deserialize json stirng to javascript object in RAM
                component.questions = JSON.parse(json);
            }
            else {
                component.loading = false;
            }
        };
        xhr.send(); // will give the job of sending the request to IO Completion Port
        // and immediately return the main thread of the browser
        this.loading = true;
    }; // main thread goes back to event loop of the browser without the result
    OnlineTestComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "onlinetest",
            template: "\n <img src=\"loading.gif\" *ngIf=\"loading\"/>\n        <div *ngIf=\"!loading\">\n            <div *ngFor=\"let question of questions\">\n                <div>{{question.statement}}</div>\n                <div *ngFor=\"let option of question.options\">\n                   \n                    <label> \n                        <input type=\"checkbox\" [(ngModel)]=\"option.userSelected\"/> \n                        {{option.optionText}}\n                    </label>\n\n                </div>\n            </div>\n            <button (click)=\"done()\">Done</button>\n        </div>\n        ",
            styles: [""]
        }), 
        __metadata('design:paramtypes', [])
    ], OnlineTestComponent);
    return OnlineTestComponent;
}());
//----------------------------------------
var TestModule = (function () {
    function TestModule() {
    }
    TestModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [OnlineTestComponent, OnlineTestEditComponent],
            exports: [OnlineTestComponent, OnlineTestEditComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TestModule);
    return TestModule;
}());
//--------------------------------------------------------------------
var MainAppComponent = (function () {
    function MainAppComponent() {
    }
    MainAppComponent = __decorate([
        core_1.Component({
            selector: "mainapp",
            template: "\n        <table border=\"1\" cellspacing=\"0\" cellpadding=\"10\">\n            <tr>\n                <td>\n                    <onlinetest></onlinetest>\n                </td>\n                <td>\n                    <onlinetestedit></onlinetestedit>\n                </td>\n                 <td>\n                    <analogclock></analogclock>\n                </td>\n            </tr>\n        </table>\n        ",
            styles: [""]
        }), 
        __metadata('design:paramtypes', [])
    ], MainAppComponent);
    return MainAppComponent;
}());
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, TestModule, UtilityModule],
            declarations: [MainAppComponent],
            bootstrap: [MainAppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
platform.bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map