webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPaperGenratorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
 * Generated class for the QuestionPaperGenratorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionPaperGenratorPage = (function () {
    function QuestionPaperGenratorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QuestionPaperGenratorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-question-paper-genrator',template:/*ion-inline-start:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\question-paper-genrator\question-paper-genrator.html"*/'<!--\n  Generated template for the QuestionPaperGenratorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Question-paper-genrator</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n	<ion-card>\n		<ion-card-content>\n			<ion-list radio-group>\n				<ion-list-header>\n					Select Standard\n				</ion-list-header>\n\n				<div class="scroll">\n					<ion-item>\n						<ion-label>Standard 1</ion-label>\n						<ion-radio checked="true" value="1"></ion-radio>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Standard 2</ion-label>\n						<ion-radio value="2"></ion-radio>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Standard 3</ion-label>\n						<ion-radio value="3"></ion-radio>\n					</ion-item>\n				</div>\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-content>\n			<ion-list>\n				<ion-list-header>\n					Select Chepter\n					<ion-badge float-right color="primary">3</ion-badge>\n				</ion-list-header>\n\n				<div class="scroll">\n					<ion-item>\n						<ion-label>Chapter 1</ion-label>\n						<ion-checkbox color="dark"></ion-checkbox>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Chapter 2</ion-label>\n						<ion-checkbox color="dark"></ion-checkbox>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Chapter 3</ion-label>\n						<ion-checkbox color="dark"></ion-checkbox>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Chapter 4</ion-label>\n						<ion-checkbox color="dark"></ion-checkbox>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Chapter 5</ion-label>\n						<ion-checkbox color="dark"></ion-checkbox>\n					</ion-item>\n				</div>\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-content>\n			<ion-list>\n				<ion-list-header>\n					Select Topics\n					<ion-badge float-right color="primary">3</ion-badge>\n				</ion-list-header>\n\n				<div class="scroll">\n					<ion-item>\n						<ion-label>Topic 1</ion-label>\n						<ion-checkbox color="dark"></ion-checkbox>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Topic 2</ion-label>\n						<ion-checkbox color="dark"></ion-checkbox>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Topic 3</ion-label>\n						<ion-checkbox color="dark"></ion-checkbox>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Topic 4</ion-label>\n						<ion-checkbox color="dark"></ion-checkbox>\n					</ion-item>\n\n					<ion-item>\n						<ion-label>Topic 5</ion-label>\n						<ion-checkbox color="dark"></ion-checkbox>\n					</ion-item>\n				</div>\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-row>\n		<ion-col col-5>\n			<button ion-button block>Generate</button>\n		</ion-col>\n		<ion-col col-7>\n			<button ion-button block>Generate with ans</button>\n		</ion-col>\n	</ion-row>\n	\n</ion-content>'/*ion-inline-end:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\question-paper-genrator\question-paper-genrator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], QuestionPaperGenratorPage);
    return QuestionPaperGenratorPage;
}());

//# sourceMappingURL=question-paper-genrator.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlueprintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
    function BlueprintPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BlueprintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blueprint',template:/*ion-inline-start:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\blueprint\blueprint.html"*/'<!--\n  Generated template for the BlueprintPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Blueprint</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n	<ion-card>\n		<ion-card-content>\n			<ion-list>\n				<ion-list-header>\n					<span class="list-head">Listing</span>\n					<div float-right><ion-icon ios="ios-add-circle" md="md-add-circle" color="primary"></ion-icon></div>			\n				</ion-list-header>\n\n				<ion-row class="listing-header">\n					<ion-col>\n						<strong> Name </strong>\n					</ion-col>\n					<ion-col>\n						<strong> Marks</strong>\n					</ion-col>\n				</ion-row>\n				\n				<ion-item-sliding>\n					<ion-item>\n						<ion-row>\n							<ion-col>\n								Name 1\n							</ion-col>\n							<ion-col>\n								Marks 1\n							</ion-col>\n						</ion-row>\n					</ion-item>						\n					<ion-item-options side="right">\n					<button ion-button>View</button>\n					</ion-item-options>\n				</ion-item-sliding>\n				<ion-item-sliding>\n					<ion-item>\n						<ion-row>\n							<ion-col>\n								Name 2\n							</ion-col>\n							<ion-col>\n								Marks 2\n							</ion-col>\n						</ion-row>\n					</ion-item>						\n					<ion-item-options side="right">\n					<button ion-button color="primary">View</button>\n					</ion-item-options>\n				</ion-item-sliding>\n				<ion-item-sliding>\n					<ion-item>\n						<ion-row>\n							<ion-col>\n								Name 3\n							</ion-col>\n							<ion-col>\n								Marks 3\n							</ion-col>\n						</ion-row>\n					</ion-item>						\n					<ion-item-options side="right">\n					<button ion-button color="primary">View</button>\n					</ion-item-options>\n				</ion-item-sliding>\n				<ion-item-sliding>\n					<ion-item>\n						<ion-row>\n							<ion-col>\n								Name 4\n							</ion-col>\n							<ion-col>\n								Marks 4\n							</ion-col>\n						</ion-row>\n					</ion-item>						\n					<ion-item-options side="right">\n					<button ion-button color="primary">View</button>\n					</ion-item-options>\n				</ion-item-sliding>\n\n			\n\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\blueprint\blueprint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], BlueprintPage);
    return BlueprintPage;
}());

