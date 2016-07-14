export const API_ROUTES = {
    login:         (base) => `${base}/login`,
    users:         (base) => `${base}/users`,
    userDetail:    (base, userId) => `${base}/users/${userId}`,
    ideas:         (base) => `${base}/ideas`,
    ideaDetail:    (base, uuid) => `${base}/ideas/${uuid}`,
    projects:      (base) => `${base}/projects`,
    comments:      (base, entity, uuid) => `${base}/${entity}/${uuid}/comments`,
    reactions:  (base, entity, uuid) => `${base}/${entity}/${uuid}/reactions`,
    joinProject:(base, uuid) => `${base}/projects/${uuid}/participants`,
    ideaPromotion: (base, uuid) => `${base}/ideas/${uuid}/promote`
};
