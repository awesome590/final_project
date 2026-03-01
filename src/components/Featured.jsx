import React, {useEffect, useState} from 'react'
import Game from "./ui/Game.jsx";
import {fetchSearch} from "../services/api.jsx";

function Featured() {

    const [games, setGames] = useState([]);
    useEffect(() => {
        const load = async () => {
            const data = await fetchSearch()
            setGames(data)
        }
        load()
    }, []);
    return (
        <div className="featured">
            {games.slice(0,12).map(game => (
                <Game
                    key={game.dealID}
                    title={game.external}
                    price={game.cheapest}
                    image={game.thumb}
                />
            ))}
        </div>
    )
}

export default Featured
