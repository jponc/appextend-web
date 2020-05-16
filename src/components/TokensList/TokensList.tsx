import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { AppSettingsTokens } from "../../common/types";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import dayjs from "dayjs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      '& .MuiListItemText-secondary': {
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap"
      }
    },
  })
);

type TokensListProps = {
  tokens: AppSettingsTokens;
};

export const TokensList: React.FC<TokensListProps> = ({ tokens }) => {
  const classes = useStyles();
  const expirationDate = dayjs(tokens.access_token_expiration_date).format("MMMM D, YYYY hh:mm:ss A");

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemText primary="Access Token" secondary={tokens.access_token} />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Refresh Token"
          secondary={tokens.refresh_token}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary="Access Token Expiration Date"
          secondary={expirationDate}
        />
      </ListItem>
    </List>
  );
};
