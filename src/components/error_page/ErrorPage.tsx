import React from "react";
import { useRouteError } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError();

  return (
    <Box display="flex" alignItems="center">
      <Alert
        severity="error"
        sx={{
          textAlign: "center",
          m: "20vh auto",
        }}
      >
        <Stack direction="column" spacing={2}>
          <Typography variant="h1">Oops!</Typography>
          <Typography variant="h3">
            Sorry, an unexpected error has occurred.
          </Typography>
          <Typography variant="h3">
            <i>
              {(error as Error)?.message || (error as { data?: string })?.data}
            </i>
          </Typography>
        </Stack>
      </Alert>
    </Box>
  );
};

export default ErrorPage;
