import * as React from 'react';
import { FunctionComponent } from 'react';

import {
    Box,
    Grid,
    Paper,
} from '@mui/material';

interface ProjectImage {
    src: string;
}

interface ProjectImagesBlockProps {
    images: ProjectImage[];
    direction: "row" | "column";
    width: 4 | 6 | 8;
    maxHeight?: string;
}

export const ProjectImagesBlock: FunctionComponent<ProjectImagesBlockProps> = (props) => {
    return (
        <React.Fragment>
            <Grid container spacing={4}>
                <Grid item md={12 - props.width} sx={{marginTop: -2}}>
                    { props.children }
                </Grid>
                <Grid item md={props.width} sx={{marginTop: -2}}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: props.direction,
                        justifyContent: "center",
                    }}>
                        {
                            props.images.map(
                                projectImage => (
                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                    }}>
                                        <Paper sx={{margin: 2, padding: 1}}>
                                            <img
                                                src={projectImage.src}
                                                style={{
                                                    maxHeight: (props.maxHeight === undefined) ? "400px" : props.maxHeight,
                                                    maxWidth: "100%"
                                                }}
                                            />
                                        </Paper>
                                    </Box>
                                )
                            )
                        }
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default ProjectImagesBlock;
