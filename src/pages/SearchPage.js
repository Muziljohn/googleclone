import React from 'react';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Search from '../components/Search';
import './SearchPage.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import ArticleIcon from '@mui/icons-material/Article';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const SearchPage = () => {

    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data);
    return (
        <div className='searchPage'>
            <div className='Search__header'>

                <Link to='/'>
                    <img className="logo" src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt="Logo" />
                </Link>
                <div className='searchPage__headerBody'>
                    <Search hideButtons />
                    <div className='searchPage__option'>
                        <div className='SearchPage__optionsLeft'>

                            <div className='searchPage__options'>
                                <SearchIcon />
                                <Link to='/'>All</Link>

                            </div>
                            <div className='searchPage__options'>
                                <ImageIcon />
                                <Link to='/'>Images</Link>
                            </div>
                            <div className='searchPage__options'>
                                <ArticleIcon />
                                <Link to='/'>News</Link>
                            </div>
                            <div className='searchPage__options'>
                                <SlideshowIcon />
                                <Link to='/'>Videos</Link>
                            </div>
                            <div className='searchPage__options'>
                                <MoreVertIcon />
                                <Link to='/'>More</Link>
                            </div>

                        </div>

                        <div className='SearchPage__optionRight'>
                            <div className='searchPage__options'>
                                <Link to='/'>Tools</Link>
                            </div>
                            <div className='searchPage__options'>
                                <Link to='/'>Settings</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {term && (
                <div className='searchPage__results'>
                    <p className='archPage__resultCoun'>
                        About {data?.searchInformation.formattedTotalResults} results
                        ({data?.searchInformation.formattedSearchTime} seconds)
                        for {term}           </p>
                    {data?.items.map(item => (
                        <div className='searchPage__result'>
                            <a href={item.link}>
                                {item.displayLink}
                            </a>
                            <a className='searchPage__resultTitle' href={item.link} >
                                <h2>{item.title}</h2>
                            </a>
                            <p className='searchPage__resultSnippet'>
                                {item.snippet}
                            </p>

                        </div>
                    ))}
                </div>
            )}



        </div >
    );

}

export default SearchPage;
