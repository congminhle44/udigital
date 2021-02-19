/** @format */

import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:1337',
});

export const clients = '/clients';

export const customers = '/customers';

export const quotes = '/quotes';

export const services = '/services';

export const works = '/works';
