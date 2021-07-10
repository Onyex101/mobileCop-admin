/* eslint-disable react/prop-types */
import React from 'react';
import moment from 'moment';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import adminLogo from '../../assets/images/avatar1.png';

// const user = {
//   avatar: '/static/images/avatars/avatar_6.png',
//   city: 'Los Angeles',
//   country: 'USA',
//   jobTitle: 'Senior Developer',
//   name: 'Katarina Smith',
//   timezone: 'GTM-1'
// };

const AccountProfile = ({ userDetails }) => {
  const user = userDetails;

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={adminLogo}
            sx={{
              height: 100,
              width: 100
            }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {`${user.firstName} ${user.lastName}`}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            Lagos, Nigeria
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {/* {`${moment().format('hh:mm A')} ${user.timezone}`} */}
            {moment().format('hh:mm A')}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      {/* <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default AccountProfile;
