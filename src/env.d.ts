/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_AUTH_CLIENT_ID: string;
      // Add other environment variables here if needed
    }
  }