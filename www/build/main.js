webpackJsonp([16],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tasks_dry_tasks_dry_tasks__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tasks_grocery_tasks_grocery_tasks__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tasks_home_tasks_home_tasks__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Tasks_laundry_tasks_laundry_tasks__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Tasks_mail_tasks_mail_tasks__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Tasks_recycling_tasks_recycling_tasks__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Tasks_shoes_tasks_shoes_tasks__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Activity = (function () {
    function Activity(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Activity.prototype.dry = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__Tasks_dry_tasks_dry_tasks__["a" /* DryTasks */]);
    };
    Activity.prototype.grocery = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__Tasks_grocery_tasks_grocery_tasks__["a" /* GroceryTasks */]);
    };
    Activity.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__Tasks_home_tasks_home_tasks__["a" /* HomeTasks */]);
    };
    Activity.prototype.laundry = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__Tasks_laundry_tasks_laundry_tasks__["a" /* LaundryTasks */]);
    };
    Activity.prototype.mail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__Tasks_mail_tasks_mail_tasks__["a" /* MailTasks */]);
    };
    Activity.prototype.recycling = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__Tasks_recycling_tasks_recycling_tasks__["a" /* RecyclingTasks */]);
    };
    Activity.prototype.shoes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__Tasks_shoes_tasks_shoes_tasks__["a" /* ShoesTasks */]);
    };
    Activity = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activity',template:/*ion-inline-start:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\activity\activity.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="../../assets/imgs/M_and_J_logo_2_cream.png" class="navbarLogo" />\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="activity" class="card-background-page">\n\n  <button ion-button block color="main" (click)="dry()">\n\n    <ion-card>\n\n      <img src="../../assets/icon/Dry_Cleaning.jpg" />\n\n    </ion-card>\n\n  </button>\n\n\n\n  <button ion-button block color="main" (click)="grocery()">\n\n  <ion-card>\n\n    <img src="../../assets/icon/Grocery_Shopping.jpg" />\n\n  </ion-card>\n\n  </button>\n\n\n\n  <button ion-button block color="main" (click)="home()">\n\n  <ion-card>\n\n    <img src="../../assets/icon/Home_Cleaning.jpg" />\n\n  </ion-card>\n\n  </button>\n\n\n\n  <button ion-button block color="main" (click)="laundry()">\n\n  <ion-card>\n\n    <img src="../../assets/icon/Laundry_Ironing.jpg" />\n\n  </ion-card>\n\n  </button>\n\n\n\n  <button ion-button block color="main" (click)="mail()">\n\n  <ion-card>\n\n    <img src="../../assets/icon/Mail_Management.jpg" />\n\n  </ion-card>\n\n  </button>\n\n\n\n  <button ion-button block color="main" (click)="recycling()">\n\n  <ion-card>\n\n    <img src="../../assets/icon/Recycling_Management.jpg" />\n\n  </ion-card>\n\n  </button>\n\n\n\n  <button ion-button block color="main" (click)="shoes()">\n\n  <ion-card>\n\n    <img src="../../assets/icon/Shoes_Care.jpg" />\n\n  </ion-card>\n\n  </button>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\activity\activity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Activity);
    return Activity;
}());

//# sourceMappingURL=activity.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DryTasks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DryTasks = (function () {
    function DryTasks(navCtrl, navParams, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.newItem = '';
        this.dryItems = this.firebaseProvider.getShoppingItems('/activity/dryItems/');
    }
    DryTasks.prototype.addItem = function () {
        this.firebaseProvider.addItem(this.newItem, '/activity/dryItems/');
    };
    DryTasks.prototype.removeItem = function (id) {
        this.firebaseProvider.removeItem(id, '/activity/dryItems/');
    };
    DryTasks = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dry-tasks',template:/*ion-inline-start:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\activity\Tasks\dry-tasks\dry-tasks.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="../../assets/imgs/M_and_J_logo_2_cream.png" class="navbarLogo" />\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="dry">\n\n  <ion-row>\n\n    <ion-col col-9>\n\n      <ion-item>\n\n        <ion-input type="text" [(ngModel)]="newItem" placeholder="New item"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button (click)="addItem()">Add!</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let item of dryItems | async">\n\n      <ion-item>\n\n        {{ item.$value }}\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="danger" icon-only (click)="removeItem(item.$key)"><ion-icon name="trash"></ion-icon></button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\activity\Tasks\dry-tasks\dry-tasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], DryTasks);
    return DryTasks;
}());

