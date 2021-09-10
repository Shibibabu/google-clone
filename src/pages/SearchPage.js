import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import Search from "./Search";

import DescriptionIcon from "@material-ui/icons/Description";
import SearchIcon from "@material-ui/icons/Search";
//   import ImageIcon from '@material-ui/icons/Apps';
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Apps";
import ImageIcon from "@material-ui/icons/Image";
import MoreVertIcon from "@material-ui/icons/MoreVert";
//https://developers.google.com/custom-search/v1/using_rest
//get a key by selecting project name in google firebase
//AIzaSyBgfZZYSN36wPP5GTyQJpgWyttcFsX8APQ

//go to https://cse.google.com/cse/create/new

//type www.google.com then Edit Search engine-> Setup ->ON Full tab access copy search engine ID
//Search engine ID
//713578749e8328dc6

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //LIVE API CALL
  const { data } = useGoogleSearch(term);
  // console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          ></img>
        </Link>

        <div className="searchPage_headerBody">
          <Search hiddenButton />
          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/description">News</Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/image">Images</Link>
              </div>
              <div className="searchPage_option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage_option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>

            <div className="searchPage_optionsRight">
              <div className="searchPage_option">
                <Link to="/setting">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation?.formattedTotalResults} results (
            {data?.searchInformation?.formattedSearchTime}) for {term}
          </p>

          {data?.items?.map((item) => {
            return (
              <div className="searchPage_result">
                <a className="searchPage_resultLink" href={item?.link}>
                 
                    {
                      item.pagemap?.cse_image?.length > 0 &&
                      item.pagemap?.cse_image[0]?.src && (
                        <img
                          className="searchPage_resultImage"
                          src={
                            item.pagemap?.cse_image?.length > 0 &&
                            item.pagemap?.cse_image[0]?.src
                          }
                          alt=""
                        />
                      )
                    }
                  
                    {item?.displayLink}
                
                </a>
                <a className="searchPage_resultTitle" href={item?.link}>
                  <h2>{item.title}</h2>
                </a>
                <p className="searchResult_snippet">{item.snippet}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
