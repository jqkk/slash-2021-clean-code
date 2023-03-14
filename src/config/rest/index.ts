import axios from 'axios';

import { BASE_URL } from './path';

import type { AxiosInstance, AxiosRequestConfig, AxiosPromise } from 'axios';

type RequestType = 'DEFAULT' | 'FILE';

// FIXME: baseURL 상수로 빼기.

const getInterceptedInstance = (requestType: RequestType) =>
  setInterceptors(
    axios.create({
      baseURL: BASE_URL,
      timeout: 3000,
    }),
    requestType,
  );

const setInterceptors = (instance: AxiosInstance, requestType: RequestType) => {
  instance.interceptors.request.use((config) => {
    if (requestType === 'FILE') {
      config.headers['Content-Type'] = 'multipart/form-data';
    }

    return config;
  });

  return instance;
};

type SelectedMethod = 'get' | 'post' | 'patch' | 'put' | 'delete';

const attachMethod =
  (method: SelectedMethod) =>
  (axiosInstance: AxiosInstance) =>
  <T = unknown>(
    url: string,
    config?: Omit<AxiosRequestConfig, 'url' | 'method'>,
  ): AxiosPromise<T> =>
    axiosInstance(url, { method, ...config });

// FIXME: authorizationRequest Axios 인스턴스와 unAuthorizationRequest Axios 인스턴스를 분리시켜 authorizationRequest Axios 인스턴스의 요청 인터셉터에 accessToken을 넣어주는 로직을 추가해준다.
// FIXME: authorizationRequest Axios 인스턴스와 unAuthorizationRequest Axios 인스턴스를 분리시켜 authorizationRequest Axios 인스턴스의 응답 인터셉터에 accessToken이 만료되었을 때의 로직을 추가해준다.

const instance = {
  default: getInterceptedInstance('DEFAULT'),
  file: getInterceptedInstance('FILE'),
};

export const http = {
  get: attachMethod('get')(instance.default),
  post: attachMethod('post')(instance.default),
  patch: attachMethod('patch')(instance.default),
  put: attachMethod('put')(instance.default),
  delete: attachMethod('delete')(instance.default),
  file: {
    get: attachMethod('get')(instance.file),
    post: attachMethod('post')(instance.file),
    patch: attachMethod('patch')(instance.file),
    put: attachMethod('put')(instance.file),
    delete: attachMethod('delete')(instance.file),
  },
} as const;