//# sourceMappingURL=dry-tasks.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroceryTasks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroceryTasks = (function () {
    function GroceryTasks(navCtrl, navParams, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.newItem = '';
        this.groceryItems = this.firebaseProvider.getShoppingItems('/activity/groceryItems/');
    }
    GroceryTasks.prototype.addItem = function () {
        this.firebaseProvider.addItem(this.newItem, '/activity/groceryItems/');
    };
    GroceryTasks.prototype.removeItem = function (id) {
        this.firebaseProvider.removeItem(id, '/activity/groceryItems/');
    };
    GroceryTasks = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-grocery-tasks',template:/*ion-inline-start:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\activity\Tasks\grocery-tasks\grocery-tasks.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="../../assets/imgs/M_and_J_logo_2_cream.png" class="navbarLogo" />\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="grocery">\n\n  <ion-row>\n\n    <ion-col col-9>\n\n      <ion-item>\n\n        <ion-input type="text" [(ngModel)]="newItem" placeholder="New item"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button (click)="addItem()">Add!</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let item of groceryItems | async">\n\n      <ion-item>\n\n        {{ item.$value }}\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="danger" icon-only (click)="removeItem(item.$key)"><ion-icon name="trash"></ion-icon></button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\activity\Tasks\grocery-tasks\grocery-tasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], GroceryTasks);
    return GroceryTasks;
}());

//# sourceMappingURL=grocery-tasks.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTasks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeTasks = (function () {
    function HomeTasks(navCtrl, navParams, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.newItem = '';
        this.homeItems = this.firebaseProvider.getShoppingItems('/activity/homeItems/');
    }
    HomeTasks.prototype.addItem = function () {
        this.firebaseProvider.addItem(this.newItem, '/activity/homeItems/');
    };
    HomeTasks.prototype.removeItem = function (id) {
        this.firebaseProvider.removeItem(id, '/activity/homeItems/');
    };
    HomeTasks = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-tasks',template:/*ion-inline-start:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\activity\Tasks\home-tasks\home-tasks.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="../../assets/imgs/M_and_J_logo_2_cream.png" class="navbarLogo" />\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="home">\n\n  <ion-row>\n\n    <ion-col col-9>\n\n      <ion-item>\n\n        <ion-input type="text" [(ngModel)]="newItem" placeholder="New item"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button (click)="addItem()">Add!</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let item of homeItems | async">\n\n      <ion-item>\n\n        {{ item.$value }}\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="danger" icon-only (click)="removeItem(item.$key)"><ion-icon name="trash"></ion-icon></button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\activity\Tasks\home-tasks\home-tasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], HomeTasks);
    return HomeTasks;
}());

//# sourceMappingURL=home-tasks.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaundryTasks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LaundryTasks = (function () {
    function LaundryTasks(navCtrl, navParams, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.newItem = '';
        this.laundryItems = this.firebaseProvider.getShoppingItems('/activity/laundryItems/');
    }
    LaundryTasks.prototype.addItem = function () {
        this.firebaseProvider.addItem(this.newItem, '/activity/laundryItems/');
    };
    LaundryTasks.prototype.removeItem = function (id) {
        this.firebaseProvider.removeItem(id, '/activity/laundryItems/');
    };
    LaundryTasks = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-laundry-tasks',template:/*ion-inline-start:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\activity\Tasks\laundry-tasks\laundry-tasks.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="../../assets/imgs/M_and_J_logo_2_cream.png" class="navbarLogo" />\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="laundry">\n\n  <ion-row>\n\n    <ion-col col-9>\n\n      <ion-item>\n\n        <ion-input type="text" [(ngModel)]="newItem" placeholder="New item"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button (click)="addItem()">Add!</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let item of laundryItems | async">\n\n      <ion-item>\n\n        {{ item.$value }}\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="danger" icon-only (click)="removeItem(item.$key)"><ion-icon name="trash"></ion-icon></button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\activity\Tasks\laundry-tasks\laundry-tasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], LaundryTasks);
    return LaundryTasks;
}());

