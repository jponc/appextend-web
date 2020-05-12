import { config } from "../config";
import { buildHeaders } from "./utils";
import { AppRules } from "../common/types";

export const getRules = async (token: string): Promise<AppRules> => {
  const url = `${config.apiHost}/rules`;

  const res = await fetch(url, {
    headers: buildHeaders(token),
  });

  if (!res.ok) {
    throw new Error("Unauthorised");
  }

  const json = await res.json();
  return json.body;
};

export const updateRules = async (
  token: string,
  newRules: AppRules
): Promise<AppRules> => {
  const url = `${config.apiHost}/rules`;

  const res = await fetch(url, {
    method: "PUT",
    headers: buildHeaders(token),
    body: JSON.stringify({
      body: newRules,
    }),
  });

  if (!res.ok) {
    throw new Error("Error when updating new rules");
  }

  const json = await res.json();
  return json.body;
};
