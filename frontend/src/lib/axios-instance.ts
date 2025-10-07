import type { AxiosInstance, Method } from "axios";
import axios from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export interface MutatorOptions<TData = unknown> {
  url: string;
  method: Method;
  data?: TData;
  headers?: Record<string, string>;
}

export const axiosInstanceMutator = async <TData = unknown, TResult = unknown>(
  options: MutatorOptions<TData>
): Promise<TResult> => {
  try {
    const response = await axiosInstance.request<TResult>({
      url: options.url,
      method: options.method,
      data: options.data,
      headers: options.headers,
    });
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response?.data?.message) {
      throw new Error(
        typeof error.response.data.message === "string"
          ? error.response.data.message
          : JSON.stringify(error.response.data.message)
      );
    }
    throw error;
  }
};
