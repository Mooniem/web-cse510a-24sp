import * as React from 'react';

import ProjectImagesBlock from "src/components/ProjectImagesBlock";

interface ProjectImage {
    src: string;
}

interface ProjectImageBlockProps {
    image: ProjectImage;
    width: 4 | 6 | 8 | 12;
}

export const ProjectImageBlock: React.FunctionComponent<ProjectImageBlockProps> = (props) => {
    return (
        <ProjectImagesBlock
            images={[props.image]}
            direction={"row"}
            width={props.width}
        >
            { props.children }
        </ProjectImagesBlock>
    );
}

export default ProjectImageBlock;
