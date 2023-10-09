"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
var School = /** @class */ (function () {
    function School(name, adress, directorName, schoolType) {
        this.name = name;
        this.adress = adress;
        this.directorName = directorName;
        this.schoolType = schoolType;
    }
    School.prototype.greet = function () {
        console.log("".concat(this.schoolType, " ").concat(this.name, " vous souhaite la bienvenue, elle est situ\u00E9e ").concat(this.adress, " et son directeur est ").concat(this.directorName, " \r\t"));
    };
    return School;
}());
exports.School = School;
