const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4001';
const WS_BASE_URL = (import.meta.env.VITE_WS_URL || 'ws://localhost:4001') + '?token=mysupersecret';

export const API_URL = API_BASE_URL;
export const WS_URL = WS_BASE_URL;

export const ENDPOINTS = {
    VERIFY: `${API_BASE_URL}/api/blockchain/verify`,
    ACTIONS: `${API_BASE_URL}/api/actions`,
    ACTION: `${API_BASE_URL}/api/action`
};
