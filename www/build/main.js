webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment_environment__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Service = (function () {
    function Service(http) {
        this.http = http;
    }
    // To extract data from response
    Service.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
        // return body.data || {};
    };
    // To handle error from response
    Service.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(errMsg);
    };
    Service.prototype.getRequest = function (url, options) {
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environment_environment__["a" /* environment */].origin + ("" + url), options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    // public deleteRequest(options: any): Observable<any> {
    //     return this.http.delete(`${environment.origin}` + '/b2b/management/search?type=exhibition&product=color_stone', options)
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }
    // public putRequest(options: any): Observable<any> {
    //     return this.http.put(`${environment.origin}` + '/b2b/management/search?type=exhibition&product=color_stone', options)
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }
    Service.prototype.postRequest = function (url, data, options) {
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__environment_environment__["a" /* environment */].origin + ("" + url), data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    Service.prototype.makeRequest = function (url, options) {
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environment_environment__["a" /* environment */].origin + url, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], Service);
    return Service;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPaperGenratorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generate_modal_generate_modal__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionPaperGenratorPage = (function () {
    function QuestionPaperGenratorPage(navCtrl, navParams, _service, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._service = _service;
        this.modalCtrl = modalCtrl;
        this.stdList = [];
        this.subList = [];
        this.chpList = [];
        this.chpSelected = [];
        this.topicList = [];
        this.topicSelected = [];
        // Question
        this.questions = {
            options: [],
            single: [],
            double: [],
            multi: []
        };
        this.options = [];
        this.queNames = {
            'options': {
                'name': 'Please select MCQ.',
                'marks': 1
            },
            'single': {
                'name': 'Please answer below question in one line.',
                'marks': 1
            },
            'double': {
                'name': 'Please answer below question in two line.',
                'marks': 2
            },
            'multi': {
                'name': 'Please answer below question in multi line.',
                'marks': 3
            }
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._service.getRequest('standard', options).subscribe(function (res) {
            _this.stdList = res.data;
            // this.loaderService.closeLoader();
            // this.toastService.displayToast(res['message'], 2000, 'bottom');
            // this.loadData();
            // this.colorStoneOrderCartList();
            console.log(res);
        }, function (error) {
            console.log("Error : ", error);
        });
    }
    QuestionPaperGenratorPage.prototype.GenerateopenModal = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__generate_modal_generate_modal__["a" /* GenerateModalPage */]);
        myModal.present();
    };
    QuestionPaperGenratorPage.prototype.getSubjects = function (subId) {
        var _this = this;
        console.log(subId);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = { id: subId };
        this._service.postRequest('subjects', data, options).subscribe(function (res) {
            _this.subList = res.data.subjects;
        }, function (error) {
            console.log("Error : ", error);
        });
    };
    QuestionPaperGenratorPage.prototype.getSubjectChapters = function (subjectId) {
        var _this = this;
        console.log(subjectId);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = { id: subjectId };
        this._service.postRequest('chapters', data, options).subscribe(function (res) {
            _this.chpList = res.data.chapters;
        }, function (error) {
            console.log("Error : ", error);
        });
    };
    QuestionPaperGenratorPage.prototype.getChapters = function (stdId) {
        var _this = this;
        this.chpSelected = [];
        this.topicSelected = [];
        var myParams = new URLSearchParams();
        myParams.append('id', stdId);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this._service.getRequest('chp/' + ("" + stdId), options).subscribe(function (res) {
            _this.chpList = res.data.chpList;
        }, function (error) {
            console.log("Error : ", error);
        });
    };
    ;
    QuestionPaperGenratorPage.prototype.getTopics = function (chpId) {
        var _this = this;
        this.topicSelected = [];
        var indexIs = this.chpSelected.indexOf(chpId);
        if (indexIs === -1) {
            this.chpSelected.push(chpId);
        }
        else {
            this.chpSelected.splice(indexIs, 1);
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = { chapterIdList: this.chpSelected };
        this._service.postRequest('topics', data, options).subscribe(function (res) {
            _this.topicList = res.data.topics;
        }, function (error) {
            console.log("Error : ", error);
        });
    };
    ;
    QuestionPaperGenratorPage.prototype.getQuestions = function (topicId) {
        var _this = this;
        var indexIs = this.topicSelected.indexOf(topicId);
        if (indexIs === -1) {
            this.topicSelected.push(topicId);
        }
        else {
            this.topicSelected.splice(indexIs, 1);
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = { topicIdList: this.topicSelected };
        this._service.postRequest('questions', data, options).subscribe(function (res) {
            console.log("Questions : ", res);
            console.log(res.data.questions);
            _this.questions.options = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](res.data.questions, function (o) { return o.queType == "option"; });
            _this.questions.single = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](res.data.questions, function (o) { return o.queType == "single"; });
            _this.questions.double = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](res.data.questions, function (o) { return o.queType == "double"; });
            _this.questions.multi = __WEBPACK_IMPORTED_MODULE_5_lodash__["filter"](res.data.questions, function (o) { return o.queType == "multi"; });
            console.log("Questions : ", _this.questions);
            _this.generatePaper();
        }, function (error) {
            console.log("Error : ", error);
        });
    };
    QuestionPaperGenratorPage.prototype.generatePaper = function () {
        var queHtml = '<html><head></head><body><h3 style="text-align : center">KDS HighSchool</h3><table class="quePaper">';
        if (this.questions['options'].length) {
            queHtml += '<tr>' +
                '<td>Q.1 : </td>' +
                '<td>' + this.queNames['options'].name + '</td>' +
                '<td>' + this.queNames['options'].marks + '</td>' +
                '</tr>';
            for (var i = 0; i < this.questions['options'].length; i++) {
                queHtml += '<tr>' +
                    '<td></td>' +
                    '<td class="pd-l-20">' + (i + 1) + '. ' + this.questions['options'][i].que + '</td>' +
                    '<td></td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td></td>' +
                    '<td class="pd-l-20">A) ' + this.questions['options'][i].options[0] + '  B) ' + this.questions['options'][i].options[1] + ' C) ' + this.questions['options'][i].options[2] + ' D) ' + this.questions['options'][i].options[3] + '</td>' +
                    '<td></td>' +
                    '</tr>';
            }
        }
        if (this.questions['single'].length) {
            queHtml += '<tr class="mt-15"></tr><tr>' +
                '<td>Q.2 : </td>' +
                '<td>' + this.queNames['single'].name + '</td>' +
                '<td>' + this.queNames['single'].marks + '</td>' +
                '</tr>';
            for (var i = 0; i < this.questions['single'].length; i++) {
                queHtml += '<tr>' +
                    '<td></td>' +
                    '<td class="pd-l-20">' + (i + 1) + '. ' + this.questions['single'][i].que + '</td>' +
                    '<td></td>' +
                    '</tr>';
            }
        }
        if (this.questions['double'].length) {
            queHtml += '<tr class="mt-15"></tr><tr>' +
                '<td>Q.3 : </td>' +
                '<td>' + this.queNames['double'].name + '</td>' +
                '<td>' + this.queNames['double'].marks + '</td>' +
                '</tr>';
            for (var i = 0; i < this.questions['double'].length; i++) {
                queHtml += '<tr class="mt-15"></tr><tr>' +
                    '<td></td>' +
                    '<td class="pd-l-20">' + (i + 1) + '. ' + this.questions['double'][i].que + '</td>' +
                    '<td></td>' +
                    '</tr>';
            }
        }
        if (this.questions['multi'].length) {
            queHtml += '<tr class="mt-15"></tr><tr>' +
                '<td>Q.4 : </td>' +
                '<td>' + this.queNames['multi'].name + '</td>' +
                '<td>' + this.queNames['multi'].marks + '</td>' +
                '</tr>';
            for (var i = 0; i < this.questions['multi'].length; i++) {
                queHtml += '<tr>' +
                    '<td></td>' +
                    '<td class="pd-l-20">' + (i + 1) + '. ' + this.questions['multi'][i].que + '</td>' +
                    '<td></td>' +
                    '</tr>';
            }
        }
        queHtml += '</table></body></html>';
        console.log(queHtml);
        var options = {
            documentSize: "A4",
            type: "share"
        };
        cordova.plugins.pdf.usingData("<html><h1>Hello World</h1></html>", options)
            .then(function (stats) { return console.log('status', stats); }) // ok..., ok if it was able to handle the file to the OS.  
            .catch(function (err) { return console.log(err); });
    };
    QuestionPaperGenratorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-question-paper-genrator',template:/*ion-inline-start:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\question-paper-genrator\question-paper-genrator.html"*/'<!--\n  Generated template for the QuestionPaperGenratorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Question-paper-genrator</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n	<ion-card>\n		<ion-card-content>\n			<ion-list radio-group>\n				<ion-list-header>\n					Select Standard\n				</ion-list-header>\n\n				<div class="scroll">\n					<ion-item *ngFor="let std of stdList">\n						<ion-label> Standard - {{std.name}}</ion-label>\n						<ion-radio checked="false" [value]="std._id" (click)="getSubjects(std._id)"></ion-radio>\n					</ion-item>\n\n					<!-- <ion-item>\n						<ion-label>Standard 2</ion-label>\n						<ion-radio value="2"></ion-radio>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Standard 3</ion-label>\n						<ion-radio value="3"></ion-radio>\n					</ion-item> -->\n				</div>\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-content>\n			<ion-list radio-group>\n				<ion-list-header>\n					Select Subjects\n				</ion-list-header>\n\n				<div class="scroll">\n					<ion-item *ngFor="let sub of subList">\n						<ion-label> {{sub.subjectName}}</ion-label>\n						<ion-radio checked="false" [value]="sub._id" (click)="getSubjectChapters(sub._id)"></ion-radio>\n					</ion-item>\n\n					<!-- <ion-item>\n						<ion-label>Standard 2</ion-label>\n						<ion-radio value="2"></ion-radio>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Standard 3</ion-label>\n						<ion-radio value="3"></ion-radio>\n					</ion-item> -->\n				</div>\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n\n\n	<ion-card>\n		<ion-card-content>\n			<ion-list>\n				<ion-list-header>\n					Select Chepter\n					<ion-badge float-right color="primary">{{chpSelected.length}}</ion-badge>\n				</ion-list-header>\n\n				<div class="scroll">\n					<ion-item *ngFor="let chp of chpList">\n						<ion-label>{{chp.chapterName}}</ion-label>\n						<ion-checkbox color="dark" (click)="getTopics(chp._id)"></ion-checkbox>\n					</ion-item>\n\n					<!-- <ion-item>\n						<ion-label>Chapter 2</ion-label>\n						<ion-checkbox color="dark"></ion-checkbox>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Chapter 3</ion-label>\n						<ion-checkbox color="dark"></ion-checkbox>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Chapter 4</ion-label>\n						<ion-checkbox color="dark"></ion-checkbox>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Chapter 5</ion-label>\n						<ion-checkbox color="dark"></ion-checkbox>\n					</ion-item> -->\n				</div>\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-content>\n			<ion-list>\n				<ion-list-header>\n					Select Topics\n					<ion-badge float-right color="primary">{{topicSelected.length}}</ion-badge>\n				</ion-list-header>\n\n				<div class="scroll">\n					<ion-item *ngFor="let topic of topicList">\n						<ion-label>{{topic.topicName}}</ion-label>\n						<ion-checkbox color="dark" (click)="getQuestions(topic._id)"></ion-checkbox>\n					</ion-item>\n<!-- \n					<ion-item>\n						<ion-label>Topic 2</ion-label>\n						<ion-checkbox color="dark"></ion-checkbox>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Topic 3</ion-label>\n						<ion-checkbox color="dark"></ion-checkbox>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Topic 4</ion-label>\n						<ion-checkbox color="dark"></ion-checkbox>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Topic 5</ion-label>\n						<ion-checkbox color="dark"></ion-checkbox>\n					</ion-item> -->\n				</div>\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n	<ion-row>\n		<ion-col col-5>\n			<button ion-button block (click)="GenerateopenModal()">Generate</button>\n		</ion-col>\n		<ion-col col-7>\n			<button ion-button block>Generate with ans</button>\n		</ion-col>\n	</ion-row>\n	\n</ion-footer>'/*ion-inline-end:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\question-paper-genrator\question-paper-genrator.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], QuestionPaperGenratorPage);
    return QuestionPaperGenratorPage;
}());

