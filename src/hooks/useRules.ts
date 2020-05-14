import { useState, useEffect } from "react";
import { AppRules } from "../common/types";
import { getRules, updateRules as updateRulesAction } from "../actions/rules";

export const useRules = (token: string) => {
  const [rules, setRules] = useState<AppRules | undefined>(undefined);
  const [doneFetching, setDoneFetching] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setRules(await getRules(token));
      setDoneFetching(true);
    })();
  }, [token]);

  const updateRules = async (newRules: AppRules) => {
    setRules(await updateRulesAction(token, newRules));
  };

  return { rules, doneFetching, updateRules };
};
