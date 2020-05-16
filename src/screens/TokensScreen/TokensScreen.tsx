import React, { useState } from "react";
import { AppLayout } from "../../components/AppLayout";
import { useUser } from "../../context/UserContext";
import { useTokens } from "../../hooks/useTokens";
import { Loading } from "../../components/Loading";
import { TokensList } from "../../components/TokensList";
import { useFeedback } from "../../context/FeedbackContext";
import { Grid, Button } from "@material-ui/core";

export const TokensScreen = () => {
  const { token } = useUser();
  const { tokens, doneFetchingTokens, refreshTokens } = useTokens(token);
  const { setSuccess, setError } = useFeedback();

  const refreshTokensHandler = async () => {
    try {
      await refreshTokens();
      setSuccess("Successfully updated tokens");
    } catch {
      setError("Failed to refresh tokens");
    }
  }

  return (
    <AppLayout title="Tokens">
      {!doneFetchingTokens || !tokens ? (
        <Loading />
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button onClick={refreshTokensHandler} variant="contained">
              Refresh Tokens
            </Button>
          </Grid>
          <Grid item xs={12}>
            <TokensList tokens={tokens} />
          </Grid>
        </Grid>
      )}
    </AppLayout>
  );
};
