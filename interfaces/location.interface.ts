export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
}

export interface LocationResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    }
    results:Location[];

}