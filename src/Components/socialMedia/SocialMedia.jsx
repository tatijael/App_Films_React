import React from 'react'
import { FaImdb, FaTwitter, FaInstagram, FaFacebookF, FaLink } from "react-icons/fa"


const SocialMedia = ({linksIds}) => {
    
    const {facebook_id, imdb_id, instagram_id, twitter_id, homepage} = linksIds;

    return (
        <div>
        {imdb_id && (
            <a href={`https://www.imdb.com/title/${imdb_id}`}>
                <FaImdb className="icon-social"/>
            </a>
        )}
        {facebook_id && (
            <a href={`https://www.facebook.com/${facebook_id}`}>
                <FaFacebookF className="icon-social"/>
            </a>
        )}
        {instagram_id && (
            <a href={`https://www.instagram.com/${instagram_id}`}>
                <FaInstagram className="icon-social"/>
            </a>
        )}
        {twitter_id && (
            <a href={`https://www.instagram.com/${twitter_id}`}>
                <FaTwitter className="icon-social"/>
            </a>
        )}
         {homepage && (
        <a href={homepage}>
          <FaLink  className="icon-social"/>
        </a>
      )}
        </div>
    )
}

export default SocialMedia
