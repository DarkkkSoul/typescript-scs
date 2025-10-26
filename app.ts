// Data types
let name: string = "darksoul"; //string
let age: number = 20; // number
let isGraduated: boolean = false;  // boolean
let skills: string[] = ['reactjs', 'typescript', 'backend']; // array
enum personalDetails {
    PHONENO = '7483XXXXXX',
    EMAIL = "maheshh.XXXXX1X08@gmail.com",
    GENDER = 'male',
}  // enum
let laptop: [string, number] = ['HP', 2024]; // tuple
let a; //any
let b: unknown; //unknown (type safety)
function returnData(): void {
    console.log('Printing Data');
} //void
let c: null;
let d: undefined;