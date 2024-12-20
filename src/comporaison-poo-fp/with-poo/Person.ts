class Personne {
    private nom: string;
    private prenom: string;
    private age: number;
    private mana: number;

    constructor(nom: string, prenom: string, age: number, mana: number) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.mana = mana;
    }

    incrementerAge() {
        this.age++;
    }

    reduireMana(valeur: number) {
        this.mana -= valeur;
    }

    afficherInfos() {
        return `${this.prenom} ${this.nom}, age: ${this.age}, mana: ${this.mana}`;
    }
}

export function mainPOO() {
    const personne = new Personne("balde", "isma", 25, 100);
    personne.incrementerAge();
    personne.reduireMana(10);
    console.log(personne.afficherInfos());
}
