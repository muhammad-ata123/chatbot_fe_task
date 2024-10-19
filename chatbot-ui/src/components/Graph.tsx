import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Graph: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null); 

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      // Cleanup the previous chart instance if it exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      if (ctx) {
        chartRef.current = new Chart(ctx, {
          type: 'bar', 
          data: {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [{
              label: 'Sales',
              data: [65, 59, 80, 81],
              backgroundColor: 'rgba(90, 152, 192, 0.2)',
              borderColor: 'rgba(75, 152, 192, 1)',
              borderWidth: 1,
            }],
          },
          options: {
            scales: {
              x: {
                type: 'category', 
                title: {
                  display: true,
                  text: 'Months',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Sales',
                },
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <Box
        sx={{
          backgroundColor: '#F4F9F8',
          boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
          color: 'black',
          borderRadius: '10px 20px 20px 20px',
          padding: '10px',
          maxWidth: '100%',
          alignSelf: 'flex-start',
        }}
      >

          <canvas ref={canvasRef} />
      </Box>
  );
};

export default Graph;
