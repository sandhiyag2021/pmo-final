import React, { useState } from "react";
import {
    Box, Stack, TextField, Typography,
    FormControlLabel, RadioGroup, Radio, FormControl, FormHelperText
} from "@mui/material";
import NumberStepper from "../../components/molecules/NumberStepper";

export default function ProgramPage({ viewProject, newProspects, setNewProspects, newInitiatives, setNewInitiatives, avbPvbDetails, setAvbPvbDetails, valueAdds, setValueAdds, genAITech, setGenAITech, valueBoardEvaluation, setValueBoardEvaluation, valueAddsStepper, setValueAddsStepper, genAiStepper, setGenAiStepper, valueAddsDelivered,
    setValueAddsDelivered }) {
    const [avbPvbError, setAvbPvbError] = useState(false);
    const [genAiError, setGenAiError] = useState(false)

    return (
        <Box sx={{ width: "100%", paddingX: 2 }}>
            {/* First Row */}
            <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="flex-start" padding="20px">
                <NumberStepper disabled={viewProject} placeholder="New Prospects" counter={newProspects} setCounter={setNewProspects} width="350px" />
                <NumberStepper disabled={viewProject} placeholder="New Initiatives" counter={newInitiatives} setCounter={setNewInitiatives} width="350px" />

                {/* Value Adds Delivered */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "340px" }}>
                    {/* <Typography variant="subtitle1" sx={{ fontSize: 14, marginRight: "auto" }}>
                        Value Adds Delivered
                    </Typography> */}
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <NumberStepper disabled={viewProject} placeholder="Value Adds Delivered" counter={valueAddsStepper} setCounter={setValueAddsStepper} width="150px" />
                        <TextField disabled={viewProject} placeholder="Enter Description" variant="outlined" sx={{ width: "250px", marginTop: "28px" }} value={valueAddsDelivered} onChange={(e) => setValueAddsDelivered(e.target.value)} />
                    </Box>
                </Box>
            </Stack>

            {/* Second Row */}
            <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="flex-start" paddingX="20px">
                {/* Value Adds Revenue */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "340px" }}>

                    <NumberStepper placeholder=" Value Adds (Revenue)" counter={valueAdds} setCounter={setValueAdds} width="340px" mandatory={true} dollarSymbol={true} disabled={!valueAddsStepper || viewProject ? true : false}></NumberStepper>
                </Box>

                {/* Value Board Evaluation - Fixed Alignment */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "340px" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500, marginRight: "auto", marginTop: "10px", fontSize: "15px" }}>
                        Value Board Evaluation Done<span style={{ color: "red" }}>*</span>
                    </Typography>
                    <RadioGroup
                        row
                        value={valueBoardEvaluation}
                        onChange={(e) => setValueBoardEvaluation(e.target.value)}
                    >
                        <FormControlLabel value="true" control={<Radio disabled={viewProject} />} label="Yes" />
                        <FormControlLabel value="false" control={<Radio disabled={viewProject} />} label="No" />
                    </RadioGroup>
                </Box>

                {/* AVB/PVB Details with Validation */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "340px" }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500, marginRight: "auto", fontSize: "15px" }}>
                        AVB/PVB Details<span style={{ color: "red" }}>*</span>
                    </Typography>
                    <FormControl sx={{ width: "340px" }} error={avbPvbError}>
                        <TextField
                            variant="outlined"
                            placeholder="Enter Amount"
                            value={avbPvbDetails}
                            disabled={viewProject}
                            onChange={(e) => {
                                setAvbPvbDetails(e.target.value);
                                setAvbPvbError(false); // Remove error when user starts typing
                            }}
                            onBlur={() => {
                                if (!avbPvbDetails) {
                                    setAvbPvbError(true); // Show error when field is empty
                                }
                            }}
                        />
                        {avbPvbError && <FormHelperText>Please add AVB/PVB Details</FormHelperText>}
                    </FormControl>
                </Box>
            </Stack>

            <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="flex-start" padding="20px">
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "340px" }}>
                    {/* <Typography variant="subtitle1" sx={{ fontSize: 14, marginRight: "auto" }}>
                        GenAI/New Technology Initiatives<span style={{ color: "red" }}>*</span>
                    </Typography> */}
                    <FormControl sx={{ width: "340px" }} error={genAiError}>
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <NumberStepper disabled={viewProject} placeholder="GenAI/New Technology Initiatives" counter={genAiStepper} setCounter={setGenAiStepper} width="120px" mandatory={true} />
                            <TextField disabled={viewProject} placeholder="Enter Description" variant="outlined" sx={{ width: "100%", marginTop: "30px" }} value={genAITech} onChange={(e) => {
                                setGenAITech(e.target.value)
                                setGenAiError(false)
                            }}
                                onBlur={() => {
                                    if (!genAITech) {
                                        setGenAiError(true); // Show error when field is empty
                                    }
                                }} />
                        </Box>
                        {genAiError && <FormHelperText>Please Add GenAI/New Technology Initiatives</FormHelperText>}
                    </FormControl>

                </Box>
            </Stack>
        </Box>
    );
}
