import React from 'react'
import {FaQuestion} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AboutIcon = () => {
    return (
        <div className='about-link'>
            <Link to={{
                pathname : '/about',
                search : '?sort=name',
                hash : '#abhi'
            }}>

            <FaQuestion size={30} />
            </Link>
        </div>
    )
}

export default AboutIcon
