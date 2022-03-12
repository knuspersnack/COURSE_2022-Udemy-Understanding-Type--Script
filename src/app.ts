type AddFn = (a: number, b: number) => number;

interface Named {
    readonly name: string;
    outputName?: string;
}