//# sourceMappingURL=question-paper-genrator.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GenerateModalPage = (function () {
    function GenerateModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    GenerateModalPage.prototype.GeneratecloseModal = function () {
        this.viewCtrl.dismiss();
    };
    GenerateModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GenerateModalPage');
    };
    GenerateModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-generate-modal',template:/*ion-inline-start:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\question-paper-genrator\generate-modal\generate-modal.html"*/'<!--\n  Generated template for the GenerateModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar>\n		<ion-title>Select Question Type</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<ion-card>\n		<ion-card-content>\n			<ion-list>\n				<ion-list-header>\n					<div>\n						Total Questions\n						<ion-badge float-right color="primary">3</ion-badge>\n					</div>\n					<div class="ttl-marks">\n						Total Marks\n						<ion-badge float-right color="primary">3</ion-badge>\n					</div>\n				</ion-list-header>\n\n				<ion-row>\n					<ion-col text-center>\n						<ion-label>O - 1</ion-label>\n					</ion-col>\n					<ion-col>\n						<ion-input></ion-input>\n					</ion-col>\n					<ion-col text-center>\n						<ion-label>Out Of 361</ion-label>\n					</ion-col>\n				</ion-row>\n\n				<ion-row>\n					<ion-col text-center>\n						<ion-label>S - 2</ion-label>\n					</ion-col>\n					<ion-col>\n						<ion-input></ion-input>\n					</ion-col>\n					<ion-col text-center>\n						<ion-label>Out Of 143</ion-label>\n					</ion-col>\n				</ion-row>\n\n				<ion-row>\n					<ion-col text-center>\n						<ion-label>S - 3</ion-label>\n					</ion-col>\n					<ion-col>\n						<ion-input></ion-input>\n					</ion-col>\n					<ion-col text-center>\n						<ion-label>Out Of 103</ion-label>\n					</ion-col>\n				</ion-row>\n\n				<ion-row>\n					<ion-col text-center>\n						<ion-label>S - 4</ion-label>\n					</ion-col>\n					<ion-col>\n						<ion-input></ion-input>\n					</ion-col>\n					<ion-col text-center>\n						<ion-label>Out Of 54</ion-label>\n					</ion-col>\n				</ion-row>\n		\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n	<ion-row>\n		<ion-col>\n			<button ion-button block>Okay</button>\n		</ion-col>\n		<ion-col>\n			<button ion-button block color="danger" (click)="GeneratecloseModal()">Cancel</button>\n		</ion-col>\n	</ion-row>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\question-paper-genrator\generate-modal\generate-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], GenerateModalPage);
    return GenerateModalPage;
}());

