export const API_ROUTES = {
    users:      (base) => `${base}/users`,
    userDetail: (base, userId) => `${base}/users/${userId}`,
    ideas:      (base) => `${base}/ideas`
};