//# sourceMappingURL=laundry-tasks.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailTasks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailTasks = (function () {
    function MailTasks(navCtrl, navParams, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.newItem = '';
        this.mailItems = this.firebaseProvider.getShoppingItems('/activity/mailItems/');
    }
    MailTasks.prototype.addItem = function () {
        this.firebaseProvider.addItem(this.newItem, '/activity/mailItems/');
    };
    MailTasks.prototype.removeItem = function (id) {
        this.firebaseProvider.removeItem(id, '/activity/mailItems/');
    };
    MailTasks = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mail-tasks',template:/*ion-inline-start:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\activity\Tasks\mail-tasks\mail-tasks.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="../../assets/imgs/M_and_J_logo_2_cream.png" class="navbarLogo" />\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="mail">\n\n  <ion-row>\n\n    <ion-col col-9>\n\n      <ion-item>\n\n        <ion-input type="text" [(ngModel)]="newItem" placeholder="New item"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button (click)="addItem()">Add!</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let item of mailItems | async">\n\n      <ion-item>\n\n        {{ item.$value }}\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="danger" icon-only (click)="removeItem(item.$key)"><ion-icon name="trash"></ion-icon></button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n`/*ion-inline-end:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\activity\Tasks\mail-tasks\mail-tasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], MailTasks);
    return MailTasks;
}());

//# sourceMappingURL=mail-tasks.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecyclingTasks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecyclingTasks = (function () {
    function RecyclingTasks(navCtrl, navParams, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.newItem = '';
        this.recyclingItems = this.firebaseProvider.getShoppingItems('/activity/recyclingItems/');
    }
    RecyclingTasks.prototype.addItem = function () {
        this.firebaseProvider.addItem(this.newItem, '/activity/recyclingItems/');
    };
    RecyclingTasks.prototype.removeItem = function (id) {
        this.firebaseProvider.removeItem(id, '/activity/recyclingItems/');
    };
    RecyclingTasks = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recycling-tasks',template:/*ion-inline-start:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\activity\Tasks\recycling-tasks\recycling-tasks.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="../../assets/imgs/M_and_J_logo_2_cream.png" class="navbarLogo" />\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="recycling">\n\n  <ion-row>\n\n    <ion-col col-9>\n\n      <ion-item>\n\n        <ion-input type="text" [(ngModel)]="newItem" placeholder="New item"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button (click)="addItem()">Add!</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let item of recyclingItems | async">\n\n      <ion-item>\n\n        {{ item.$value }}\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="danger" icon-only (click)="removeItem(item.$key)"><ion-icon name="trash"></ion-icon></button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n`/*ion-inline-end:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\activity\Tasks\recycling-tasks\recycling-tasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], RecyclingTasks);
    return RecyclingTasks;
}());

//# sourceMappingURL=recycling-tasks.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoesTasks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoesTasks = (function () {
    function ShoesTasks(navCtrl, navParams, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.newItem = '';
        this.shoesItems = this.firebaseProvider.getShoppingItems('/activity/shoesItems/');
    }
    ShoesTasks.prototype.addItem = function () {
        this.firebaseProvider.addItem(this.newItem, '/activity/shoesItems/');
    };
    ShoesTasks.prototype.removeItem = function (id) {
        this.firebaseProvider.removeItem(id, '/activity/shoesItems/');
    };
    ShoesTasks = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shoes-tasks',template:/*ion-inline-start:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\activity\Tasks\shoes-tasks\shoes-tasks.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="../../assets/imgs/M_and_J_logo_2_cream.png" class="navbarLogo" />\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="shoes">\n\n  <ion-row>\n\n    <ion-col col-9>\n\n      <ion-item>\n\n        <ion-input type="text" [(ngModel)]="newItem" placeholder="New item"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button (click)="addItem()">Add!</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let item of shoesItems | async">\n\n      <ion-item>\n\n        {{ item.$value }}\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="danger" icon-only (click)="removeItem(item.$key)"><ion-icon name="trash"></ion-icon></button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n`/*ion-inline-end:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\activity\Tasks\shoes-tasks\shoes-tasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], ShoesTasks);
    return ShoesTasks;
}());

