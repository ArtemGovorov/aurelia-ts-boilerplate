declare namespace AppConfig {
  export interface IAppConfigEnv {
    API_URL: string;
    LOG_LEVEL: string;
  }

  export interface IAppConfig {
    NAME: string;
    VERSION: string;
    PLATFORM: string;
    TARGET: string;
    CONFIG: IAppConfigEnv;
  }
}
