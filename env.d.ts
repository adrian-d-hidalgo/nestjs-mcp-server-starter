declare namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    APP_PORT: string;
  }
}
