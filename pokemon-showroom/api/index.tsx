import { AxiosResponse } from "axios";
import AxiosPokemonClient from "./pokemon/axiosPokemonClient";

export const getPokemonById= (id: Number) : Promise<AxiosResponse> => {
    return AxiosPokemonClient.get("/pokemon/"+ id);
}

export const getPokemon= (limit: Number) => {
    return AxiosPokemonClient.get("/pokemon?limit=" + limit);
}

export const getPokemonByName= (name: string) => {
    return AxiosPokemonClient.get("/pokemon/"+ name);
}