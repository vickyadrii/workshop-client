import {
  AddNewCampaignPage,
  CampaignDetailPage,
  CampaignListPage,
} from "./pages";

const campaignRoutes = [
  {
    path: "campaign",
    element: <CampaignListPage />,
  },
  {
    path: "campaign/:id",
    element: <CampaignDetailPage />,
  },
  {
    path: "campaign/add",
    element: <AddNewCampaignPage />,
  },
];
export default campaignRoutes;