//# sourceMappingURL=generate-modal.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlueprintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blueprint_modal_blueprint_modal__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BlueprintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BlueprintPage = (function () {
    function BlueprintPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    BlueprintPage.prototype.BlueprintopenModal = function () {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__blueprint_modal_blueprint_modal__["a" /* BlueprintModalPage */]);
        myModal.present();
    };
    BlueprintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blueprint',template:/*ion-inline-start:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\blueprint\blueprint.html"*/'<!--\n  Generated template for the BlueprintPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Blueprint</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n	<ion-card>\n		<ion-card-content>\n			<ion-list>\n				<ion-list-header>\n					<span class="list-head">Listing</span>\n					<div float-right><ion-icon ios="ios-add-circle" md="md-add-circle" color="primary" (click)="BlueprintopenModal()"></ion-icon></div>			\n				</ion-list-header>\n\n				<ion-row class="listing-header">\n					<ion-col>\n						<strong> Name </strong>\n					</ion-col>\n					<ion-col>\n						<strong> Marks</strong>\n					</ion-col>\n				</ion-row>\n				\n				<ion-item-sliding>\n					<ion-item>\n						<ion-row>\n							<ion-col>\n								Name 1\n							</ion-col>\n							<ion-col>\n								Marks 1\n							</ion-col>\n						</ion-row>\n					</ion-item>						\n					<ion-item-options side="right">\n					<button ion-button>View</button>\n					</ion-item-options>\n				</ion-item-sliding>\n				<ion-item-sliding>\n					<ion-item>\n						<ion-row>\n							<ion-col>\n								Name 2\n							</ion-col>\n							<ion-col>\n								Marks 2\n							</ion-col>\n						</ion-row>\n					</ion-item>						\n					<ion-item-options side="right">\n					<button ion-button color="primary">View</button>\n					</ion-item-options>\n				</ion-item-sliding>\n				<ion-item-sliding>\n					<ion-item>\n						<ion-row>\n							<ion-col>\n								Name 3\n							</ion-col>\n							<ion-col>\n								Marks 3\n							</ion-col>\n						</ion-row>\n					</ion-item>						\n					<ion-item-options side="right">\n					<button ion-button color="primary">View</button>\n					</ion-item-options>\n				</ion-item-sliding>\n				<ion-item-sliding>\n					<ion-item>\n						<ion-row>\n							<ion-col>\n								Name 4\n							</ion-col>\n							<ion-col>\n								Marks 4\n							</ion-col>\n						</ion-row>\n					</ion-item>						\n					<ion-item-options side="right">\n					<button ion-button color="primary">View</button>\n					</ion-item-options>\n				</ion-item-sliding>\n\n			\n\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\blueprint\blueprint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], BlueprintPage);
    return BlueprintPage;
}());

