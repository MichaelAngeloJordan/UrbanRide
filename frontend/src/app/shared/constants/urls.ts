import { environment } from "src/environments/environment";

const BASE_URL = environment.production? '' : 'http://localhost:5000';

export const CARS_URL = BASE_URL + '/api/cars';
export const CARS_TAGS_URL = CARS_URL + '/tags';
export const CARS_BY_SEARCH_URL = CARS_URL + '/search/';
export const CARS_BY_TAG_URL = CARS_URL + '/tag/';
export const CAR_BY_ID_URL = CARS_URL + '/';


export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';


export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';
export const ORDER_TRACK_URL = ORDERS_URL + '/track/';
