import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Textra from 'react-textra'
const Div = styled('div')(({ theme }) => ({
    ...theme.typography.h2,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontSize: theme.spacing(4),
}));
const Index = () => {
    const titles = ["キャッチコピー1", "キャッチコピー2", "キャッチコピー3", "キャッチコピー4", "キャッチコピー5", "キャッチコピー6"];
    return <Box sx={{ height: '100vh', overflow: 'hidden', textAlign: "center" }}>
        <br />
        <Div>{""}<Textra effect="simple" stopDuration={1000} duration={200} data={titles} />{""}</Div>
    </Box >
}

export default Index