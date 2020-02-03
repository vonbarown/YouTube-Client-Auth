import React, { useState, useEffect } from 'react'
import { apiKey } from '../../secrets'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './SearchPage.css'

const Search = () => {

    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])

    const searchVideo = async () => {
        try {
            const { data: { items } } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${search}&key=${apiKey}`)
            setResults(items)
        } catch (error) {
            console.log(error);

        }
    }


    useEffect(() => {
        searchVideo()
    })

    return (
        <div className='search' >

            <form onSubmit={e => e.preventDefault()} className='searchForm'>
                <input type="text" name='search' placeholder='   search...' onChange={e => setSearch(e.target.value)} className='inputBar' />
                <input type="submit" value='search' onClick={searchVideo()} className='searchButton' />
            </form>
            {results.length === 0 ? <div className='nullResults'>No Search Results Yet!, Please submit a search above</div> :
                (<div className='display'>
                    {
                        results ? results.map(el => {
                            return (

                                <div className='thumbnail'>
                                    <Link id={el.id.videoId} to={`/video/${el.id.videoId}`} params={{ testValue: "hello" }} className='thumbnail'>
                                        <img src={el.snippet.thumbnails.medium.url} alt="thumbnail" />
                                        <p>{el.snippet.title}</p>
                                    </Link>
                                </div>

                            )
                        }) : null
                    }
                </div>
                )}
        </div>
    )
}
export default Search