import { AxiosResponse } from "axios";
import AxiosPokemonClient from "./pokemon/axiosPokemonClient";

export const getPokemonById= (id: number) : Promise<AxiosResponse> => {
    return AxiosPokemonClient.get(`/pokemon/${id}`);
}

export const getPokemon= (limit: number, offset: number) => {
    return AxiosPokemonClient.get(`/pokemon?limit=${limit}&offset=${offset}`);
}

export const getPokemonByName= (name: string) => {
    return AxiosPokemonClient.get(`/pokemon/${name}`);
}


export const getTypeByName= (name: string) => {
    return AxiosPokemonClient.get(`/type/${name}`);
}

export const getMoveByName = (name: string) => {
    return AxiosPokemonClient.get(`/move/${name}`);
}