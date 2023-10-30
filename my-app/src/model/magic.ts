export interface Card {
    name: string;
    legalities: {
        [key: string]: string;
    }
    multiVerseId?: number;
    image_uris?: {
        [key: string]: string;
    }
}

export interface ScryfallResponse {
    object: string;
    total_cards: number;
    has_more: boolean;
    data: Card[];
}