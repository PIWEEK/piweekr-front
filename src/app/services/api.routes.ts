export const URL_BASE = "http://10.8.1.139:5000/api/v1";

export const API_ROUTES = {
    login:      (base) => `${base}/login`,
    users:      (base) => `${base}/users`,
    userDetail: (base, userId) => `${base}/users/${userId}`,
    ideas:      (base) => `${base}/ideas`,
    projects:   (base) => `${base}/projects`,
    comments:   (base, entity, uuid) => `${base}/${entity}/${uuid}/comments`
};
