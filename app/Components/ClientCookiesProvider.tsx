'use client';
import { CookiesProvider } from "react-cookie";

export const ClientCookiesProvider: typeof CookiesProvider = (props) => (
  <CookiesProvider {...props} />
);