export const getBaseUrl = () => {
    return "/api";
};
export const URLS = {
    // admin
    ADMIN_CUSTOMERS: () => `${getBaseUrl()}/admin/user-manager`,
    ADMIN_CUSTOMERS_CREATE: () => `${getBaseUrl()}/admin/user-created`,
    ADMIN_CUSTOMERS_UPDATE: (id) => `${getBaseUrl()}/admin/user-updated/${id}`,
    ADMIN_CUSTOMERS_DELETE: (id) => `${getBaseUrl()}/admin/user-deleted/${id}`,
    // front
    ADMIN_LOGIN: () => `${getBaseUrl()}/admin/login`,
    AMIN_LOGOUT: () => `${getBaseUrl()}/admin/logout`,
    // customer
    CUSTOMER_LOGIN: () => `${getBaseUrl()}/customer/login`

}
