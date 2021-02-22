"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var IncvalidQueue_1 = __importDefault(require("./IncvalidQueue"));
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(name) {
        var _this = _super.call(this) || this;
        _this._address = "";
        console.log("constructor init");
        _this.name = name;
        return _this;
    }
    Object.defineProperty(Company.prototype, "address", {
        get: function () {
            console.log("get address");
            return this._address;
        },
        set: function (address) {
            console.log("set address");
            if (this.isValidAddress(address)) {
                this._address = address;
            }
        },
        enumerable: false,
        configurable: true
    });
    Company.prototype.isValidAddress = function (address) {
        var reg = /[^省]+省[^市]+市+[^区]+区/;
        var flag = reg.test(address);
        if (!flag) {
            this.pushIn("请输入合法地址");
        }
        return flag;
    };
    return Company;
}(IncvalidQueue_1.default));
exports.default = Company;
