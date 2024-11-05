import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Statistics = () => {
    const [data, setData] = useState(null);
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        fetch('/DeviceData.json')
            .then(response => response.json())
            .then(data => {
                setData(data);
                processChartData(data.categories);
            });
    }, []);

    const processChartData = (categories) => {
        const categoryNames = [];
        const averagePrices = [];

        categories.forEach(category => {
            categoryNames.push(category.category_name);
            const totalPrice = category.items.reduce((sum, item) => sum + item.price, 0);
            const averagePrice = totalPrice / category.items.length;
            averagePrices.push(averagePrice);
        });

        setChartData({
            labels: categoryNames,
            datasets: [
                {
                    label: 'Average Price ($)',
                    data: averagePrices,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    barThickness: 20, 
                }
            ]
        });
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    autoSkip: true, 
                    maxRotation: 45, 
                    minRotation: 45, 
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Average Price ($)',
                },
            }
        }
    };

    return (
        <div style={{ width: '90%', maxWidth: '400px', margin: '0 auto', padding: '10px' }}>
            <h2 style={{ textAlign: 'center', fontSize: '20px' }}>Product Price Statistics</h2>
            {chartData.labels && (
                <div style={{ height: '300px' }}> 
                    <Bar data={chartData} options={options} />
                </div>
            )}
        </div>
    );
};

export default Statistics;


