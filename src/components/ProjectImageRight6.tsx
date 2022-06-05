import * as React from 'react';
import { FunctionComponent } from 'react';

import {
    Paper,
    Grid,
} from '@mui/material';

interface ProjectImageRight6Props {
    imageSrc: string;
}

export const ProjectImageRight6: FunctionComponent<ProjectImageRight6Props> = (props) => {
    return (
        <React.Fragment>
            <Grid container spacing={4}>
                <Grid item md={6} sx={{marginTop: -2}}>
                    { props.children }
                </Grid>
                <Grid item md={6} sx={{marginTop: -2}}>
                    <Paper sx={{margin: 2, padding: 1}}>
                        <img
                            src={props.imageSrc}
                            width="100%"
                        />
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default ProjectImageRight6;
