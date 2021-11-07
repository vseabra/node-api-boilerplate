import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * ProxyExpress
 *
 * Classe para conexão com servidor externo
 */
export default class ProxyExpress {
    /**
     * request
     *
     * Executa uma requisição ao servidor externo
     *
     * @param data - Dados da requisição
     *
     * @returns Resposta da requisição
     */
    public static async request(data: AxiosRequestConfig): Promise<any> {
        try {
            const response: AxiosResponse<any> = await axios(data);
            return response.data;
        } catch (error) {
            throw new Error('Erro ao conectar com servidor externo');
        }
    }
}
