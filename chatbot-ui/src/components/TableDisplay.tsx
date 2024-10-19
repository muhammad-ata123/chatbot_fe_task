import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const sampleData = {
  "Service": "OrdersLookupService",
  "Latency(ms)": 200,
  "DeploymentTime": "13:45",
};

const TableDisplay: React.FC = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#F4F9F8',
        borderRadius: '12px',
        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '0 auto'
      }}
    >
      <Typography variant="h6" align="center" sx={{ marginBottom: '16px' }}>
        Service Details
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: '8px' }}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Key</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(sampleData).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell>{key}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableDisplay;
