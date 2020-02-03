import React, { useState, useEffect } from 'react'
import { apiKey } from '../../secret'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { receiveVideos } from '../../Store/actions/videoActions'
import './SearchPage.css'
import { connect } from 'react-redux'

const Search = (props) => {

    const [search, setSearch] = useState('')

    const searchVideo = async () => {
        try {
            const { data: { items } } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${search}&key=${apiKey}`)
            props.receiveVideos(items)
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className='search' >

            <form onSubmit={e => e.preventDefault()} className='searchForm'>
                <input type="text" name='search' placeholder='   search...' onChange={e => setSearch(e.target.value)} className='inputBar' />
                <input type="submit" value='search' onClick={() => searchVideo()} className='searchButton' />
            </form>
            {props.videos.length === 0 ? <div className='nullResults'>No Search Results Yet!, Please submit a search above</div> :
                (<div className='display'>
                    {
                        props.videos ? props.videos.map(el => {
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


const mapStateToProps = (state) => {
    return {
        videos: state.videoReducer.videos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveVideos: data => dispatch(receiveVideos(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)