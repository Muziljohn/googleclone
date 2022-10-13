import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';
import Search from '../components/Search';

const Home = () => {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__header__right">
                    <Link to='/About'>About</Link>
                    <Link to='/Store'>Store</Link>

                </div>
                <div className="home__header__left">
                    <Link to='/Gmail'>Gmail</Link>
                    <Link to='/Images'>Images</Link>
                    <AppsIcon />
                    <PersonIcon />
                </div>

            </div>

            <div className="home__body">
                <img alt="Logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
                <Search />

            </div>
        </div>

    )

}

export default Home;
