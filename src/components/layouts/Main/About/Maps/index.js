import { Box } from '@mui/material';
import React from 'react';

function Maps() {
    return (
        <>
            <Box
                sx={{
                    width: 'auto',
                    height: 'auto',
                    backgroundColor: 'inherit',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            />
        </>
    );
}

export default Maps;
