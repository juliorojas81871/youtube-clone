import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Videos, SideBar } from "./index";
import {fetchFromAPI} from '../utils/fetchFromAPI'

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      // to extract the data from the api due to being asynchronous function
      .then((data) => setVideos(data.items))
      // will recall selectedCategory everytime it is called
  },[selectedCategory])

  return (
    <Stack sx={{flexDirection: { sx: "column", md: "row"}}}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory = {setSelectedCategory} />
        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: "#fff" }}>
            &copy; { currentYear } Julio C Rojas
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>
            videos
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed