import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  FormControl,
  FormHelperText,
} from "@mui/material";
import NumberStepper from "../../components/molecules/NumberStepper";

export default function ResourcesForm({
  viewProject,
  techinal,
  setTechinal,
  product,
  setProduct,
  manager,
  setManager,
  teamSize,
  setTeamSize,
  voluntary,
  setVoluntary,
  involuntary,
  setInvoluntary,
  employeeScore,
  setEmployeeScore,
  learnings,
  setLearnings,
  additions,
  setAdditions,
  attritionRisk,
  setAttritionRisk,
  topPerformers,
  setTopPerformers,
  topPerformersDesc,
  settopPerformersDesc
}) {
  const [teamSizeError, setTeamSizeError] = useState(false);
  const [learningError, setLearningError] = useState(false);
  const [additionsError, setAdditionsError] = useState(false);
  const [attritionsError, setAttritionsError] = useState(false);
  const [employeeScoreError, setEmployeeScoreError] = useState(false);
  const [performersError, setPerformersError] = useState(false);
  return (
    <Box sx={{ width: "100%" }}>

      {/* First Row */}
      <Stack
        direction="row"
        spacing={3}
        justifyContent="space-between"
        alignItems="flex-start"
        padding="20px 0"
      >
        <Box
          sx={{
            border: "1px solid #ccc",
            padding: 2,
            borderRadius: 2,
            marginRight: "70px",
            width: "765px",
            position: "relative",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              marginRight: "40px",
              position: "absolute",
              top: -15,
              left: 25,
              background: "white",
              padding: "0 4px",
            }}
          >
            Open Positions(9)
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "30px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <NumberStepper
                disabled={viewProject}
                placeholder="Techinal"
                counter={techinal}
                setCounter={setTechinal}
                mandatory={true}
                width="220px"
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <NumberStepper
                disabled={viewProject}
                placeholder="Product"
                counter={product}
                setCounter={setProduct}
                mandatory={true}
                width="220px"
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <NumberStepper
                disabled={viewProject}
                placeholder="Lead/Manager"
                counter={manager}
                setCounter={setManager}
                mandatory={true}
                width="220px"
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "340px",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 500, fontSize: "15px", marginRight: "auto" }}
          >
            Current Team Size<span style={{ color: "red" }}>*</span>
          </Typography>
          <FormControl sx={{ width: "340px" }} error={teamSizeError}>
            <TextField
              disabled={viewProject}
              sx={{ width: "340px" }}
              variant="outlined"
              placeholder="Current Team Size"
              inputProps={{
                pattern: "[0-9]*",
              }}
              value={teamSize}
              onChange={(e) => {
                setTeamSize(e.target.value);
                setTeamSizeError(false);
              }}
              onBlur={() => {
                if (!teamSize) {
                  setTeamSizeError(true); // Show error when field is empty
                }
              }}
              onInput={(e) => {
                const inputValue = e.target.value;
                if (!/^[0-9]+$/.test(inputValue)) {
                  e.target.value = inputValue.replace(/[^0-9]/g, "");
                }
              }}
            />
            {teamSizeError && (
              <FormHelperText>Please add Current Team Size(only Integers)</FormHelperText>
            )}
          </FormControl>
        </Box>
      </Stack>
      {/* Second Row */}
      <Stack
        direction="row"
        spacing={3}
        justifyContent="space-between"
        alignItems="flex-start"
        padding="20px 0"
      >
        <Box
          sx={{
            border: "1px solid #ccc",
            padding: 2,
            borderRadius: 2,
            marginRight: "70px",
            position: "relative",
            maxWidth: "305px",
            width: "100%"
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              marginRight: "40px",
              position: "absolute",
              top: -15,
              left: 25,
              background: "white",
              padding: "0 4px",
            }}
          >
            Attrition
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
              marginBottom: "30px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <NumberStepper
                disabled={viewProject}
                placeholder="Voluntary"
                counter={voluntary}
                setCounter={setVoluntary}
                mandatory={true}
                width="128px"
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <NumberStepper
                disabled={viewProject}
                placeholder="Involuntary"
                counter={involuntary}
                setCounter={setInvoluntary}
                mandatory={true}
                width="127px"
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "340px",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 500, marginRight: "auto", fontSize: "14px" }}
          >
            ESAT(Employee Satisfaction Score - out of 10)
            <span style={{ color: "red" }}>*</span>
          </Typography>
          <FormControl sx={{ width: "340px" }} error={employeeScoreError}>
            <TextField
              disabled={viewProject}
              sx={{ width: "340px" }}
              variant="outlined"
              placeholder="Enter"
              inputProps={{
                pattern: "[0-9]*",
              }}
              value={employeeScore}
              onChange={(e) => {
                setEmployeeScore(e.target.value);
                setEmployeeScoreError(false);
              }}
              onBlur={() => {
                if (!employeeScore) {
                  setEmployeeScoreError(true); // Show error when field is empty
                }
              }}
              onInput={(e) => {
                const inputValue = e.target.value;
                if (!/^[0-9]+$/.test(inputValue)) {
                  e.target.value = inputValue.replace(/[^0-9]/g, "");
                } else if (inputValue > 10) {
                  e.target.value = 10;
                }
              }}
            />
            {employeeScoreError && (
              <FormHelperText>Please add ESAT</FormHelperText>
            )}
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "340px",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 500, marginRight: "auto", fontSize: "15px" }}
          >
            Learning/Certifications<span style={{ color: "red" }}>*</span>
          </Typography>
          <FormControl sx={{ width: "340px" }} error={learningError}>
            <TextField
              disabled={viewProject}
              sx={{ width: "340px" }}
              variant="outlined"
              placeholder="Learning/Certifications"
              value={learnings}
              onChange={(e) => {
                setLearnings(e.target.value);
                setLearningError(false);
              }}
              onBlur={() => {
                if (!learnings) {
                  setLearningError(true); // Show error when field is empty
                }
              }}
            />
            {learningError && (
              <FormHelperText>Please add Learning/Certifications</FormHelperText>
            )}
          </FormControl>
        </Box>
      </Stack>
      {/* Third Row */}
      <Stack
        direction="row"
        spacing={3}
        justifyContent="space-between"
        alignItems="flex-start"
        padding="20px 0"
      >
        <FormControl sx={{ width: "340px" }} error={additionsError}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 500, marginRight: "auto", fontSize: "15px" }}
          >
            New Additions<span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            disabled={viewProject}
            variant="outlined"
            placeholder="Enter Amount"
            value={additions}
            onChange={(e) => {
              setAdditions(e.target.value);
              setAdditionsError(false); // Remove error when user starts typing
            }}
            onBlur={() => {
              if (!additions) {
                setAdditionsError(true); // Show error when field is empty
              }
            }}
          />
          {additionsError && (
            <FormHelperText>Please add New Additions</FormHelperText>
          )}
        </FormControl>
        <FormControl sx={{ width: "340px" }} error={attritionsError}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 500, marginRight: "auto", fontSize: "15px" }}
          >
            Attrition Risk<span style={{ color: "red" }}>*</span>
          </Typography>
          <TextField
            disabled={viewProject}
            variant="outlined"
            placeholder="Enter Amount"
            value={attritionRisk}
            onChange={(e) => {
              setAttritionRisk(e.target.value);
              setAttritionsError(false); // Remove error when user starts typing
            }}
            onBlur={() => {
              if (!attritionRisk) {
                setAttritionsError(true); // Show error when field is empty
              }
            }}
          />
          {attritionsError && (
            <FormHelperText>
              Please add Attritions
            </FormHelperText>
          )}
        </FormControl>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "340px",
          }}
        >
          <FormControl sx={{ width: "340px" }} error={performersError}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <NumberStepper
                disabled={viewProject}
                placeholder="Top Performers"
                counter={topPerformers}
                setCounter={setTopPerformers}
                width="120px"
                mandatory={true}
              />
              <TextField
                disabled={viewProject}
                placeholder="Enter Description"
                variant="outlined"
                sx={{ width: "100%", marginTop: "30px" }}
                value={topPerformersDesc}
                onChange={(e) => {
                  settopPerformersDesc(e.target.value);
                  setPerformersError(false);
                }}
                onBlur={() => {
                  if (!topPerformersDesc) {
                    setPerformersError(true); // Show error when field is empty
                  }
                }}
              />
            </Box>
            {performersError && (
              <FormHelperText>Please Add Top Performer</FormHelperText>
            )}
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
}
