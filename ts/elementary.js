"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var school_1 = require("./school");
var Elementary = /** @class */ (function (_super) {
    __extends(Elementary, _super);
    function Elementary(name, adress, directorName, schoolType, atsemName) {
        var _this = _super.call(this, name, adress, directorName, schoolType) || this;
        _this.atsemName = atsemName;
        return _this;
    }
    Elementary.prototype.schoolPresentation = function () {
        console.log("L'atsem de votre enfant se nomme ".concat(this.atsemName));
    };
    return Elementary;
}(school_1.School));
var elementarySchool = new Elementary("Ecole Jean de la Fontaine", "Rue des noisetiers à Toulouse", "Mr Eddy Donmarcel", "Primaire", "Camille Onette");
elementarySchool.schoolPresentation();
