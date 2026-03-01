import React from 'react'

function Landing() {
    return (
        <section id='landing'>
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Any game you could want</h1>
                    </div>
                    <form>
                        <input type='text' placeholder="Search here" className="search__bar"></input>
                    </form>
                </div>
            </header>
        </section>
    )
}

export default Landing
