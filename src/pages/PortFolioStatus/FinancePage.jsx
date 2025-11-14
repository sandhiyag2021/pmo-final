import React from "react";
import {
    Box, Stack, TextField, Typography
} from "@mui/material";
import NumberStepper from "../../components/molecules/NumberStepper";

export default function FinancePage({ viewProject, totalRevenue, setTotalRevenue, budget, setBudget, totalSpend, setTotalSpend, gm, setGm, resources, setResources, spend, setSpend, totalInvoice, setTotalInvoice, invoiceNotRealized, setInvoiceNotRealized, sunkCosts, setSunkCosts }) {
    return (
        <Box sx={{ width: "100%", paddingX: 2 }}>
            {/* First Row */}
            <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="flex-start" padding="20px 0">
                <NumberStepper disabled={viewProject} placeholder="Total Revenue" counter={totalRevenue} setCounter={setTotalRevenue} width="350px" dollarSymbol={true} mandatory={true} />
                <NumberStepper disabled={viewProject} placeholder="Budget(Calc Value)" counter={budget} setCounter={setBudget} width="350px" dollarSymbol={true} mandatory={true} />
                <NumberStepper disabled={viewProject} placeholder="Total Spend" counter={totalSpend} setCounter={setTotalSpend} width="350px" dollarSymbol={true} mandatory={true} />
            </Stack>

            {/* Second Row */}
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" padding="20px 0">
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "350px", marginTop: "20px" }}>
                    <Typography variant="subtitle1" sx={{ fontSize: 14, marginRight: "auto" }}>
                        GM% (RAG) <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <TextField disabled={viewProject} placeholder="Enter Description" inputProps={{
                            pattern: "[0-9]*",
                        }} onInput={(e) => {
                            const inputValue = e.target.value;
                            if (!/^[0-9]+$/.test(inputValue)) {
                                e.target.value = inputValue.replace(/[^0-9]/g, "");
                            }
                        }} variant="outlined" sx={{ width: "340px" }} value={gm} onChange={(e) => setGm(e.target.value)} />
                    </Box>
                </Box>
                <Box sx={{ border: "1px solid #ccc", padding: 2, borderRadius: 2, marginTop: "20px", width: "308px", marginRight: "10px" }}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: "bold",
                            marginRight: "20px",
                            position: "relative",
                            top: -35,
                            right: 45,
                            background: "white",
                            padding: "0 4px",
                        }}
                    >
                        Forecasting Accuracy
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, marginBottom: "30px" }}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <NumberStepper disabled={viewProject} placeholder="Resources" counter={resources} setCounter={setResources} mandatory={true} width="130px" />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                            <NumberStepper disabled={viewProject} placeholder="Spend" counter={spend} setCounter={setSpend} mandatory={true} width="130px" />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "350px", marginTop: "20px" }}>
                    <NumberStepper disabled={viewProject} placeholder="Total Invoice" counter={totalInvoice} setCounter={setTotalInvoice} width="350px" dollarSymbol={true} mandatory={true} />
                </Box>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" padding="20px">
                <Box sx={{ display: "flex", flexDirection: "row", marginLeft: "-20px" }}>
                    <NumberStepper disabled={viewProject} placeholder="Invoice not realized>30d" counter={invoiceNotRealized} setCounter={setInvoiceNotRealized} width="350px" dollarSymbol={true} mandatory={true} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", marginRight: "460px" }}>
                    <NumberStepper disabled={viewProject} placeholder="Sunk Costs(Write-off and Unbilled Resources)" counter={sunkCosts} setCounter={setSunkCosts} width="350px" dollarSymbol={true} mandatory={true} />
                </Box>
            </Stack>
        </Box>
    );
}
