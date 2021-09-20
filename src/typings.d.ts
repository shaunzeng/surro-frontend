// Allow .json files imports
declare module '*.json' {
    const value: any;
    export default value;
}
