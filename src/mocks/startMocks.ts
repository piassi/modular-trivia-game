import { worker } from './browser';

export const startMocks = (): Promise<ServiceWorkerRegistration> => worker().start();
