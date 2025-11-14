import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Typography } from "@mui/material";

export function Dropdown({
  input = [], // Ensure default to an empty array if `input` is undefined
  handleOnSelect,
  selectedValues = [],
  mandatory,
  placeholder = "", // Default placeholder
  onFocus,
  onBlur,
  disabled,
  viewProject,
  ...rest
}) {
  return (
    <Box
      sx={{
        display: "flex",
        // flex: 1,
        flexWrap: "wrap",
        alignItems: "center",
        maxHeight: 60,
        maxWidth: "340px",
        textAlign: "left"
      }}
    >
      <Box>
        <Typography variant="subtitle1" sx={{ fontSize: 14 }} gutterBottom>
          {placeholder}{mandatory && <span style={{ color: "red" }}>*</span>}
        </Typography></Box>
      <Autocomplete
        options={Array.isArray(input) ? input : []}
        disabled={disabled}
        getOptionLabel={(option) => option?.toString?.() || ""} // Ensure option has title
        onChange={handleOnSelect} // Pass the handler function
        value={selectedValues} // Selected values dynamically passed
        sx={{ width: 340, display: "block", }}
        renderInput={(params) => (
          <TextField
            {...params}
            {...rest} // Pass react-hook-form properties here
            placeholder={placeholder}
            onFocus={(event) => onFocus}
            onBlur={(event) =>
              (event.target.placeholder = onBlur || placeholder)
            }
          />
        )}
      />
    </Box>
  );
}

export default Dropdown;
