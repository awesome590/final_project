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
        <section className="featured">
            {games
                .slice(0,12)
                .map(game => (
                <Game
                    key={game.dealID}
                    title={game.title}
                    price={game.salePrice}
                    image={game.thumb}
                />
            ))}
        </section>
    )
}

export default Featured
