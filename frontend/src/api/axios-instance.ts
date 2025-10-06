import type { AxiosInstance, Method } from "axios";
import axios from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

interface MutatorOptions<TData = unknown> {
  url: string;
  method: Method;
  data?: TData;
  headers?: Record<string, string>;
}

export const axiosInstanceMutator = async <TData = unknown, TResult = unknown>(
  options: MutatorOptions<TData>
): Promise<TResult> => {
  const response = await axiosInstance.request<TResult>({
    url: options.url,
    method: options.method,
    data: options.data,
    headers: options.headers,
  });
  return response.data;
};
