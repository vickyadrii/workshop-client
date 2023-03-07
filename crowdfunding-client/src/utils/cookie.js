import Cookie from "js-cookie";

export const CROWDFUNDING_COOKIE = "CROWDFUNDING_COOKIE";

export const setAccessTokenCookie = (accessToken) => {
  Cookie.set(CROWDFUNDING_COOKIE, accessToken);
};

export const getAccessTokenCookie = () => {
  const accessTokenCookie = Cookie.get(CROWDFUNDING_COOKIE);
  return accessTokenCookie ?? null;
};

export const clearAccessTokenCookie = () => {
  Cookie.remove(CROWDFUNDING_COOKIE);
};
