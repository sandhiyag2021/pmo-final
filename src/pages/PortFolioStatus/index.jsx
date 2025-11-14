import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Dropdown from "../../components/molecules/Dropdown";
import apiUrlConfig from "../../config/apiUrlConfig";
import MultipleStepForm from "../../components/molecules/MultiStepForm";
import {
  Box, Typography, Select,
  MenuItem, Stack, Card, CardContent,
  Table, TableHead, TableBody, TableRow, TableCell
} from "@mui/material";
import dayjs from "dayjs";
import { fetchPortfolioData, CreateUpdatePortFolioStatus } from "../../modules/ApiCalls";
import Snackbar from '@mui/material/Snackbar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from "react-router-dom";
import { useStore } from "../../zustand/index";

function PortFolioStatus() {
  const navigate = useNavigate();
  const today = dayjs();
  const location = useLocation();
  const row = location.state?.row;
  console.log(row, 'row')
  const viewProject = location.state?.viewProject;
  const editProject = location.state?.editProject;
  const { allData } = useStore();

  const [selectedMonth, setSelectedMonth] = useState(today.format("MMMM"));
  const [selectedYear, setSelectedYear] = useState(today.year());
  const [buHead, setBuHead] = useState("");
  const [engagementDirector, setEngagementDirector] = useState("");
  const [deliveryDirector, setDeliveryDirector] = useState("");
  const [deliveryManager, setDeliveryManager] = useState("");
  const [selectedEngagementDirector, setSelectedEngagementDirector] = useState("");
  const [selectedDeliveryDirector, setSelectedDeliveryDirector] = useState("");
  const [selectedDeliveryManager, setSelectedDeliveryManager] = useState("");
  const [selectedBuHead, setSelectedBuHead] = useState("");
  // section One
  const [protfolioStatus, setProtfolioStatus] = useState("");
  const [changePortfolioStatus, setChangePortfolioStatus] = useState(null);
  const [inFlight, setInFlight] = useState(null);
  const [projectsOnTrack, setProjectsOnTrack] = useState(null);
  const [newProjects, setNewProjects] = useState();
  const [projectAtRisk, setProjectAtRisk] = useState(null);
  const [rampDown, setRampDown] = useState(null);
  const [chrun, setChrun] = useState(null);
  // section Two
  const [newProspects, setNewProspects] = useState(0);
  const [newInitiatives, setNewInitiatives] = useState(0);
  const [avbPvbDetails, setAvbPvbDetails] = useState("");
  const [valueAdds, setValueAdds] = useState("");
  const [genAITech, setGenAITech] = useState("");
  const [valueBoardEvaluation, setValueBoardEvaluation] = useState("");
  const [genAiStepper, setGenAiStepper] = useState(0);
  const [valueAddsStepper, setValueAddsStepper] = useState(0);
  const [valueAddsDelivered, setValueAddsDelivered] = useState("");
  // section Three
  const [closure, setClosure] = useState(0);
  const [costImpact, setCostImpact] = useState(0);
  const [writeOff, setWriteOff] = useState(0);
  const [unbilledResources, setUnbilledResources] = useState(0);
  const [growthImpact, setGrowthImpact] = useState(0);
  // section Four
  const [techinal, setTechinal] = useState(0);
  const [product, setProduct] = useState(0);
  const [manager, setManager] = useState(0);
  const [teamSize, setTeamSize] = useState(0);
  const [voluntary, setVoluntary] = useState(0);
  const [involuntary, setInvoluntary] = useState(0);
  const [employeeScore, setEmployeeScore] = useState(0);
  const [learnings, setLearnings] = useState("");
  const [additions, setAdditions] = useState("");
  const [attritionRisk, setAttritionRisk] = useState("");
  const [topPerformers, setTopPerformers] = useState(0);
  const [topPerformersDesc, settopPerformersDesc] = useState("");
  // section Five
  const [csat, setCsat] = useState(0)
  const [feedback, setFeedBack] = useState("")
  const [escalation, setEscalation] = useState(0)
  const [escalationDescription, setEscalationDescription] = useState("")
  const [apprecition, setApprecition] = useState(0)
  const [apprecitionDescription, setApprecitionDescription] = useState("")
  const [critical, setCritical] = useState(0)
  const [nonCritical, setNonCritical] = useState(0)
  const [qbr, setQbr] = useState("")
  const [capabilitiesPositioned, setCapabilitiesPositioned] = useState(0)
  const [capabilitiesDescription, setCapabilitiesDescription] = useState("")
  const [pocsInFlight, setPocsInFlight] = useState(0)
  const [pocsPlanned, setPocsPlanned] = useState(0)
  const [hackathons, setHackathons] = useState(0)
  const [hackathonsDescribed, setHackathonsDescribed] = useState("")
  const [crossSellOportunity, setCrossSellOpportunity] = useState("")
  const [architechtureAdvisory, setArchitechtureAdvisory] = useState("")
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [budget, setBudget] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);
  const [gm, setGm] = useState("");
  const [resources, setResources] = useState(0);
  const [spend, setSpend] = useState(0);
  const [totalInvoice, setTotalInvoice] = useState(0);
  const [invoiceNotRealized, setInvoiceNotRealized] = useState(0);
  const [sunkCosts, setSunkCosts] = useState(0);
  const [onSubmit, setOnSubmit] = useState(false);
  const [dataAlreadyPresent, setDataAlreadyPresent] = useState(false);
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const { apiUrl } = apiUrlConfig;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dropdown = ["engagement_director", "delivery_director", "delivery_manager", "bu_head", "portfolio_status"];
  useEffect(() => {
    const fetchData = async () => {
      await fetchPortfolioData(apiUrl, dropdown, setEngagementDirector, setDeliveryDirector, setDeliveryManager, setBuHead, setProtfolioStatus);
    };
    fetchData();
  }, [apiUrl, dropdown]);
  useEffect(() => {
    if (viewProject || editProject) {
      setSelectedMonth(row.month_year.split(" ")[0]);
      setSelectedYear(row.month_year.split(" ")[1]);
      setSelectedDeliveryDirector(row.delivery_director);
      setSelectedBuHead(row.bu_head);
      setSelectedDeliveryManager(row.delivery_manager);
      setChangePortfolioStatus(row.portfolio_status);
      setInFlight(row.in_flight_ee)
      setProjectsOnTrack(row.projects_on_track)
      setNewProjects(row.new_projects_en)
      setProjectAtRisk(row.projects_at_high_risk)
      setRampDown(row.ramp_down)
      setChrun(row.churn)
      setNewProspects(row.new_prospects)
      setNewInitiatives(row.new_initiatives)
      setValueAddsStepper(row.value_adds_delivered)
      setValueAddsDelivered(row.value_adds_delivered_desc)
      setValueAdds(row.value_adds_revenue)
      setValueBoardEvaluation(row.value_board_done)
      setAvbPvbDetails(row.avb_pvb_details)
      setGenAiStepper(row.genai_initiatives)
      setGenAITech(row.genai_desc)
      setClosure(row.closing_risk)
      setCostImpact(row.potential_cost_impact)
      setWriteOff(row.write_off)
      setUnbilledResources(row.unbilled_resources)
      setGrowthImpact(row.potential_growth_impact)
      setTechinal(row.open_technical)
      setProduct(row.open_product)
      setManager(row.open_manager)
      setTeamSize(row.current_team_size)
      setVoluntary(row.voluntary_attrition)
      setInvoluntary(row.involuntary_attrition)
      setEmployeeScore(row.esat_score)
      setLearnings(row.learning_certifications)
      setAdditions(row.new_additions)
      setAttritionRisk(row.attrition_risk)
      setTopPerformers(row.top_performers)
      settopPerformersDesc(row.top_performers_desc)
      setCsat(row.csat_score)
      setFeedBack(row.feedback)
      setEscalation(row.escalations)
      setEscalationDescription(row.escalation_desc)
      setApprecition(row.appreciations)
      setApprecitionDescription(row.appreciations_desc)
      setCritical(row.early_warning_critical)
      setNonCritical(row.early_warning_non_critical)
      setQbr(row.qbr)
      setCapabilitiesPositioned(row.capabilities_positioned)
      setCapabilitiesDescription(row.capabilities_desc)
      setPocsInFlight(row.pocs_in_flight)
      setPocsPlanned(row.pocs_planned)
      setCrossSellOpportunity(row.cross_sell_opportunity)
      setArchitechtureAdvisory(row.architecture_advisory)
      setHackathons(row.accathons)
      setHackathonsDescribed(row.accathons_desc)
      setTotalRevenue(row.total_revenue)
      setBudget(row.budget_value)
      setGm(row.gm_percentage)
      setResources(row.forecasting_accuracy_resources)
      setTotalSpend(row.total_spend)
      setTotalInvoice(row.invoice_total)
      setInvoiceNotRealized(row.invoice_not_realized_30d)
      setSunkCosts(row.sunk_costs)
      setSpend(row.forecasting_accuracy_spend)
    }
  }, [viewProject]);

  useEffect(() => {
    if (onSubmit) {
      setOnSubmit(false);
      const CreateUpdateData = async () => {
        const a = await CreateUpdatePortFolioStatus(row, editProject, changePortfolioStatus, selectedMonth, selectedYear, apiUrl, selectedBuHead, selectedEngagementDirector, selectedDeliveryDirector, selectedDeliveryManager,
          protfolioStatus,
          inFlight,
          projectsOnTrack,
          newProjects,
          projectAtRisk,
          rampDown,
          chrun,
          newProspects,
          newInitiatives,
          avbPvbDetails,
          valueAdds,
          genAITech,
          valueBoardEvaluation,
          valueAddsStepper,
          genAiStepper,
          valueAddsDelivered,
          closure,
          costImpact,
          writeOff,
          unbilledResources,
          growthImpact,
          techinal,
          product,
          manager,
          teamSize,
          voluntary,
          involuntary,
          employeeScore,
          learnings,
          additions,
          attritionRisk,
          topPerformers,
          topPerformersDesc,
          csat,
          feedback,
          escalation,
          escalationDescription,
          apprecition,
          apprecitionDescription,
          critical,
          nonCritical,
          qbr,
          capabilitiesPositioned,
          capabilitiesDescription,
          pocsInFlight,
          pocsPlanned,
          hackathons,
          hackathonsDescribed,
          crossSellOportunity,
          architechtureAdvisory,
          totalRevenue,
          budget,
          totalSpend,
          gm,
          resources,
          spend,
          totalInvoice,
          invoiceNotRealized,
          sunkCosts);
        console.log(a, "A")

        if (a.portfolio_id || a.id) {
          setState({ vertical: 'top', horizontal: 'right', open: true });
          setTimeout(() => {
            navigate('/portfolio')
          }, 1000);
        }
      };
      CreateUpdateData();

    }
  }, [onSubmit]);

  console.log(selectedDeliveryDirector, "Delivery Director", `${selectedMonth} ${selectedYear}`, "Selected Month and Year")
  useEffect(() => {
    const filtered = allData.filter((item) => {
      console.log(item.month_year, "Item Month Year")
      console.log(item.delivery_director[0], "Item Delivery Director")
      return (
        item.delivery_director[0] === selectedDeliveryDirector &&
        item.month_year[0] === `${selectedMonth} ${selectedYear}`
      );
    });
    setDataAlreadyPresent(filtered.length > 0);

  }, [allData, selectedDeliveryDirector, selectedMonth, selectedYear]);

  // Check if required fields are selected
  const isStepFormEnabled = !dataAlreadyPresent

  return (
    <Box sx={{ margin: "40px auto", maxWidth: "1400px", width: "100%" }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", marginRight: "150px", marginBottom: "20px" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 600, textAlign: "left" }}
        >
          Add Portfolio Status for {selectedMonth} {selectedYear}
        </Typography>

        <Box sx={{ display: "flex", gap: 1, marginBottom: "20px" }}>
          <Box>
            <Typography sx={{ marginRight: "200px" }}>Month<span style={{ color: "red" }}>*</span></Typography>
            <Select sx={{ "width": "250px", marginRight: "20px" }}
              value={selectedMonth}
              disabled={viewProject}
              onChange={(e) => setSelectedMonth(e.target.value)}
              size="small"
            >
              {[
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
              ].map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box>

            <Typography sx={{ marginRight: "200px" }}>Year<span style={{ color: "red" }}>*</span></Typography>
            <Select sx={{ "width": "250px" }}
              value={selectedYear}
              disabled={viewProject}
              onChange={(e) => setSelectedYear(e.target.value)}
              size="small"
            >
              {Array.from({ length: 9 }, (_, i) => dayjs().year() - i).map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        {/* Dropdowns Section */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
          {/* BU Head Dropdown - always shown */}
          <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 180}}>
            <Typography sx={{ fontWeight: 500, marginBottom: 0.5, textAlign: 'center', fontSize: 14, marginRight: 'auto' }}>
              BU Head
            </Typography>
            <Dropdown
              disabled={viewProject}
              input={buHead}
              handleOnSelect={(event, newValue) => setSelectedBuHead(newValue)}
              selectedValues={selectedBuHead}
            />
          </Box>

          {/* Engagement Director Dropdown - only if no row */}
          {!row && (
            <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 180}}>
              <Typography sx={{ fontWeight: 500, marginBottom: 0.5, textAlign: 'center', fontSize: 14, marginRight: 'auto' }}>
                Engagement Director
              </Typography>
              <Dropdown
                disabled={viewProject}
                input={engagementDirector}
                handleOnSelect={(event, newValue) => setSelectedEngagementDirector(newValue)}
                selectedValues={selectedEngagementDirector}
              />
            </Box>
          )}

          {/* Delivery Director Dropdown - always shown */}
          <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 180}}>
            <Typography sx={{ fontWeight: 500, marginBottom: 0.5, textAlign: 'center', fontSize: 14, marginRight: 'auto' }}>
              Delivery Director <span style={{ color: 'red' }}>*</span>
            </Typography>
            <Dropdown
              disabled={viewProject}
              input={deliveryDirector}
              handleOnSelect={(event, newValue) => setSelectedDeliveryDirector(newValue)}
              selectedValues={selectedDeliveryDirector}
            />
          </Box>

          {/* Delivery Manager Dropdown - only if no row */}
          {!row && (
            <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 180}}>
              <Typography sx={{ fontWeight: 500, marginBottom: 0.5, textAlign: 'center', fontSize: 14, marginRight: 'auto' }}>
                Delivery Manager
              </Typography>
              <Dropdown
                disabled={viewProject}
                input={deliveryManager}
                handleOnSelect={(event, newValue) => setSelectedDeliveryManager(newValue)}
                selectedValues={selectedDeliveryManager}
              />
            </Box>
          )}
        </Box>
        </Box>
        {/* Delivery Director Dropdown and Account Information Display */}
        {row && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0, mb: 2 }}>
            {/* Account Information Display */}
            <Box sx={{ width: '100%', flex: 1, mb: 2 }}>
              {row?.name && (
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#222' }}>
                  {row.name}
                </Typography>
              )}
              {(Array.isArray(row?.account_delivery_status) && row.account_delivery_status.length > 0) ? (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ minWidth: 300, width: 350 }}>Account Name</TableCell>
                      <TableCell sx={{ minWidth: 300, width: 350 }}>Delivery Manager</TableCell>
                      <TableCell sx={{ minWidth: 300, width: 350 }}>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.account_delivery_status.map((acc, idx) => (
                      <TableRow key={idx}>
                        <TableCell>
                          <a
                            href={acc.account_url || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#1976d2', textDecoration: 'underline', cursor: 'pointer' }}
                          >
                            {acc.account_name || 'N/A'}
                          </a>
                        </TableCell>
                        <TableCell>{acc.delivery_manager || 'N/A'}</TableCell>
                        <TableCell>{acc.status || 'N/A'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <Card
                  sx={{
                    minWidth: 140,
                    maxWidth: 200,
                    background: "linear-gradient(135deg, #ecf1ff 0%, #fff 100%)",
                    color: "#222",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    mb: 0.5,
                    p: 0,
                    width: '100%',
                  }}
                >
                  <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700, fontSize: 14, color: '#222' }}>
                      Account Information
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#555' }}>No account information available.</Typography>
                  </CardContent>
                </Card>
              )}
              {/* BU Head Display Section */}
              {row?.bu_head && (
                <Box sx={{ mt: 2, mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#1976d2', mr: 1 }}>
                    BU Head:
                  </Typography>
                  {Array.isArray(row.bu_head)
                    ? row.bu_head.map((name, idx) => (
                        <Box key={idx} sx={{ display: 'inline-block', mr: 1 }}>
                          <span style={{
                            display: 'inline-block',
                            background: '#e3f2fd',
                            color: '#1976d2',
                            borderRadius: '16px',
                            padding: '4px 14px',
                            fontWeight: 600,
                            fontSize: 14,
                            boxShadow: '0 1px 4px rgba(25, 118, 210, 0.08)',
                            textDecoration: 'none',
                            cursor: 'default',
                          }}>{name}</span>
                        </Box>
                      ))
                    : (
                        <span style={{
                          display: 'inline-block',
                          background: '#e3f2fd',
                          color: '#1976d2',
                          borderRadius: '16px',
                          padding: '4px 14px',
                          fontWeight: 600,
                          fontSize: 14,
                          boxShadow: '0 1px 4px rgba(25, 118, 210, 0.08)',
                          textDecoration: 'none',
                          cursor: 'default',
                        }}>{row.bu_head}</span>
                      )}
                </Box>
              )}
            </Box>
          </Box>
        )}
      
      {/* Stepper with Blur & Disable Effect */}
      <Box
        sx={{
          filter: isStepFormEnabled ? "none" : "blur(4px)",
          pointerEvents: isStepFormEnabled ? "auto" : "none", // Disable click
          opacity: isStepFormEnabled ? 1 : 0.5, // Reduce visibility
          maxWidth: "1400px",
          width: "100%",
          margin: "60px auto 0",
          border: "1px solid #D9D9D9",
          borderRadius: "20px",
        }}
      >
        <MultipleStepForm
          viewProject={viewProject}
          editProject={editProject}
          changePortfolioStatus={changePortfolioStatus}
          setChangePortfolioStatus={setChangePortfolioStatus}
          setProtfolioStatus={setProtfolioStatus}
          protfolioStatus={protfolioStatus}
          inFlight={inFlight}
          setInFlight={setInFlight}
          projectsOnTrack={projectsOnTrack}
          setProjectsOnTrack={setProjectsOnTrack}
          newProjects={newProjects}
          setNewProjects={setNewProjects}
          projectAtRisk={projectAtRisk}
          setProjectAtRisk={setProjectAtRisk}
          rampDown={rampDown}
          setRampDown={setRampDown}
          chrun={chrun}
          setChrun={setChrun}
          newProspects={newProspects}
          setNewProspects={setNewProspects}
          newInitiatives={newInitiatives}
          setNewInitiatives={setNewInitiatives}
          avbPvbDetails={avbPvbDetails}
          setAvbPvbDetails={setAvbPvbDetails}
          valueAdds={valueAdds}
          setValueAdds={setValueAdds}
          genAITech={genAITech}
          setGenAITech={setGenAITech}
          valueBoardEvaluation={valueBoardEvaluation}
          setValueBoardEvaluation={setValueBoardEvaluation}
          valueAddsStepper={valueAddsStepper}
          setValueAddsStepper={setValueAddsStepper}
          genAiStepper={genAiStepper}
          setGenAiStepper={setGenAiStepper}
          valueAddsDelivered={valueAddsDelivered}
          setValueAddsDelivered={setValueAddsDelivered}
          closure={closure}
          setClosure={setClosure}
          costImpact={costImpact}
          setCostImpact={setCostImpact}
          writeOff={writeOff}
          setWriteOff={setWriteOff}
          unbilledResources={unbilledResources}
          setUnbilledResources={setUnbilledResources}
          growthImpact={growthImpact}
          setGrowthImpact={setGrowthImpact}
          techinal={techinal}
          setTechinal={setTechinal}
          product={product}
          setProduct={setProduct}
          manager={manager}
          setManager={setManager}
          teamSize={teamSize}
          setTeamSize={setTeamSize}
          voluntary={voluntary}
          setVoluntary={setVoluntary}
          involuntary={involuntary}
          setInvoluntary={setInvoluntary}
          employeeScore={employeeScore}
          setEmployeeScore={setEmployeeScore}
          learnings={learnings}
          setLearnings={setLearnings}
          additions={additions}
          setAdditions={setAdditions}
          attritionRisk={attritionRisk}
          setAttritionRisk={setAttritionRisk}
          topPerformers={topPerformers}
          setTopPerformers={setTopPerformers}
          topPerformersDesc={topPerformersDesc}
          settopPerformersDesc={settopPerformersDesc}
          csat={csat}
          setCsat={setCsat}
          feedback={feedback}
          setFeedBack={setFeedBack}
          escalation={escalation}
          setEscalation={setEscalation}
          escalationDescription={escalationDescription}
          setEscalationDescription={setEscalationDescription}
          apprecition={apprecition}
          setApprecition={setApprecition}
          apprecitionDescription={apprecitionDescription}
          setApprecitionDescription={setApprecitionDescription}
          critical={critical}
          setCritical={setCritical}
          nonCritical={nonCritical}
          setNonCritical={setNonCritical}
          qbr={qbr}
          setQbr={setQbr}
          capabilitiesPositioned={capabilitiesPositioned}
          setCapabilitiesPositioned={setCapabilitiesPositioned}
          capabilitiesDescription={capabilitiesDescription}
          setCapabilitiesDescription={setCapabilitiesDescription}
          pocsInFlight={pocsInFlight}
          setPocsInFlight={setPocsInFlight}
          pocsPlanned={pocsPlanned}
          setPocsPlanned={setPocsPlanned}
          hackathons={hackathons}
          setHackathons={setHackathons}
          hackathonsDescribed={hackathonsDescribed}
          setHackathonsDescribed={setHackathonsDescribed}
          crossSellOportunity={crossSellOportunity}
          setCrossSellOpportunity={setCrossSellOpportunity}
          architechtureAdvisory={architechtureAdvisory}
          setArchitechtureAdvisory={setArchitechtureAdvisory}
          totalRevenue={totalRevenue}
          setTotalRevenue={setTotalRevenue}
          budget={budget}
          setBudget={setBudget}
          totalSpend={totalSpend}
          setTotalSpend={setTotalSpend}
          gm={gm}
          setGm={setGm}
          resources={resources}
          setResources={setResources}
          spend={spend}
          setSpend={setSpend}
          totalInvoice={totalInvoice}
          setTotalInvoice={setTotalInvoice}
          invoiceNotRealized={invoiceNotRealized}
          setInvoiceNotRealized={setInvoiceNotRealized}
          sunkCosts={sunkCosts}
          setSunkCosts={setSunkCosts}
          setOnSubmit={setOnSubmit}
        />
      </Box>
      {<Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          ContentProps={{
            sx: {
              border: "1px solid #B7EB8F",
              background: "#F6FFED",
              borderRadius: "2px",
              color: "black",
              display: "flex",
              alignItems: "center"
            }
          }}
          autoHideDuration={1000}
          message={
            <Stack direction="row" spacing={1} alignItems="center">
              <CheckCircleIcon sx={{ color: "#52c41a" }} />
              <span>Portfolio saved successfully!</span>
            </Stack>
          }
          key={vertical + horizontal}
        />
      </Box>}
    </Box>
  );
}

export default PortFolioStatus;
