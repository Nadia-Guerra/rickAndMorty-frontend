export interface Character {
    id: number,
    name: string,
    status: 'Alive'|'Dead'|'unknown',
    species: string,
    type: string,
    gender: 'Female'|'Male'|'Genderless'|'unknown',
    image: string,
    origin: {
        name: string;
    };
    
    location: {
        name: string;
    };
    
}
export interface CharacterResponse {
    info:{
        count: number,
        pages: number,
        next: string | null,
        prev: string | null,
    }
    results: Character[];
}