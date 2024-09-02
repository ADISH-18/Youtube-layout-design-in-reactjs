import React, { useState } from 'react';
import './VideoGrid.css';

const VideoGrid = ({ videos }) => {
    const [playingVideoId, setPlayingVideoId] = useState(null);

    const handleVideoClick = (videoId) => {
        setPlayingVideoId(videoId);
    };

    return (
        <div className="video-grid">
            {videos.map((video) => (
                <div
                    key={video.id}
                    className={`video-container ${playingVideoId === video.id ? 'playing' : ''}`}
                    onClick={() => handleVideoClick(video.id)}
                >
                    {playingVideoId === video.id ? (
                        <video src={video.url} controls autoPlay className="video-playing" />
                    ) : (
                        <img src={video.thumbnail} alt={video.title} className="thumbnail" />
                    )}
                    <div className="video-info">
                        <div className="video-title">{video.title}</div>
                        <div className="video-description">{video.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VideoGrid;
