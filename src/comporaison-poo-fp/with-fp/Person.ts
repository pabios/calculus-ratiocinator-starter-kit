export type Personne = {
    nom: string;
    prenom: string;
    age: number;
    mana: number;
};

export const creerPersonne = (
    nom: string,
    prenom: string,
    age: number,
    mana: number
): Personne => ({ nom, prenom, age, mana });

export const creerPersonnePasPure = (nom:string,prenom:string,age:number,mana:number)=>{
    console.log('Pas pure')
    return {
        nom,prenom,age,mana
    }
}

export const incrementerAge = (personne: Personne): Personne => ({
    ...personne,
    age: personne.age + 1,
});
export const incrementerAgePasPure = (personne: Personne): void => {
    personne.age++; // objet original modifier
};


export const reduireMana = (personne: Personne, valeur: number): Personne => ({
    ...personne,
    mana: personne.mana - valeur,
});

export const reduireManaPasPure = (personne: Personne, valeur: number): void => {
    personne.mana -= valeur; //  objet original modifier
};

export const afficherInfos = (personne: Personne): string =>
    `${personne.prenom} ${personne.nom}, Age: ${personne.age}, mana: ${personne.mana}`;

export const afficherInfosPasPure = (personne: Personne): void => {
    console.log(`${personne.prenom} ${personne.nom}, age: ${personne.age}, mana: ${personne.mana}`);
};

/*****************************************************************
 *  un peu de reduce
 **************************************************************/

const helloReduceManaNonPure=(personnes: Personne[]):string=>{

    const manaTotal = personnes.reduce((total, personne) => total + personne.mana, 0);

    return `Mana total : ${manaTotal}`; // => 0 + 100 + 80 + 50
}
const helloReducePlusVieux = (personnes: Personne[]): string => {
    const personnePlusAgee = personnes.reduce((plusAgee, personne) => {
        return personne.age > plusAgee.age ? personne : plusAgee;
    });

    return `Personne la plus agee : ${personnePlusAgee.prenom} ${personnePlusAgee.nom}`;
}

//*******************************************************************
export const estImpair = (nombre: number): number | null => {
    return nombre % 2 !== 0 ? nombre : null;
};

export const estImpairImpure = (nombre: number): number | null => {
    if(nombre % 2 !== 0){
        return nombre;
    }
    // return  ? nombre : null;
};

//*******************************EXO 2 RECURSSIVITE ***************************************************
export const traverseNonPure =( tab: number[], i: number = 0) => {
    if (i < tab.length){
        console.log(tab[i]);
        return traverseNonPure(tab,i+1);
    }
}

export const traversePure =( tab: number[], i: number = 0) => {
     if (i >= tab.length){
         return [];
     }
     return [tab[i],...traversePure(tab,i+1)]
}

//*******************************************************************

export function mainFP() {
    let personne = creerPersonne("balde", "isma", 25, 100);

    personne = incrementerAge(personne);
    personne = reduireMana(personne, 10);

    console.log(afficherInfos(personne)); // non pure du coup. ou return personne pour Pure

    //
    const personnes = [
        creerPersonne("Balde", "Isma", 25, 100),
        creerPersonne("Diallo", "Mariama", 30, 80),
        creerPersonne("Camara", "Ibrahima", 20, 50),
    ];
    console.log(helloReduceManaNonPure(personnes))
    console.log(helloReducePlusVieux(personnes))



    //*******************************PETIT EXO ***************************************************

    const tableau = [1, 2, 3, 4, 5];
    let rep = tableau.map(estImpair);
    let resultatsImpair = tableau.map(estImpair).filter((valeur) => valeur !== null);
    let repFilter = tableau.filter(estImpair);
    let repSom = repFilter.reduce((acc,cur)=> acc + cur,0)


    console.log([
        repFilter,
        resultatsImpair
    ]);
    //*******************************EXO 2 RECURSSIVITE ***************************************************
    console.log(`traverse pure` +
        traversePure(tableau)
    );

}
