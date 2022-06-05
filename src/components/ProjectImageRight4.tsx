import * as React from 'react';
import { FunctionComponent } from 'react';

import {
    Box,
    Grid,
    Paper,
} from '@mui/material';

interface ProjectImageRight4Props {
    imageSrc: string;
}

export const ProjectImageRight4: FunctionComponent<ProjectImageRight4Props> = (props) => {
    return (
        <React.Fragment>
            <Grid container spacing={4}>
                <Grid item md={8} sx={{marginTop: -2}}>
                    { props.children }
                </Grid>
                <Grid item md={4} sx={{marginTop: -2}}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                    }}>
                        <Paper sx={{margin: 2, padding: 1}}>
                            <img
                                src={props.imageSrc}
                                style={{maxHeight: "400px", maxWidth: "100%"}}
                            />
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default ProjectImageRight4;
