import React, { useState } from 'react'
import "./Search.css"
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import {useStateValue} from "../StateProvider";
import { actionTypes } from '../reducer';

function Search({ hiddenButton = false }) {

    const [input, setInput] = useState("");
    const history = useHistory();
    const [{},dispatch]=useStateValue();

    const search = (e) => {
        // preventing refreshing
        e.preventDefault();
        // do something with input
        // console.log("you clicked",input);
        // setInput("")

        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input
        })
        //re direct to search age when enetered search
        history.push('/search')


    }
   
    return (
        <form className="search">
            <div className="search_input">

                <SearchIcon className="search_inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {/* button below search */}
            {!hiddenButton ? (<div className="search_buttons">
                <Button type="submit" onClick={search} variant="outline">Google Search</Button>
                <Button variant="outline">I'm feeling lucky</Button>
            </div>) : (<div className="search_buttonsHidden">
                <Button type="submit" onClick={search} variant="outline">Google Search</Button>
                <Button variant="outline">I'm feeling lucky</Button>
            </div>)}

        </form>
    )
}

export default Search
