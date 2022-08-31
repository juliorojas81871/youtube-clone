import React from 'react'
import { Box, CircularProgress, Stack } from '@mui/material';

// sometime the videos get loaded in as null and need more time to get the data 
function Loader() {
    <Box minHeight="95vh">
        <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
            <CircularProgress />
        </Stack>
    </Box>
}

export default Loader