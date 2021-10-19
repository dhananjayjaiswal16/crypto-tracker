import React from 'react';
import { Line } from 'react-chartjs-2';
import { Row, Col, Typography } from 'antd'


const { Title } = Typography;
const Charts = ({ currentPrice, coinName, coinHistory }) => {
    const price = [];
    const timeStamp = [];
    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        price.push(coinHistory?.data?.history[i].price);
        timeStamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }

    const data = {
        labels: timeStamp,
        datasets: [
            {
                label: 'Price is USD ($)',
                data: price,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd'
            }
        ]
    }
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }
    return (
        <>
            <Row className='chart-header'>
                <Title className='chart-title' level={2}>
                    {coinName} chart
                </Title>
                <Col className='price-container'>
                    <Title className='price-change' level={5}>
                        Change: {coinHistory?.data?.change}%
                    </Title>
                    <Title className='current-price' level={5}>
                        Last Traded Price: ${currentPrice}
                    </Title>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </>
    )
}

export default Charts;
