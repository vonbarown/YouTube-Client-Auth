import React, { useState } from 'react'
import VideoPlayer from '../../Components/Video';
import './videopage.css'

const VideoPage = (props) => {

    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [videoInfo, setVideoInfo] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { name, comment };
        setVideoInfo([...videoInfo, newItem])
    };


    return (
        <div className='videoPage'>
            <div className='videoPlayer'>
                <VideoPlayer videoId={props.match.params.id} />
            </div>
            <form className='videoForm' onSubmit={handleSubmit} required>
                <div className='inputs'>
                    <label htmlFor="name">Name</label> <br />
                    <input name='name' type="text" placeholder=' Name..' onChange={e => setName(e.target.value)} required className='inputBar' value={name} />
                </div>
                <div className='inputs'>
                    <label htmlFor="comment">Comment</label> <br />
                    <input name='comment' type="text" placeholder='  ...' onChange={e => setComment(e.target.value)} required className='inputBar' value={comment} />
                </div>

                <button>Submit</button>
            </form>

            {
                <div className='comments'>
                    <ul>
                        {
                            videoInfo.map(el => {
                                return (
                                    <li>
                                        <p className='username'>{el.name}</p>
                                        <p className='comment'>{el.comment}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            }
        </div>
    )
}

export default VideoPage