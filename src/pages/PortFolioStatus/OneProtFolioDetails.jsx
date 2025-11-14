import React from "react";
import { Dropdown } from "../../components/molecules";
import {
  Box,
  Stack,
  FormControl,
  FormHelperText,
} from "@mui/material";
import NumberStepper from "../../components/molecules/NumberStepper";

export default function OneProtFolioDetails({
  viewProject,
  changePortfolioStatus,
  setChangePortfolioStatus,
  protfolioStatus,
  setProtfolioStatus,
  inFlight,
  setInFlight,
  projectsOnTrack,
  setProjectsOnTrack,
  newProjects,
  setNewProjects,
  projectAtRisk,
  setProjectAtRisk,
  rampDown,
  setRampDown,
  chrun,
  setChrun,
}) {
  // const dropdowns = ["Ramesh", "Lee", "Tony", "Kinesh"];
  const [portfolioStatusError, setPortfolioStatusError] = React.useState(false);

  return (
    <>
      <Box sx={{ flex: 1, width: "100%" }}>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="space-between"
          alignItems="flex-start"
          padding="20px 0"
        >
          <FormControl sx={{ width: "340px" }} error={portfolioStatusError}>
            <Dropdown
              disabled={viewProject}
              input={protfolioStatus}
              placeholder="Portfolio Status"
              selectedValues={changePortfolioStatus}
              mandatory={true}
              handleOnSelect={(event, newValue) => {
                setChangePortfolioStatus(newValue);
                setPortfolioStatusError(false);
              }}
              onFocus={() => {
                if (!protfolioStatus) {
                  setPortfolioStatusError(true); // Show error when field is empty
                }
              }}
            />
            {portfolioStatusError && (
              <FormHelperText>
                Please fill this field as its mandatory
              </FormHelperText>
            )}
          </FormControl>
          <Box sx={{ display: "flex", gap: 2 }}>
            <NumberStepper
              disabled={viewProject}
              placeholder="In Flight (EE)"
              mandatory={true}
              counter={inFlight}
              setCounter={setInFlight}
              width="340px"
            />
          </Box>
          <NumberStepper
            disabled={viewProject}
            placeholder="Projects on Track"
            mandatory={true}
            counter={projectsOnTrack}
            setCounter={setProjectsOnTrack}
            width="340px"
          />
        </Stack>
      </Box>
      <Box sx={{ width: "100%", flexWrap: 1 }}>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="space-between"
          alignItems="flex-start"
          padding="20px 0"
        >
          <NumberStepper
            disabled={viewProject}
            placeholder="New Projects"
            mandatory={true}
            counter={newProjects}
            setCounter={setNewProjects}
            width="340px"
          />
          <NumberStepper
            disabled={viewProject}
            placeholder="Projects  at High Risk"
            counter={projectAtRisk}
            setCounter={setProjectAtRisk}
            width="340px"
          />
          <NumberStepper
            disabled={viewProject}
            placeholder="Ramp Down"
            counter={rampDown}
            setCounter={setRampDown}
            width="340px"
          />
        </Stack>
      </Box>
      <Box sx={{ width: "100%", flexWrap: 1 }}>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="space-between"
          alignItems="flex-start"
          padding="20px 0"
        >
          <NumberStepper
            disabled={viewProject}
            placeholder="Chrun"
            counter={chrun}
            setCounter={setChrun}
            width="340px"
          />
        </Stack>
      </Box>
    </>
  );
}
