import React from 'react';
import { useRouteError } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


const ErrorPage: React.FC = () => {
   const error: unknown = useRouteError();

   console.log('error: ', error);

   return (
      <Alert
         severity="error"
         sx={{
            textAlign: 'center',
         }}
      >
         <Stack direction="column" spacing={2}>
            <Typography variant='h1'>
               Oops!
            </Typography>
            <Typography variant='h3'>
               Sorry, an unexpected error has occurred.
            </Typography>
            <Typography variant='h3'>
               <i>
                  {(error as Error)?.message ||
                     (error as { statusText?: string })?.statusText}
               </i>
            </Typography>
         </Stack>
      </Alert>
   )
}

export default ErrorPage;
