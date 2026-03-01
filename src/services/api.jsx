export const API_CONFIG = {
    BASE_URL: "https://www.cheapshark.com/api/1.0"
}


export const fetchSearch = async ({query} = {}) => {
    const endpoint = query
        ? `${API_CONFIG.BASE_URL}/games?title=${encodeURIComponent(query)}`
        : `${API_CONFIG.BASE_URL}/deals`
    const response = await fetch(endpoint);
    const data = await response.json();

    const seen = new Set()
    const unique = data.filter(item => {
        if (seen.has(item.gameID)) return false
        seen.add(item.gameID)
        return true
    })
    return unique;
}