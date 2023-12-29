import React from 'react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { APP_NAME } from '@/constants';

const DesktopFooter = () => {
    return (
        <Box
            component="footer"
            sx={{
                display: { xs: 'none', md: 'block' },
                bgcolor: 'background.paper',
                p: 3,
                textAlign: 'center',
                position: 'fixed',
                bottom: 0,
                width: '100%',
            }}
        >
            <Container maxWidth="xl">
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FitnessCenterIcon sx={{ mr: 1 }} />
                    <Typography variant="body2" color="textSecondary">
                        {APP_NAME}
                    </Typography>
                </Box>
                <Box mt={1}>
                    <Link href="/about" color="textSecondary" sx={{ mx: 1 }}>
                        About
                    </Link>
                    <Link href="/contact" color="textSecondary" sx={{ mx: 1 }}>
                        Contact
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default DesktopFooter;
