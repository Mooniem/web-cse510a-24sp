import * as React from 'react';
import { FunctionComponent } from 'react';

import {
    Grid, Paper,
} from '@mui/material';

interface ProjectImageRight8Props {
    imageSrc: string;
}

export const ProjectImageRight8: FunctionComponent<ProjectImageRight8Props> = (props) => {
    return (
        <React.Fragment>
            <Grid container spacing={4}>
                <Grid item md={4} sx={{marginTop: -2}}>
                    { props.children }
                </Grid>
                <Grid item md={8} sx={{marginTop: -2}} container justifyContent="center">
                    <Paper sx={{margin: 2, padding: 1}}>
                        <img
                            src={props.imageSrc}
                            style={{maxWidth: "100%"}}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default ProjectImageRight8;
