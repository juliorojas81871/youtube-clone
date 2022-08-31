import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./index";
import {fetchFromAPI} from '../utils/fetchFromAPI'
import { useParams } from "react-router-dom";

function SearchFeed() {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      // to extract the data from the api due to being asynchronous function
      .then((data) => setVideos(data.items))
      // will recall searchTerm everytime it is called
  },[searchTerm])

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result for: <span style={{ color: "#FC1503" }}>
          {searchTerm}
        </span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed