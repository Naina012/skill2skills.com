import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const BuildTools = () => {
    const theme = useTheme();

    return (
        <Box >
            <Box marginBottom={4} marginTop={8}>
                <Box marginBottom={2}>
                    <Typography
                        variant="h4"
                        color="text.primary"
                        align={'center'}
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                        }}
                    >
                        Discover a world of possibilities with Skill2Skills. We are your trusted partner in education, skill development, and career growth.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        color="text.secondary"
                        sx={{ fontWeight: 400 }}
                        align={'center'}
                    >
                       Skill2Skills believes in the power of scientific guidance. Our team is dedicated to providing you with the knowledge and resources you need, delivered right to your doorstep. Whether you are a student or a professional, our guidance will help you stay on a path of continuous learning and growth.
                    </Typography>
                </Box>
            </Box>
            
            
        </Box>
        
    )
}

export default BuildTools;
