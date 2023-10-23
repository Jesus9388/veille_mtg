import { AxiosResponse } from "axios";
import { Card } from "../model/magic";
import http from "../constants/http";

export const getCards = async (cardNames: string[]): Promise<AxiosResponse<Card[]>> => {
    return http.get<Card[]>("/cards", {
        params: {
            name: cardNames.join("|")
        }
    });
}