class PriceFunctor {
     readonly value: number;
     constructor(value: number) {
        this.value = value;
    }

     mapPerso(fn: (value: number) => number): PriceFunctor {
        const newValue = fn(this.value);
        return new PriceFunctor(newValue);
    }
}

export const mainPriceFunction = ()=>{
    const price = new PriceFunctor(100);

    const prixDuClient =
         price
            .mapPerso((value) => value + 5) // bon ajoute 5 euro \\
            .mapPerso((value)=>  value + 0.5) // applique une reduc \\
             .mapPerso((value) => value * 0.2); // et pour finir applique la tva \\

    // ce qui est cool
    const prixEncore = price.mapPerso((value) => value +5);
    console.log(`prix avec etape : `+prixEncore.value); // --- 105

    const prixEncore2 = price.mapPerso(value => value + 0.2);
    console.log(`prix avec etapte 2 : `+prixEncore2.value);



    console.log(`log 1: `+prixDuClient.value); // --s--- 120
    console.log(`Price initial: `+price.value); // devrai etre toujour a100
}
