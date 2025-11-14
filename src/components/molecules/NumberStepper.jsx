import * as React from 'react';
import { Box, Typography, InputAdornment } from "@mui/material";
import TextField from '@mui/material/TextField';

export function NumberInput({ value, setValue, placeholder = '', min = 0, width, mandatory, dollarSymbol = false, disabled = false }) {
    const handleChange = (event) => {
        const newValue = event.target.value;
        // setValue(newValue ? Math.max(min, Math.min(max, Number(newValue))) : '');
        setValue(newValue);
    };
    return (
        <Box sx={{
            display: "flex",
            // flex: 1,
            flexWrap: "wrap",
            alignItems: "center",
            maxHeight: 60,
            maxWidth: { width },
            textAlign: "left"
        }}>
            <Box>
                <Typography variant="subtitle1" sx={{
                    fontSize: 14, whiteSpace: "nowrap",  // Ensures single-line text
                    overflow: "hidden",     // Prevents text overflow
                    textOverflow: "ellipsis"
                }} gutterBottom>
                    {placeholder}
                    {mandatory ? <span style={{ color: "red" }}>*</span> : ""}
                </Typography>
            </Box>

            <TextField
                type="number"
                value={value}
                variant="outlined"
                onChange={handleChange}
                inputProps={{
                    min,
                    // max,
                }}
                sx={{
                    width: '340px',
                    '& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button': {
                        opacity: 1,
                        display: 'block'
                    },
                    ...(disabled && {
                        opacity: 0.6,       // Reduce opacity
                        cursor: "not-allowed" // Change cursor style

                    })
                }}
                InputProps={dollarSymbol ? {
                    startAdornment: <InputAdornment position="start" sx={{
                        backgroundColor: "#ffffff",
                        padding: "12px",
                        borderRight: "1px solid #ccc",
                        minWidth: "25px",
                        textAlign: "center",
                        color: "#000000", // Dark black color
                    }}>$</InputAdornment>
                } : ""}
                disabled={disabled}
            />
        </Box>
    );
}

export default function NumberStepper({ placeholder, counter, setCounter, width, mandatory, dollarSymbol, disabled }) {

    return <NumberInput value={counter} setValue={setCounter} placeholder={placeholder} width={width} mandatory={mandatory} dollarSymbol={dollarSymbol} disabled={disabled} />;
}
