import { api } from "../config/api";

const campaignService = {
  getAllCampaign() {
    return api.get("/campaigns");
  },
  getCampaign(id) {
    return api.get(`/campaigns/${id}`);
  },
  addCampaign(payload) {
    return api.post(`/campaigns`, payload);
  },
};

export default campaignService;