//# sourceMappingURL=blueprint.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlueprintModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlueprintModalPage = (function () {
    function BlueprintModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    BlueprintModalPage.prototype.BlueprintcloseModal = function () {
        this.viewCtrl.dismiss();
    };
    BlueprintModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blueprint-modal',template:/*ion-inline-start:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\blueprint\blueprint.modal\blueprint-modal.html"*/'<!--\n  Generated template for the GenerateModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar>\n		<ion-title>Select Blueprint</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<ion-card>\n		<ion-card-content>\n			<ion-list>\n				<div class="blueprintDetail">\n					<ion-item>\n						<ion-label>Blueprint Name :</ion-label>				\n						<ion-input type="text" value=""></ion-input>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Standard :</ion-label>				\n						<ion-select>\n							<ion-option value="1">Standard 8</ion-option>\n							<ion-option value="2">Standard 9</ion-option>\n							<ion-option value="3">Standard 10</ion-option>					\n						</ion-select>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Subject :</ion-label>				\n						<ion-select>\n							<ion-option value="1">Englsih</ion-option>\n							<ion-option value="2">Maths</ion-option>\n							<ion-option value="3">Science</ion-option>					\n						</ion-select>\n					</ion-item>\n				</div>\n				\n				<ion-row class="header-blueprint">\n					<ion-col>\n						Total Questions\n					</ion-col>\n					<ion-col text-right>\n						<ion-badge color="primary">50</ion-badge>\n					</ion-col>\n				</ion-row>\n				<ion-row class="ttl-marks">\n					<ion-col>\n						Total Marks\n					</ion-col>\n					<ion-col text-right>\n						<ion-badge color="primary">50</ion-badge>\n					</ion-col>\n				</ion-row>\n\n				<ion-row>\n					<ion-col text-center>\n						<ion-label>O - 1</ion-label>\n					</ion-col>\n					<ion-col>\n						<ion-input></ion-input>\n					</ion-col>\n					<ion-col text-center>\n						<ion-label>Out Of 96</ion-label>\n					</ion-col>\n				</ion-row>\n\n				<ion-row>\n					<ion-col text-center>\n						<ion-label>S - 2</ion-label>\n					</ion-col>\n					<ion-col>\n						<ion-input></ion-input>\n					</ion-col>\n					<ion-col text-center>\n						<ion-label>Out Of 12</ion-label>\n					</ion-col>\n				</ion-row>\n\n				<ion-row>\n					<ion-col text-center>\n						<ion-label>S - 3</ion-label>\n					</ion-col>\n					<ion-col>\n						<ion-input></ion-input>\n					</ion-col>\n					<ion-col text-center>\n						<ion-label>Out Of 8</ion-label>\n					</ion-col>\n				</ion-row>\n\n				<ion-row>\n					<ion-col text-center>\n						<ion-label>S - 5</ion-label>\n					</ion-col>\n					<ion-col>\n						<ion-input></ion-input>\n					</ion-col>\n					<ion-col text-center>\n						<ion-label>Out Of 7</ion-label>\n					</ion-col>\n				</ion-row>\n		\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n	<ion-row>\n		<ion-col>\n			<button ion-button block>Okay</button>\n		</ion-col>\n		<ion-col>\n			<button ion-button block color="danger" (click)="BlueprintcloseModal()">Cancel</button>\n		</ion-col>\n	</ion-row>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\blueprint\blueprint.modal\blueprint-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], BlueprintModalPage);
    return BlueprintModalPage;
}());

