import * as React from 'react';

import {
    Box,
    Typography,
} from '@mui/material';

export const ProjectSubtitle: React.FunctionComponent = (props) => {
    return (
        <React.Fragment>
            <Box sx={{
                marginBottom: 3,
                marginTop: -2,
            }}>
                <Typography fontSize="1.2rem" fontStyle="oblique">
                    { props.children }
                </Typography>
            </Box>
        </React.Fragment>
    );
}

export default ProjectSubtitle;
