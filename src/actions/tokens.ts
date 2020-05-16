import { config } from "../config";
import { AppSettingsTokens } from "../common/types";
import { buildHeaders } from "./utils";

export const getTokens = async (token: string): Promise<AppSettingsTokens> => {
  const url = `${config.apiHost}/tokens`;

  const res = await fetch(url, {
    headers: buildHeaders(token),
  });

  if (!res.ok) {
    throw new Error("Unauthorised");
  }

  const json = await res.json();
  return json.body;
};

export const refreshTokens = async (token: string): Promise<AppSettingsTokens> => {
  const url = `${config.apiHost}/tokens`;

  const res = await fetch(url, {
    method: "POST",
    headers: buildHeaders(token),
  });

  if (!res.ok) {
    throw new Error("Unauthorised");
  }

  const json = await res.json();
  return json.body;
};
