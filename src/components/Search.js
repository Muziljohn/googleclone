import React, { useState } from 'react';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Search.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const Search = ({ hideButtons = false }) => {
    const [{ }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history = useNavigate();
    const search = (e) => {
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history('./Search');
    }
    return (
        <form>
            <div className='Search__input'>
                <SearchOutlinedIcon />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicOutlinedIcon />
            </div>
            {!hideButtons ? (
                <div className='Search__button'>
                    <Button onClick={search} variant="outlined" type='Submit'>Google Search</Button>
                    <Button variant="outlined">I'm feeling Lucky</Button>
                </div>)
                : (
                    <div className='Search__button hide'>
                        <Button onClick={search} variant="outlined" type='Submit'>Google Search</Button>
                        <Button variant="outlined">I'm feeling Lucky</Button>
                    </div>)
            }
        </form>
    );

}

export default Search;
