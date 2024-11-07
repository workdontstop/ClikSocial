// src/global.d.ts
export {};

declare global {
  interface Window {
    google: any; // or provide a more specific type if needed
  }
}
