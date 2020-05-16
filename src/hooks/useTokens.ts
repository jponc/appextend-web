import { useState, useEffect } from "react";
import { AppSettingsTokens } from "../common/types";
import {
  getTokens,
  refreshTokens as refreshTokensAction,
} from "../actions/tokens";

export const useTokens = (token: string) => {
  const [tokens, setTokens] = useState<AppSettingsTokens | undefined>(
    undefined
  );
  const [doneFetchingTokens, setDoneFetchingTokens] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setTokens(await getTokens(token));
      setDoneFetchingTokens(true);
    })();
  }, [token]);

  const refreshTokens = async () => {
    setTokens(await refreshTokensAction(token));
  };

  return { tokens, doneFetchingTokens, refreshTokens };
};
