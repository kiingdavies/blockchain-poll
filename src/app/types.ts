export interface Poll {
    id: number; // 12
    question: string; // which days of week you like most
    results: number[]; // [0,0,0,0,5,7,2]
    options: string[]; // ['monday','Tuesday', 'wednesday'....]
    thumbnail: string; // https;//image.png
    voted: boolean;
}

export interface Voter {
    id: string; // 0xJhdgfkeh
    voted: number[]; // [12]
}
