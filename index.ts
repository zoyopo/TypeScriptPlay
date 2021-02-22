import Company from "./Company";
import Dragon from "./Dragon";
const com = new Company("ALIBABA");
com.address = "HANGZHOU";
console.log(com.address);

if (com.queue.length) {
  console.log(com.queue.join(","));
}

const dg = new Dragon("HUACHENGYANG", 100, {
  attack: function() {
    console.log(`${this.name} is attacking`);
  },
  sleep:function() {
    console.log(`${this.name} is sleeping`);
  },
});

dg.attck();
dg.sleep();
