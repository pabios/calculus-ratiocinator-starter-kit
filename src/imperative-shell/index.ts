import { increment } from "../functional-core/functions";
import {mainPOO} from "../comporaison-poo-fp/with-poo/Person";
import {mainFP} from "../comporaison-poo-fp/with-fp/Person.ts";
import {mainBenchmark} from "../comporaison-poo-fp/benchmark.ts";
import {mainBoxFonctor} from "../rock/Functor/Box.ts";
import {mainPriceFunction} from "../rock/Functor/Price.ts";

const counterObj = Object.freeze({ kikoo: { value: 1 } });
counterObj.kikoo.value = 2;

const counter: number = 1;
const counter2: number = increment(counter);

console.assert(counter === 1);
console.assert(increment(counter) === 2);

console.log(counter2);

console.log("🚀 Exécution en POO :");
mainPOO();

console.log("🚀 Exécution en FP :");
mainFP();

console.log("🚀 Hello Fonctor");

mainBoxFonctor();
mainPriceFunction()
// mainBenchmark();
