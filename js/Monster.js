"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Monster = /** @class */ (function () {
    function Monster(name, blood, actionQueue) {
        this.blood = 100;
        this.actionQueue = {};
        this.name = name;
        this.actionQueue = actionQueue;
        this.blood = blood;
    }
    Monster.prototype.onAction = function (event) {
        this.actionQueue[event] && this.actionQueue[event].call(this);
    };
    return Monster;
}());
exports.default = Monster;
