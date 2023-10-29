import { AxiosResponse } from "axios";
import { ScryfallResponse } from "../model/magic";
import http from "../constants/http";

export const getCards = async (
  cardNames: string[]
): Promise<AxiosResponse<ScryfallResponse>> => {
  return http.get<ScryfallResponse>("/cards/search", {
    params: {
      q: cardNames.join(" OR "),
    },
  });
};
