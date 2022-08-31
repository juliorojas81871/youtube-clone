import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

function VideoCard({ video: { id: { videoId }, snippet } }) {
    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
            <Link to={videoId ? `/youtube-clone/video/${videoId}` : `/video/cV2gBU6hKfY` }>
                {/* diplay thumbnail in video */}
                <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
                    sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
                />
            </Link>
            <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
            <Link to={videoId ? `/youtube-clone/video/${videoId}` : demoVideoUrl } >
                {/* display video title */}
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/youtube-clone/channel/${snippet?.channelId}` : demoChannelUrl} >
                {/* display channel title */}
                <Typography variant="subtitle2" color="gray">
                    {snippet?.channelTitle || demoChannelTitle}
                <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
            </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard