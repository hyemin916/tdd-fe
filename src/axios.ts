import axios from 'axios';

import { mercuryBaseUrl, productApiBaseUrl } from '@/config';

const token = JSON.parse(localStorage.getItem('accessToken') ?? 'null');

export const productV1Api = axios.create({
  baseURL: `${productApiBaseUrl}/v1`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const mercuryApi = axios.create({
  baseURL: mercuryBaseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
