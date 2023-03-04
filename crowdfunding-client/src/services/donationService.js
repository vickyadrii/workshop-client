import { api } from "../config/api";

const donationService = {
  addDonation(payload) {
    return api.post("/donations", payload);
  },
};

export default donationService;
