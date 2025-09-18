import { useQuery } from "@tanstack/react-query"


async function fetchCoins() {
    const API_KEY = process.env.COINSTATS_API_KEY;
    const url = 'https://openapiv1.coinstats.app/coins';
    const options = {
        method: 'GET', 
        headers: {'X-API-KEY': API_KEY}, 
        body: undefined
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.coins;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export function useCoins() {
    return useQuery({
        queryKey:['coins'],
        queryFn: fetchCoins
    })
}