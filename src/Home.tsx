import React from 'react'

export default function Home() {
    return (
        <section className='hero is-fullheight'>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <figure>
                        <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} />
                    </figure>
                </div>
            </div>
        </section>
    )
}
