import { useRouteLoaderData } from "react-router";
import type { loader, SiteMode } from "~/root";

export function useEnv() {
  const rootData = useRouteLoaderData<typeof loader>("root");

  if (!rootData?.env) {
    throw new Error("Env data not available");
  }
  
  return rootData.env;
}

export function useSiteMode(): SiteMode {
  const env = useEnv();
  return env.site_mode;
}