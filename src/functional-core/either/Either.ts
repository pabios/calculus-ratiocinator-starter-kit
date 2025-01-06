export abstract class Either<L, R> {
    abstract isLeft(): boolean;
    abstract isRight(): boolean;
    abstract getLeft(): L | null;
    abstract getRight(): R | null;

    static left<L, R>(value: L): Either<L, R> {
        return new Left(value);
    }

    static right<L, R>(value: R): Either<L, R> {
        return new Right(value);
    }
}

class Left<L, R> extends Either<L, R> {
    constructor(private value: L) {
        super();
    }

    isLeft(): boolean {
        return true;
    }

    isRight(): boolean {
        return false;
    }

    getLeft(): L | null {
        return this.value;
    }

    getRight(): R | null {
        return null;
    }
}

class Right<L, R> extends Either<L, R> {
    constructor(private value: R) {
        super();
    }

    isLeft(): boolean {
        return false;
    }

    isRight(): boolean {
        return true;
    }

    getLeft(): L | null {
        return null;
    }

    getRight(): R | null {
        return this.value;
    }
}
