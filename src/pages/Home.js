import React from 'react'
import { Link } from 'react-router-dom'
import { Banner } from '../components/Banner'
import FeaturedRooms from '../components/FeaturedRooms'
import { Hero } from '../components/Hero'
import Services from '../components/Services'

export const Home = () => {
    return (
        <React.Fragment>
        <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        </React.Fragment>
    )
}
