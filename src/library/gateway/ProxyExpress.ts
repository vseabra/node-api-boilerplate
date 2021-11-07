import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * ProxyExpress
 *
 * Faz conexão com servidor externo, e aplica request e response interceptor
 */
export default class ProxyExpress {
    /**
     * request
     *
     * Faz request a um servidor externo
     *
     * @public
     * @static
     * @param { AxiosRequestConfig } data object
     * @return { Promise<any> } response object
     */
    public static async request(data: AxiosRequestConfig): Promise<any> {
        try {
            const response: AxiosResponse<any> = await axios(data);
            return response.data;
        } catch (error) {
            throw new Error('Erro ao conectar com servidor');
        }
    }
}
