import { fetchRecords, createUpdateRecord } from "../components/apiServices";

export const fetchPortfolioData = async (apiUrl, dropdown= [], setEngagementDirector, setDeliveryDirector, setDeliveryManager, setBuHead, setProtfolioStatus) => {

    try {
        const promises = dropdown.map(async (name) => {

            const url = `${apiUrl}/dropdown/portfolio_status/${name}`;

            const response = await fetchRecords(url, false, false, false);

            return { name, response: response !== null ? response : "" };
        });

        const results = await Promise.all(promises);

        // Process each result and set the corresponding state
        results.forEach(({ name, response }) => {

            if (name === "engagement_director") {
                response && setEngagementDirector(response);
            } else if (name === "delivery_director") {
                response && setDeliveryDirector(response);
            } else if (name === "delivery_manager") {
                response && setDeliveryManager(response);
            } else if (name === "bu_head") {
                response && setBuHead(response);
            } else if (name === "portfolio_status") {
                response && setProtfolioStatus(response);
            }
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const CreateUpdatePortFolioStatus = async (row, editProject, changePortfolioStatus, selectedMonth, selectedYear, apiUrl, selectedBuHead, selectedEngagementDirector, selectedDeliveryDirector, selectedDeliveryManager,
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
    sunkCosts
) => {
    try {
        const url = editProject ? `update/portfolio/${row.portfolio_id}` : `submit_all/`;
        const data = {
            "portfolio_data": {
                "month_year": `${selectedMonth} ${selectedYear}`,
                "bu_head": selectedBuHead,
                "engagement_director": selectedEngagementDirector,
                "delivery_director": selectedDeliveryDirector,
                "delivery_manager": selectedDeliveryManager,
                "portfolio_status": changePortfolioStatus,
                "new_projects_en": newProjects,
                "in_flight_ee": inFlight,
                "projects_on_track": projectsOnTrack,
                "projects_at_high_risk": projectAtRisk,
                "ramp_down": rampDown,
                "churn": chrun,
                "account_name": "string",
                "fixed_billing_accounts": "string",
                "status": changePortfolioStatus
            },
            "program_data":
            {
                "new_prospects": newProspects,
                "new_initiatives": newInitiatives,
                "value_adds_delivered": valueAddsStepper,
                "value_adds_delivered_desc": valueAddsDelivered,
                "value_adds_revenue": valueAdds,
                "genai_initiatives": genAiStepper,
                "genai_desc": genAITech,
                "value_board_done": valueBoardEvaluation,
                "avb_pvb_details": avbPvbDetails,
                ...(!editProject ? { "portfolio_id": 0 } : {})
            },
            "risk_data":
            {
                "closing_risk": closure,
                "unbilled_resources": unbilledResources,
                "potential_cost_impact": costImpact,
                "potential_growth_impact": growthImpact,
                "write_off": writeOff,
                ...(!editProject ? { "portfolio_id": 0 } : {})
            },
            "resource_data":
            {
                "open_technical": techinal,
                "open_product": product,
                "open_manager": manager,
                "current_team_size": teamSize,
                "voluntary_attrition": voluntary,
                "involuntary_attrition": involuntary,
                "esat_score": employeeScore,
                "learning_certifications": learnings,
                "new_additions": additions,
                "attrition_risk": attritionRisk,
                "top_performers": topPerformers,
                "top_performers_desc": topPerformersDesc,
                ...(!editProject ? { "portfolio_id": 0 } : {}),
                "released_to_bench": 0,
                "backfills": 0,
                "utilization": 0

            },
            "customer_data":
            {
                "csat_score": csat,
                "feedback": feedback,
                "escalations": escalation,
                "escalation_desc": escalationDescription,
                "appreciations": apprecition,
                "appreciations_desc": apprecitionDescription,
                "capabilities_positioned": capabilitiesPositioned,
                "capabilities_desc": capabilitiesDescription,
                "early_warning_critical": critical,
                "early_warning_non_critical": nonCritical,
                "qbr": qbr,
                "accathons": hackathons,
                "accathons_desc": hackathonsDescribed,
                "pocs_in_flight": pocsInFlight,
                    "pocs_planned": pocsPlanned,
                    "cross_sell_opportunity": crossSellOportunity,
                    "architecture_advisory": architechtureAdvisory,
                ...(!editProject ? { "portfolio_id": 0 } : {})
            },
            "finance_data":
            {
                "total_revenue": totalRevenue,
                "budget_value": budget,
                "total_spend": totalSpend,
                "gm_percentage": gm,
                "invoice_total": totalInvoice,
                "invoice_not_realized_30d": invoiceNotRealized,
                "sunk_costs": sunkCosts,
                "forecasting_accuracy_resources": resources,
                "forecasting_accuracy_spend": spend,
                ...(!editProject ? { "portfolio_id": 0 } : {})
            }
        }
        const urlType = editProject ? "PUT" : "POST"
        const response = await createUpdateRecord(null, url, data, urlType);
        console.log(response, 'responseeee main', data)
        return response;
    } catch (error) {
        console.error("Error creating/updating portfolio status:", error);
        throw error;
    }
}