//# sourceMappingURL=blueprint.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AboutusPage);
    return AboutusPage;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_edit_settings_edit__ = __webpack_require__(199);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(191);
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
 * Generated class for the SettingsEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsEditPage = (function () {
    function SettingsEditPage(navCtrl, navParams, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
    }
    SettingsEditPage.prototype.gallery = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: 100,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.camera.getPicture(cameraOptions)
            .then(function (file_uri) {
            _this.imageSrc = file_uri;
            console.log(_this.imageSrc);
        }, function (err) { return console.log(err); });
    };
    SettingsEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsEditPage');
    };
    SettingsEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings-edit',template:/*ion-inline-start:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\settings-edit\settings-edit.html"*/'<!--\n  Generated template for the SettingsEditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar>\n		<ion-title>Setting Edit</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	<ion-card>\n		<ion-card-content>\n\n			<ion-label>School Logo :</ion-label>\n			<p class="school-logo"><img src="./assets/imgs/school.png"></p>\n			<!-- <button ion-button (click)="gallery()">Browse</button> -->\n			<ion-icon ios="ios-images" md="md-images" (click)="gallery()"></ion-icon>\n			<ion-label>School Name :</ion-label>				\n			<ion-input type="text" value="ABC School"></ion-input>\n			<ion-label>Address :</ion-label>\n			<ion-input type="text" value="421, Satyam Mall, Satellite"></ion-input> \n			<ion-label>City :</ion-label>\n			<ion-input type="text" value="Ahmedabad"></ion-input> \n			<ion-label>State :</ion-label>\n			<ion-input type="text" value="Gujarat"></ion-input> \n			<ion-label>country :</ion-label>\n			<ion-input type="text" value="India"></ion-input> \n			<ion-label>Phone No. :</ion-label>\n			<ion-input type="text" value="9998979695"></ion-input>\n\n			<ion-row>\n				<ion-col>\n					<button ion-button block>Save</button>\n				</ion-col>\n			</ion-row>		\n\n		</ion-card-content>\n	</ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\pages\settings-edit\settings-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], SettingsEditPage);
    return SettingsEditPage;
}());

//# sourceMappingURL=settings-edit.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_question_paper_genrator_question_paper_genrator__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_blueprint_blueprint__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_aboutus_aboutus__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_edit_settings_edit__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_question_paper_genrator_question_paper_genrator__["a" /* QuestionPaperGenratorPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_blueprint_blueprint__["a" /* BlueprintPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_edit_settings_edit__["a" /* SettingsEditPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    backButtonText: ''
                }, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_question_paper_genrator_question_paper_genrator__["a" /* QuestionPaperGenratorPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_blueprint_blueprint__["a" /* BlueprintPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_edit_settings_edit__["a" /* SettingsEditPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_question_paper_genrator_question_paper_genrator__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_blueprint_blueprint__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_aboutus_aboutus__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(198);
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
            { title: 'Question Paper Genrator', img: "../assets/imgs/question.png", component: __WEBPACK_IMPORTED_MODULE_4__pages_question_paper_genrator_question_paper_genrator__["a" /* QuestionPaperGenratorPage */] },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n        <div class="list-img" float-left><img [src]=p.img></div>\n      </button>      \n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\yash.shah\Desktop\yash\ionic\queGenApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map