import * as React from 'react';
import { FunctionComponent } from 'react';

import {
    Grid,
} from '@mui/material';

interface ProjectImageRight4Props {
    imageSrc: string;
}

export const ProjectImageRight4: FunctionComponent<ProjectImageRight4Props> = (props) => {
    return (
        <React.Fragment>
            <Grid container spacing={4}>
                <Grid item md="8" sx={{marginTop: -2}}>
                    { props.children }
                </Grid>
                <Grid item md="4" justifyContent="center">
                    <img
                        src={props.imageSrc}
                        width="100%"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default ProjectImageRight4;
