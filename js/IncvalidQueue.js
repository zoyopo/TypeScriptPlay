"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InvalidQueue = /** @class */ (function () {
    function InvalidQueue() {
        this.queue = [];
    }
    InvalidQueue.prototype.pushIn = function (invalidMsg) {
        this.queue.push(invalidMsg);
    };
    return InvalidQueue;
}());
exports.default = InvalidQueue;
