import React from 'react'
function Game() {
    const Game =({title, price, image}) => (
        <div>
            <img src={image} alt={title} />
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
    return (
        <div className="game__card">
            <img
                src="https://cdn.fanatical.com/production/product/400x225/105f34ca-7757-47ad-953e-7df7f016741e.jpeg"
                alt="Lego Batman The Video Game"
                className="game__image"
            />
            <div className="game__title">
                <p>Lego Batman The Video Game</p>
            </div>
            <div className="game__price">
                <p>$19.99</p>
            </div>
        </div>
    )
}

export default Game
