"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Company_1 = __importDefault(require("./Company"));
var Dragon_1 = __importDefault(require("./Dragon"));
var com = new Company_1.default("ALIBABA");
com.address = "HANGZHOU";
console.log(com.address);
if (com.queue.length) {
    console.log(com.queue.join(","));
}
var dg = new Dragon_1.default("HUACHENGYANG", 100, {
    attack: function () {
        console.log(this.name + " is attacking");
    },
    sleep: function () {
        console.log(this.name + " is sleeping");
    },
});
dg.attck();
dg.sleep();
