import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material'

type ButtonProps = MuiButtonProps & {
    children: React.ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
    return (
        <MuiButton {...rest}>
            {children}
        </MuiButton>
    );
}