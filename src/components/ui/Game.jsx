import React from 'react'
function Game() {
    const Game =({title, price, image}) => {
        return (
            <div className="game__card">
                <img
                    src={image}
                    alt={title}
                    className="game__image"
                />
                <p className="game__title">{title}</p>
                <p className="game__price">{price}</p>
            </div>
        )
    }
}

export default Game
