import React from 'react'
import './portfolio.css'
import IMG7 from '../../assets/Mockups/sippers.png'
import IMG8 from '../../assets/Mockups/inmotion.png'
import IMG9 from '../../assets/Mockups/smf-fitness.png'
import IMG10 from '../../assets/Mockups/watchit.png'
import IMG5 from '../../assets/Mockups/salon99mockup.png'





const data1 = [
    {
        id: 4,
        image: IMG7,
        title: 'Sippers Coffeehouse',
        github: 'https://github.com',
        demo: 'https://dribble.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Salon 99',
        github: 'https://github.com',
        demo: 'https://dribble.com'
    },
]

const data2 = [
    {
        id: 1,
        image: IMG7,
        title: 'Sippers Coffeehouse',
        github: 'https://github.com',
        casestudy: '/SippersCoffeehouse'
    },
    {
        id: 2,
        image: IMG8,
        title: 'In Motion',
        github: 'https://github.com',
        demo: 'https://dribble.com'
    },
    {
        id: 3,
        image: IMG9,
        title: 'Stephanie Marie Fitness App',
        github: 'https://github.com',
        demo: 'https://dribble.com'
    },
    {
        id: 4,
        image: IMG10,
        title: 'Watch It',
        github: 'https://github.com',
        demo: 'https://dribble.com'
    },
    
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data1.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' rel="noreferrer">Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>

            < div className="container portfolio__container">
                {
                    data2.map(({ id, image, title, github, casestudy }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' rel="noreferrer">Github</a>
                                    <a href={casestudy} className='btn btn-primary' target='_blank' rel="noreferrer">Read Case Study</a>
                                </div>
                            </article>
                        )
                    })
                }


            </div >
        </section >
    )
}

export default Portfolio