//# sourceMappingURL=blueprint-modal.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutusPage = (function () {
    function AboutusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aboutus',template:/*ion-inline-start:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\aboutus\aboutus.html"*/'<!--\n  Generated template for the AboutusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>About Us</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n	<ion-card>\n		<ion-card-header text-center>\n			Company Name\n		</ion-card-header>\n\n		<ion-card-content>\n			<ion-list>\n				<ion-item>\n					<ion-label>Description</ion-label>					\n				</ion-item>\n				<p>Building a website is, in many ways, an exercise of willpower. It’s tempting to get distracted by the bells and whistles of the design process, and forget all about creating compelling content. But it\'s that last part that\'s crucial to making inbound marketing work for your business.</p>\n			</ion-list>			\n		</ion-card-content>\n	</ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\aboutus\aboutus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutusPage);
    return AboutusPage;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_edit_settings_edit__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.openSettingedit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_edit_settings_edit__["a" /* SettingsEditPage */]);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Settings</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content>	\n\n	<ion-card>\n		<ion-card-header>\n			<div float-right class="edit-setting" (click)="openSettingedit();"><img src="./assets/imgs/edit.png"></div>\n		</ion-card-header>\n		\n		<ion-card-content>			\n			\n			<ion-row>\n				<ion-label>School Logo :</ion-label>			\n				<p class="school-logo"><img src="./assets/imgs/school.png"></p>\n			</ion-row>\n			<ion-row>\n				<ion-label>School Name :</ion-label>\n				<p>ABC School</p>\n			</ion-row>\n			<ion-row>\n				<ion-label>Address :</ion-label>\n				<p>421, Satyam Mall, Satellite, Ahmedabad, Gujarat, India.</p>\n			</ion-row>\n			<ion-row>\n				<ion-label>Phone No. :</ion-label>\n				<p> 9998979695 </p>\n			</ion-row>\n			\n		</ion-card-content>\n	</ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Camera } from '@ionic-native/camera';
