import { Box, Typography } from "@mui/material";

type TitleProps = {
    title: string;
};

export function Title({ title }: TitleProps) {
    return (
        <Box
            sx={{
                background: 'linear-gradient(to right, #32a852, #2F80ED)', // This creates a blue gradient
                color: 'white',
                padding: 2,
                borderRadius: 10,
                boxShadow: 1,
                height: 8,
                display: 'flex',
                alignItems: 'center',
                my: 2
            }}
        >
            <Typography fontWeight='bold' fontSize={16} variant="h1" component="h2">
                {title}
            </Typography>
        </Box>
    );
}