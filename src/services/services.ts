import axios from 'axios';
import {API_KEY, BASE_URL} from '../constants';

export const getSectionsList = async () => {
  return axios
    .get(`${BASE_URL}news/v3/content/section-list.json?api-key=${API_KEY}`)
    .then(response => {
      return response.data.results;
    })
    .catch(error => console.log('getSectionsList error ', error));
};

export const getStoriesBySection = async (section: string) => {
  return axios
    .get(`${BASE_URL}topstories/v2/${section}.json?api-key=${API_KEY}`)
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      console.log('getStories error ', error);
      return [];
    });
};

export const getAllArticles = async () => {
  return axios
    .get(`${BASE_URL}search/v2/articlesearch.json?api-key=${API_KEY}`)
    .then(response => {
      return response.data.response.docs;
    })
    .catch(error => console.log('getAllArticles error ', error));
};
