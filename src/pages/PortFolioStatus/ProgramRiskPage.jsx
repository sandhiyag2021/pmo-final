import React from "react";
import {
    Box, Stack,
} from "@mui/material";
import NumberStepper from "../../components/molecules/NumberStepper";

export default function ProgramRiskPage({ viewProject,closure, setClosure, costImpact, setCostImpact, writeOff, setWriteOff, unbilledResources, setUnbilledResources, growthImpact, setGrowthImpact }) {

    return (
        <Box sx={{ width: "100%", paddingX: 2 }}>
            {/* First Row */}
            <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="flex-start" padding="20px">
                <NumberStepper disabled={viewProject} placeholder="#Closing/Risk of Closure" counter={closure} setCounter={setClosure} width="350px" />
                <NumberStepper placeholder="Potential Cost Impact" counter={costImpact} setCounter={setCostImpact} width="350px" mandatory={true} dollarSymbol={true} disabled={viewProject ||(!closure && !viewProject) ? true : false} />
                <NumberStepper disabled={viewProject} placeholder="Write-Off(Delivery without SoW or Contract)" counter={writeOff} setCounter={setWriteOff} width="350px" dollarSymbol={true} />
            </Stack>

            {/* Second Row */}
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" padding="20px">
                <NumberStepper disabled={viewProject} placeholder="Unbilled Resources" counter={unbilledResources} setCounter={setUnbilledResources} width="350px" mandatory={true} />
                <Box sx={{ display: "flex", flexDirection: "row", marginRight: "465px" }}>
                    <NumberStepper disabled={viewProject} placeholder="Potential Growth Impact" counter={growthImpact} setCounter={setGrowthImpact} width="350px" mandatory={true} dollarSymbol={true} />
                </Box>
            </Stack>
        </Box>
    );
}
