import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const getPokemonByName = async (name: string) => {
    const { data } = await axiosInstance.get(`/pokemon/${name}`);
    return data;
}