import * as React from 'react';

import {
    Box,
    Typography,
} from '@mui/material';

export const ProjectSubtitle: React.FunctionComponent = (props) => {
    return (
        <React.Fragment>
            <Typography fontSize="1.2rem" fontStyle="oblique">
                <Box sx={{
                    marginBottom: 3,
                    marginTop: -2,
                }}>
                    { props.children }
                </Box>
            </Typography>
        </React.Fragment>
    );
}

export default ProjectSubtitle;
