import React, {useEffect, useState} from 'react'
import Game from "./ui/Game.jsx";
import {fetchGame} from "../services/api.jsx";

function Featured() {

    const [games, setGames] = useState([]);
    useEffect(() => {
        const load = async () => {
            const data = await fetchGame({query: "batman"})
            setGames(data)
        }
        load()
    }, []);
    return (
        <div className="featured">
            {games.map(game => (
                <Game
                    key={game.gameID}
                    title={game.external}
                    price={game.cheapest}
                    image={game.thumb}
                />
            ))}
            <Game/>
            <Game/>
        </div>
    )
}

export default Featured
