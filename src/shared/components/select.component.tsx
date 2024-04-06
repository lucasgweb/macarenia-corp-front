import { MenuItem, SelectProps } from "@mui/material";

type SelectComponentProps = SelectProps

export function Select({ ...rest }: SelectComponentProps) {


    return (
        <Select
            {...rest}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
        >
            <MenuItem value={'10'}>Ten</MenuItem>
            <MenuItem value={'20'}>Twenty</MenuItem>
            <MenuItem value={'30'}>Thirty</MenuItem>
        </ Select>
    )
}