import {
  CampaignPage,
  CampaignListPage,
  CampaignDetailPage,
  DonationPage,
  CampaignAddPage,
} from "./pages";

const homeRoutes = [
  {
    path: "/",
    element: <CampaignPage />,
  },
  {
    path: "/campaign",
    element: <CampaignListPage />,
  },
  {
    path: "/add-campaign",
    element: <CampaignAddPage />,
  },
  {
    path: "campaign/:id",
    element: <CampaignDetailPage />,
  },
  {
    path: "/donation/:id",
    element: <DonationPage />,
  },
];
export default homeRoutes;
