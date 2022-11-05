export const getBaseUrl = () => {
    return "/api";
};
export const URLS = {
    // admin
    ADMIN_CUSTOMERS: () => `${getBaseUrl()}/admin/user-manager`,
    // front
    ADMIN_LOGIN: () => `${getBaseUrl()}/admin/login`,
    AMIN_LOGOUT: () => `${getBaseUrl()}/admin/logout`,
    // customer
    CUSTOMER_LOGIN: () => `${getBaseUrl()}/customer/login`

}
