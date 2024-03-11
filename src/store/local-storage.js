// const base = "http://localhost:5000/";
const base = "https://asm02-backend.onrender.com/";
export const url_transactions_admin = base + "transactions/admin/transactions";

export const url_hotels_admin = base + "hotels/admin/";

export const url_hotels_admin_all = url_hotels_admin + "hotels/";

export const url_hotels_admin_delete = url_hotels_admin + "delete-hotel/";

export const url_hotels_admin_create = url_hotels_admin + "create-hotel/";

export const url_hotels_admin_edit = url_hotels_admin + "edit-hotel/";

export const url_rooms_admin = base + "rooms/";

export const url_rooms_admin_all = url_rooms_admin + "rooms";

export const url_rooms_admin_create = url_rooms_admin + "create-room";

export const url_rooms_admin_edit = url_rooms_admin + "edit-room";

export const url_rooms_admin_delete = url_rooms_admin + "delete-room";

const API_URL_USER = base + "users/";

export const url_admin_login = API_URL_USER + "admin-login";

export const url_users_all = API_URL_USER + "users";
