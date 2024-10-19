import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { Chart, registerables, ChartConfiguration, ChartData, Point } from 'chart.js';

Chart.register(...registerables);

interface GraphProps {
  data: {
    type: 'bar' | 'line' | 'pie';
    labels: string[];
    datasets: {
      label: string;
      data: (number | null | [number, number])[]; 
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
    }[];
  };
}

const Graph: React.FC<GraphProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart<'bar' | 'line' | 'pie', (number | [number, number] | Point | null)[], unknown> | null>(null); // Updated type to allow the new data structure

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      if (chartRef.current) {
        chartRef.current.destroy();
      }

      if (ctx) {
        const chartData: ChartData<'bar' | 'line' | 'pie', (number | [number, number] | null)[], unknown> = {
          labels: data.labels,
          datasets: data.datasets.map(dataset => ({
            label: dataset.label,
            data: dataset.data, 
            backgroundColor: dataset.backgroundColor,
            borderColor: dataset.borderColor,
            borderWidth: dataset.borderWidth,
          })),
        };

        const chartConfig: ChartConfiguration<'bar' | 'line' | 'pie', (number | [number, number] | null)[], unknown> = {
          type: data.type,
          data: chartData,
          options: {
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Labels',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Values',
                },
              },
            },
          },
        };

        chartRef.current = new Chart(ctx, chartConfig);
      }
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <Box
    sx={{
      backgroundColor: '#F4F9F8',
      boxShadow: '0 6px 10px rgba(0, 0, 0, 0.1)',
      color: 'black',
      borderRadius: '10px 20px 20px 20px',
      padding: '10px',
      width: '100%', 
      height: 'auto', 
      position: 'relative', 
      overflow: 'hidden', 
    }}
    >
      <canvas ref={canvasRef} />
    </Box>
  );
};

export default Graph;
