export interface Poll extends PollForm { // extends means it will also have the values from PollForm
    id: number; // 12
    results: number[]; // [0,0,0,0,5,7,2]
    voted: boolean;
}

export interface PollForm {
    question: string; // which days of week you like most
    options: string[]; // ['monday','Tuesday', 'wednesday'....]
    thumbnail: string; // https;//image.png
}

export interface PollVote {
    id: number;
    vote: number;
}

export interface Voter {
    id: string; // 0xJhdgfkeh
    voted: number[]; // [12]
}