/**
 * Generated class for the SettingsEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsEditPage = (function () {
    function SettingsEditPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    // public gallery() {
    // 	let cameraOptions = {
    // 		sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    // 		destinationType: this.camera.DestinationType.FILE_URI,
    // 		quality: 100,
    // 		targetWidth: 1000,
    // 		targetHeight: 1000,
    // 		encodingType: this.camera.EncodingType.JPEG,
    // 		correctOrientation: true
    // 	}
    // 	this.camera.getPicture(cameraOptions)
    // 		.then((file_uri) => {
    // 			this.imageSrc = file_uri;
    // 			console.log(this.imageSrc);
    // 		},
    // 		err => console.log(err));
    // }
    SettingsEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsEditPage');
    };
    SettingsEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings-edit',template:/*ion-inline-start:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\settings-edit\settings-edit.html"*/'<!--\n  Generated template for the SettingsEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar>\n		<ion-title>Setting Edit</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	<ion-card>\n		<ion-card-content>\n\n			<ion-label>School Logo :</ion-label>\n			<div class="gallery"><ion-icon ios="ios-images" md="md-images" (click)="gallery()"></ion-icon></div>\n			<p class="school-logo"><img src="./assets/imgs/school.png"></p>\n			<ion-label>School Name :</ion-label>				\n			<ion-input type="text" value="ABC School"></ion-input>\n			<ion-label>Address :</ion-label>\n			<ion-input type="text" value="421, Satyam Mall, Satellite"></ion-input> \n			<ion-label>City :</ion-label>\n			<ion-input type="text" value="Ahmedabad"></ion-input> \n			<ion-label>State :</ion-label>\n			<ion-input type="text" value="Gujarat"></ion-input> \n			<ion-label>country :</ion-label>\n			<ion-input type="text" value="India"></ion-input> \n			<ion-label>Phone No. :</ion-label>\n			<ion-input type="text" value="9998979695"></ion-input>	\n\n		</ion-card-content>\n	</ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n	<ion-row>\n		<ion-col>\n			<button ion-button block>Save</button>\n		</ion-col>\n	</ion-row>	\n\n</ion-footer>'/*ion-inline-end:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\settings-edit\settings-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SettingsEditPage);
    return SettingsEditPage;
}());

//# sourceMappingURL=settings-edit.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_aboutus_aboutus__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_question_paper_genrator_question_paper_genrator_module__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_blueprint_blueprint_module__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_edit_settings_edit__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { BlueprintPage } from '../pages/blueprint/blueprint';







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                // BlueprintPage,
                __WEBPACK_IMPORTED_MODULE_6__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_edit_settings_edit__["a" /* SettingsEditPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__pages_question_paper_genrator_question_paper_genrator_module__["a" /* QuestionPaperModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_blueprint_blueprint_module__["a" /* BlueprintModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                // BlueprintPage,
                __WEBPACK_IMPORTED_MODULE_6__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_settings_edit_settings_edit__["a" /* SettingsEditPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_question_paper_genrator_question_paper_genrator__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_blueprint_blueprint__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_aboutus_aboutus__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_question_paper_genrator_question_paper_genrator__["a" /* QuestionPaperGenratorPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Question Paper Genrator', img: '../assets/imgs/question.png', component: __WEBPACK_IMPORTED_MODULE_4__pages_question_paper_genrator_question_paper_genrator__["a" /* QuestionPaperGenratorPage */] },
            { title: 'Blueprint', img: "../assets/imgs/blueprint.png", component: __WEBPACK_IMPORTED_MODULE_5__pages_blueprint_blueprint__["a" /* BlueprintPage */] },
            { title: 'About us', img: "../assets/imgs/about.png", component: __WEBPACK_IMPORTED_MODULE_6__pages_aboutus_aboutus__["a" /* AboutusPage */] },
            { title: 'Settings', img: "../assets/imgs/settings.png", component: __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n        <div class="list-img" float-left><img [src]=p.img></div>\n      </button>      \n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    // origin: 'http://192.168.43.29:3000/api/'
    origin: 'http://192.168.11.2:3000/api/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPaperModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_paper_genrator__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__generate_modal_generate_modal__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var QuestionPaperModule = (function () {
    function QuestionPaperModule() {
    }
    QuestionPaperModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__question_paper_genrator__["a" /* QuestionPaperGenratorPage */], __WEBPACK_IMPORTED_MODULE_4__generate_modal_generate_modal__["a" /* GenerateModalPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild({ QuestionPaperGenratorPage: __WEBPACK_IMPORTED_MODULE_1__question_paper_genrator__["a" /* QuestionPaperGenratorPage */], GenerateModalPage: __WEBPACK_IMPORTED_MODULE_4__generate_modal_generate_modal__["a" /* GenerateModalPage */] })],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* Service */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__generate_modal_generate_modal__["a" /* GenerateModalPage */]]
        })
    ], QuestionPaperModule);
    return QuestionPaperModule;
}());

//# sourceMappingURL=question-paper-genrator.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlueprintModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blueprint__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blueprint_modal_blueprint_modal__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BlueprintModule = (function () {
    function BlueprintModule() {
    }
    BlueprintModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__blueprint__["a" /* BlueprintPage */], __WEBPACK_IMPORTED_MODULE_4__blueprint_modal_blueprint_modal__["a" /* BlueprintModalPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild({ BlueprintPage: __WEBPACK_IMPORTED_MODULE_1__blueprint__["a" /* BlueprintPage */], BlueprintModalPage: __WEBPACK_IMPORTED_MODULE_4__blueprint_modal_blueprint_modal__["a" /* BlueprintModalPage */] })],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* Service */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__blueprint_modal_blueprint_modal__["a" /* BlueprintModalPage */]]
        })
    ], BlueprintModule);
    return BlueprintModule;
}());

//# sourceMappingURL=blueprint.module.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map