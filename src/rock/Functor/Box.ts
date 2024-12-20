/**
 * l'idee c'est qu'
 * Elle encapsule une valeur (value) de type T.
 * Elle fournit une méthode map qui permet d’appliquer
 * une transformation à cette valeur tout en créant une nouvelle instance de Box avec la valeur transformée.
 */

/**
 * En bref : Un functor est une abstraction pour manipuler des données de manière sûre, immuable et composable.
 */
class Box<T> {
    private readonly value: T;

    constructor(value: T) {
        this.value = value;
    }

    map<U>(fn: (value: T) => U): Box<U> {
        return new Box<U>(fn(this.value));
    }

    getValue(): T {
        return this.value;
    }
}

export const mainBoxFonctor = () =>{
    const box = new Box<number>(10);

    const incrementedBox = box.map((x) => x + 1);
    console.log(incrementedBox.getValue()); // 11

    const doubledBox = incrementedBox.map((x) => x * 2);
    console.log(doubledBox.getValue()); // 22

    const box2 = new Box<string>('2')
    console.log(box2.map((x)=>x + "0").getValue()); // 22
}
