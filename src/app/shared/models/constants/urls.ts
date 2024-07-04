const BASE_URL='http://localhost:5000';
//when it is in production then this will be changed to the real domain

export const FOODS_URL = BASE_URL+'/api/foods';
export const FOODS_TAGS_URL = FOODS_URL+'/tags';
export const FOODS_BY_SEARCH_URL = FOODS_URL+'/search/';
export const FOODS_BY_TAG_URL = FOODS_URL+'/tag/';
export const FOODS_BY_ID_URL = FOODS_URL+'/';

