import * as React from 'react';
import { FunctionComponent } from 'react';

import {
    Card,
    CardContent,
    Stack,
} from '@mui/material';

interface TeamMemberProps {
    name: string;
    photo: string;
}

export const TeamMemberCard: FunctionComponent<TeamMemberProps> = (props) => {
    return (
        <Card>
            <CardContent>
                <Stack>
                    { props.name }
                    <img
                        src={props.photo}
                        width="150"
                        alt={"Photo of " + props.name }
                    />
                </Stack>
            </CardContent>
        </Card>
    );
}

export default TeamMemberCard;