//# sourceMappingURL=shoes-tasks.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Login = (function () {
    function Login(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    Login.prototype.login = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    Login.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__welcome_welcome__["a" /* Welcome */], {}, { animate: false });
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\login\login.html"*/`<ion-content padding id="login">\n\n\n\n  <section>\n\n    <img src="../../assets/imgs/M_and_J_logo_2_cream.png"/>\n\n\n\n    <ion-list id="login-list">\n\n\n\n      <ion-item>\n\n        <ion-label fixed>Username</ion-label>\n\n        <ion-input type="text" value=""></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>Password</ion-label>\n\n        <ion-input type="password" value=""></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <button ion-button block color="main" (click)="login()">Login</button>\n\n    <button ion-button block color="main" (click)="back()">Back</button>\n\n  </section>\n\n</ion-content>\n\n\n\n\n\n`/*ion-inline-end:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Register = (function () {
    function Register(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Register.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Register');
    };
    Register.prototype.next = function () {
    };
    Register.prototype.back = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__welcome_welcome__["a" /* Welcome */], {}, { animate: false });
    };
    Register = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\register\register.html"*/`<ion-content padding id="register">\n\n\n\n  <section>\n\n    <img src="../../assets/imgs/M_and_J_logo_2_cream.png" class="logo" />\n\n\n\n    <ion-list id="login-list">\n\n\n\n      <ion-item>\n\n        <ion-label fixed>Username</ion-label>\n\n        <ion-input type="text" value=""></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label fixed>Password</ion-label>\n\n        <ion-input type="password" value=""></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <button ion-button block color="main" (click)="next()">Next</button>\n\n    <button ion-button block color="main" (click)="back()">Back</button>\n\n  </section>\n\n</ion-content>\n\n\n\n`/*ion-inline-end:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Register);
    return Register;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Miracle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the MiraclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Miracle = (function () {
    function Miracle(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Miracle = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-miracle',template:/*ion-inline-start:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\miracle\miracle.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="../../assets/imgs/M_and_J_logo_2_cream.png" class="navbarLogo" />\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="miracle">\n\n\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\miracle\miracle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Miracle);
    return Miracle;
}());

//# sourceMappingURL=miracle.js.map

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/activity/Tasks/dry-tasks/dry-tasks.module": [
		427,
		15
	],
	"../pages/activity/Tasks/grocery-tasks/grocery-tasks.module": [
		428,
		14
	],
	"../pages/activity/Tasks/home-tasks/home-tasks.module": [
		429,
		13
	],
	"../pages/activity/Tasks/laundry-tasks/laundry-tasks.module": [
		430,
		12
	],
	"../pages/activity/Tasks/mail-tasks/mail-tasks.module": [
		431,
		11
	],
	"../pages/activity/Tasks/recycling-tasks/recycling-tasks.module": [
		432,
		10
	],
	"../pages/activity/Tasks/shoes-tasks/shoes-tasks.module": [
		433,
		9
	],
	"../pages/activity/activity.module": [
		426,
		8
	],
	"../pages/login/login.module": [
		434,
		7
	],
	"../pages/menu/menu.module": [
		435,
		0
	],
	"../pages/miracle/miracle.module": [
		436,
		6
	],
	"../pages/newprofil/newprofil.module": [
		437,
		5
	],
	"../pages/parameters/parameters.module": [
		438,
		2
	],
	"../pages/profile/profile.module": [
		439,
		1
	],
	"../pages/register/register.module": [
		440,
		4
	],
	"../pages/welcome/welcome.module": [
		441,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 195;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, app, firebase) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.firebase = firebase;
        this.hide = false;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.hideMenu = function () {
        this.hide = !this.hide;
    };
    HomePage.addLeading = function (n) {
        return (n < 10) ? ("0" + n) : n;
    };
    HomePage.getDateNextVisit = function () {
        var tmp = new Date();
        var date = new Date(tmp.getTime());
        var monthNumber = this.addLeading(date.getMonth() + 1);
        document.getElementById("dateNextVisit").innerHTML =
            date.getDate().toFixed() + "/" +
                monthNumber + "/" +
                date.getFullYear().toFixed();
        document.getElementById("hourNextVisit").innerHTML = date.getHours().toFixed() + ":" + this.addLeading(date.getMinutes());
    };
    HomePage.getUserName = function () {
        document.getElementById("userName").innerHTML = "Mary";
    };
    HomePage.getMaajarName = function () {
        document.getElementById("maajarName").innerHTML = "Jarvis";
    };
    HomePage.prototype.ionViewDidLoad = function () {
        HomePage_1.getDateNextVisit();
        HomePage_1.getMaajarName();
        HomePage_1.getUserName();
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\home\home.html"*/`<link href="https://fonts.googleapis.com/css?family=Overlock" rel="stylesheet">\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="../../assets/imgs/M_and_J_logo_2_cream.png" class="navbarLogo" />\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="home">\n\n  <div text-center class="dashboardTextTop">Dear <span id="userName"></span></div>\n\n  <div>\n\n    <div text-center class="dashboardTextTitleVisit">Next visit</div>\n\n    <div text-center class="dashboardTextTitleMaajar">Your Maajar</div>\n\n    <div class="dashboardContentNextVisit">\n\n      <div text class="dashboardTextContent" id="dateNextVisit"></div>\n\n      <div text class="dashboardTextContent" id="hourNextVisit"></div>\n\n    </div>\n\n    <div class="dashboardContentMaajar">\n\n      <div text-center class="dashboardTextContent" id="maajarName"></div>\n\n    </div>\n\n    <div>\n\n      <button ion-button id="yourActivitiesButton" class="dashboardButtons" (click)="hideMenu()">\n\n        <div text-center class="dashboardButtonsText">Check your activities</div>\n\n      </button>\n\n      <ion-list *ngIf="hide">\n\n        <ion-item class="dropdownButtons">\n\n          List Item 1\n\n        </ion-item>\n\n        <ion-item class="dropdownButtons">\n\n          List Item 2\n\n        </ion-item>\n\n        <ion-item class="dropdownButtons">\n\n          List Item 3\n\n        </ion-item>\n\n      </ion-list>\n\n      <button ion-button id="setNewDateButton" class="dashboardButtons">\n\n        <div text-center class="dashboardButtonsText">Change date</div>\n\n      </button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseProvider = (function () {
    function FirebaseProvider(afd) {
        this.afd = afd;
    }
    FirebaseProvider.prototype.getShoppingItems = function (path) {
        return this.afd.list(path);
    };
    FirebaseProvider.prototype.addItem = function (name, path) {
        this.afd.list(path).push(name);
    };
    FirebaseProvider.prototype.removeItem = function (id, path) {
        this.afd.list(path).remove(id);
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_activity__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__miracle_miracle__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(navParams) {
        // Set the active tab based on the passed index from menu.ts
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__activity_activity__["a" /* Activity */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__miracle_miracle__["a" /* Miracle */];
        this.myIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\tabs\tabs.html"*/`<ion-tabs color="base">\n\n  <ion-tab [root]="tab1Root" tabIcon="add"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabIcon="chatboxes"></ion-tab>\n\n</ion-tabs>\n\n`/*ion-inline-end:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Newprofil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Newprofil = (function () {
    function Newprofil(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Newprofil.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Newprofil');
    };
    Newprofil.prototype.skip = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    Newprofil = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newprofil',template:/*ion-inline-start:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\newprofil\newprofil.html"*/`<ion-header>\n\n  <ion-navbar>\n\n    <img ion-right src="../../assets/imgs/M_and_J_logo_2_cream.png" class="navbarLogo" />\n\n    <button ion-button color="base" class="skip" (click)="skip()">Skip</button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="newprofil">\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\newprofil\newprofil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Newprofil);
    return Newprofil;
}());

//# sourceMappingURL=newprofil.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(304);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_newprofil_newprofil__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_activity_activity__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_activity_Tasks_dry_tasks_dry_tasks__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_activity_Tasks_grocery_tasks_grocery_tasks__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_activity_Tasks_home_tasks_home_tasks__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_activity_Tasks_laundry_tasks_laundry_tasks__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_activity_Tasks_mail_tasks_mail_tasks__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_activity_Tasks_recycling_tasks_recycling_tasks__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_activity_Tasks_shoes_tasks_shoes_tasks__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_miracle_miracle__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_database_deprecated__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_firebase_firebase__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var firebaseConfig = {
    apiKey: "AIzaSyAnS2ElF5x2Fo-Z_KIe0avWhktzSR-ElHY",
    authDomain: "maryandjarvis-b2612.firebaseapp.com",
    databaseURL: "https://maryandjarvis-b2612.firebaseio.com",
    projectId: "maryandjarvis-b2612",
    storageBucket: "maryandjarvis-b2612.appspot.com",
    messagingSenderId: "726450579712"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* Register */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_newprofil_newprofil__["a" /* Newprofil */],
                __WEBPACK_IMPORTED_MODULE_18__pages_miracle_miracle__["a" /* Miracle */],
                __WEBPACK_IMPORTED_MODULE_10__pages_activity_activity__["a" /* Activity */],
                __WEBPACK_IMPORTED_MODULE_11__pages_activity_Tasks_dry_tasks_dry_tasks__["a" /* DryTasks */],
                __WEBPACK_IMPORTED_MODULE_12__pages_activity_Tasks_grocery_tasks_grocery_tasks__["a" /* GroceryTasks */],
                __WEBPACK_IMPORTED_MODULE_13__pages_activity_Tasks_home_tasks_home_tasks__["a" /* HomeTasks */],
                __WEBPACK_IMPORTED_MODULE_14__pages_activity_Tasks_laundry_tasks_laundry_tasks__["a" /* LaundryTasks */],
                __WEBPACK_IMPORTED_MODULE_15__pages_activity_Tasks_mail_tasks_mail_tasks__["a" /* MailTasks */],
                __WEBPACK_IMPORTED_MODULE_16__pages_activity_Tasks_recycling_tasks_recycling_tasks__["a" /* RecyclingTasks */],
                __WEBPACK_IMPORTED_MODULE_17__pages_activity_Tasks_shoes_tasks_shoes_tasks__["a" /* ShoesTasks */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_database_deprecated__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_22_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/activity/activity.module#ActivityModule', name: 'Activity', segment: 'activity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity/Tasks/dry-tasks/dry-tasks.module#DryTasksModule', name: 'DryTasks', segment: 'dry-tasks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity/Tasks/grocery-tasks/grocery-tasks.module#GroceryTasksModule', name: 'GroceryTasks', segment: 'grocery-tasks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity/Tasks/home-tasks/home-tasks.module#HomeTasksModule', name: 'HomeTasks', segment: 'home-tasks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity/Tasks/laundry-tasks/laundry-tasks.module#LaundryTasksModule', name: 'LaundryTasks', segment: 'laundry-tasks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity/Tasks/mail-tasks/mail-tasks.module#MailTasksModule', name: 'MailTasks', segment: 'mail-tasks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity/Tasks/recycling-tasks/recycling-tasks.module#RecyclingTasksModule', name: 'RecyclingTasks', segment: 'recycling-tasks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activity/Tasks/shoes-tasks/shoes-tasks.module#ShoesTasksModule', name: 'ShoesTasks', segment: 'shoes-tasks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/miracle/miracle.module#MiracleModule', name: 'Miracle', segment: 'miracle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/newprofil/newprofil.module#SignupModule', name: 'Newprofil', segment: 'newprofil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/parameters/parameters.module#ParametersPageModule', name: 'ParametersPage', segment: 'parameters', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterModule', name: 'Register', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomeModule', name: 'Welcome', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* Register */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_newprofil_newprofil__["a" /* Newprofil */],
                __WEBPACK_IMPORTED_MODULE_18__pages_miracle_miracle__["a" /* Miracle */],
                __WEBPACK_IMPORTED_MODULE_10__pages_activity_activity__["a" /* Activity */],
                __WEBPACK_IMPORTED_MODULE_11__pages_activity_Tasks_dry_tasks_dry_tasks__["a" /* DryTasks */],
                __WEBPACK_IMPORTED_MODULE_12__pages_activity_Tasks_grocery_tasks_grocery_tasks__["a" /* GroceryTasks */],
                __WEBPACK_IMPORTED_MODULE_13__pages_activity_Tasks_home_tasks_home_tasks__["a" /* HomeTasks */],
                __WEBPACK_IMPORTED_MODULE_14__pages_activity_Tasks_laundry_tasks_laundry_tasks__["a" /* LaundryTasks */],
                __WEBPACK_IMPORTED_MODULE_15__pages_activity_Tasks_mail_tasks_mail_tasks__["a" /* MailTasks */],
                __WEBPACK_IMPORTED_MODULE_16__pages_activity_Tasks_recycling_tasks_recycling_tasks__["a" /* RecyclingTasks */],
                __WEBPACK_IMPORTED_MODULE_17__pages_activity_Tasks_shoes_tasks_shoes_tasks__["a" /* ShoesTasks */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_firebase_firebase__["a" /* FirebaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(56);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Cassandre\Documents\maryandjarvis\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n\n`/*ion-inline-end:"C:\Users\Cassandre\Documents\maryandjarvis\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(144);
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
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Welcome = (function () {
    function Welcome(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Welcome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Welcome');
    };
    Welcome.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
    };
    Welcome.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* Register */]);
    };
    Welcome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\welcome\welcome.html"*/`<ion-content padding id="welcome">\n\n\n\n  <section>\n\n    <img src="../../assets/imgs/M_and_J_logo_2_cream.png" class="logo"/>\n\n    <button ion-button block color="main" (click)="login()">Login</button>\n\n    <button ion-button block color="main" (click)="register()">Register</button>\n\n  </section>\n\n</ion-content>\n\n`/*ion-inline-end:"C:\Users\Cassandre\Documents\maryandjarvis\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Welcome);
    return Welcome;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

},[282]);
//# sourceMappingURL=main.js.map