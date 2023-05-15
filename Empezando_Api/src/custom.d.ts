declare namespace NodeJS {
    interface ProcessEnv {
      DB_NAME: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_HOST : string;
      // Agrega aquí otras variables de entorno que necesites
    }
  }