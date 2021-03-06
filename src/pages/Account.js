import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import AccountProfile from 'src/components/account/AccountProfile';
import AccountProfileDetails from 'src/components/account/AccountProfileDetails';
import { useSelector } from 'react-redux';

const Account = () => {
  const user = useSelector((state) => state.firebase.profile);
  // console.log('user profile', user);

  return (
    <>
      <Helmet>
        <title>Account</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <AccountProfile userDetails={user} />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <AccountProfileDetails userDetails={user} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Account;
