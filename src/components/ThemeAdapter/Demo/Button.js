import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

const DemoView = styled.div`
    button + button {
        margin: 5px;
    }
`;

export default function ButtonDemo() {
    return (
        <DemoView>
            <h4>大按钮</h4>
            <Button variant="contained" color="primary" size="large" fullWidth>
                Primary fullWidth
            </Button>
            <Button variant="contained" color="primary" size="large">
                Primary
            </Button>
            <Button variant="contained" disabled size="large">
                Disabled
            </Button>
            <Button variant="outlined" size="large">
                Outlined
            </Button>
            <Button variant="outlined" disabled size="large">
                Outlined Disabled
            </Button>

            <h4>小按钮</h4>
            <Button variant="contained" color="primary" size="small">
                Primary
            </Button>
            <Button variant="contained" disabled size="small">
                Disabled
            </Button>
            <Button variant="outlined" size="small">
                Outlined
            </Button>
            <Button variant="outlined" disabled size="small">
                Outlined Disabled
            </Button>
        </DemoView>
    );
}
