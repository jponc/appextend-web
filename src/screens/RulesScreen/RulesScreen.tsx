import React from "react";
import { AppLayout } from "../../components/AppLayout";
import { useUser } from "../../context/UserContext";
import { useRules } from "../../hooks/useRules";
import { Loading } from "../../components/Loading";
import { Grid } from "@material-ui/core";
import { RulesForm } from "../../components/RulesForm";
import { AppRules } from "../../common/types";
import { useFeedback } from "../../context/FeedbackContext";

export const RulesScreen = () => {
  const { token } = useUser();
  const { rules, doneFetching, updateRules } = useRules(token);
  const { setSuccess, setError } = useFeedback();

  const onSubmitHandler = async (newRules: AppRules) => {
    try {
      await updateRules(newRules);
      setSuccess("Successfully updated rules");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <AppLayout title="Rules">
      {!doneFetching ? (
        <Loading />
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <RulesForm rules={rules} onSubmit={onSubmitHandler} />
          </Grid>
        </Grid>
      )}
    </AppLayout>
  );
};
