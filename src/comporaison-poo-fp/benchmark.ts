import { mainPOO } from "./with-poo/Person";
import { mainFP } from "./with-fp/Person";

 function benchmark(label: string, callback: () => void) {
    const start = performance.now();
    callback();
    const end = performance.now();
    console.log(`${label} a pris ${(end - start).toFixed(2)} ms`);
}

export function mainBenchmark() {
    // const iterations = 1_000_000;
    const iterations = 30;

    console.log("🚀 Benchmark entre POO et FP :");

    benchmark("POO", () => {
        for (let i = 0; i < iterations; i++) {
            mainPOO();
        }
    });

    benchmark("FP", () => {
        for (let i = 0; i < iterations; i++) {
            mainFP();
        }
    });
}
