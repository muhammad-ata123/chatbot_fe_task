import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

interface TableDisplayProps {
  data: {
    type: string;
    columns: string[];
    rows: (string | number)[][];
  };
}

const TableDisplay: React.FC<TableDisplayProps> = ({ data }) => {
  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#F4F9F8',
        borderRadius: '10px 20px 20px 20px',
        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        height: 'auto',
        position: 'relative',
        overflow: 'hidden',
        margin: '0 auto',
      }}
    >
      <Typography variant="h6" align="center" sx={{ marginBottom: '16px' }}>
        {data.type}
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: '8px' }}>
        <Table sx={{ minWidth: 350 }} aria-label="dynamic table">
          <TableHead>
            <TableRow>
              {data.columns.map((column, index) => (
                <TableCell key={index} sx={{ fontWeight: 'bold' }}>
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableDisplay;
