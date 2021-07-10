/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid
} from '@material-ui/core';
import PerfectScrollbar from 'react-perfect-scrollbar';
import firebase from 'firebase/app';

const ProductList = () => {
  const [officers, setOfficers] = useState([]);
  const db = firebase.firestore();

  useEffect(() => {
    const unsubscribe = db.collection('officers').onSnapshot((querySnapshot) => {
      const inc = [];
      querySnapshot.forEach((doc) => {
        inc.push({ ...doc.data(), _id: doc.id });
      });
      setOfficers(inc);
    });
    return () => unsubscribe();
  }, [db]);

  const handleClick = async () => {
    try {
      const resp1 = await db.collection('officers').where('status', '==', true).get();
      const batch = firebase.firestore().batch();
      resp1.docs.forEach((doc) => {
        const docRef = firebase.firestore().collection('officers').doc(doc.id);
        batch.update(docRef, { status: false });
      });
      await batch.commit();
      // console.log('officer collection updated');
      const resp2 = await db.collection('incidents').where('status', '==', 'active').get();
      const batch2 = firebase.firestore().batch();
      resp2.docs.forEach((doc2) => {
        const docRef = firebase.firestore().collection('incidents').doc(doc2.id);
        batch2.update(docRef, { status: 'resolved' });
      });
      await batch2.commit();
      // console.log('updated all documents');
    } catch (error) {
      // console.log('error', error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Officers</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Box sx={{ pt: 1 }}>
            <Card>
              <Grid
                item
                lg={4}
                md={6}
                xl={3}
                xs={12}
                sx={{ pt: 1 }}
              >
                <Button variant="contained" color="primary" onClick={handleClick}>
                  Recall Active Personnel
                </Button>
              </Grid>
              <Divider />
              <CardHeader title="All Available Officers" />
              <Divider />
              <PerfectScrollbar>
                <Box sx={{ minWidth: 800 }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          Officer ID
                        </TableCell>
                        <TableCell>
                          Full Name
                        </TableCell>
                        <TableCell>
                          Gender
                        </TableCell>
                        <TableCell>
                          Long
                        </TableCell>
                        <TableCell>
                          Lat
                        </TableCell>
                        <TableCell>
                          Status
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {officers.map((officer) => (
                        <TableRow
                          hover
                          key={officer._id}
                        >
                          <TableCell>
                            {officer.id}
                          </TableCell>
                          <TableCell>
                            {officer.full_name}
                          </TableCell>
                          <TableCell>
                            {officer.gender}
                          </TableCell>
                          <TableCell>
                            {officer.longitude}
                          </TableCell>
                          <TableCell>
                            {officer.latitude}
                          </TableCell>
                          <TableCell>
                            <Chip
                              color={(officer.status === true) ? 'success' : 'warning'}
                              label={(officer.status === true) ? 'ACTIVE' : 'NOT ACTIVE'}
                              size="small"
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </PerfectScrollbar>
            </Card>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ProductList;
