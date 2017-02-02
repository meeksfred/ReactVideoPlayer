import React from 'react';

const VideoListItem = ({video}) => {
  // const video = props.video; w/ (props) above. Same as the syntax shown.. more ES6;
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
   );
};

export default VideoListItem;
