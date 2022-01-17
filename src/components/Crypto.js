import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';

import { Col, Row, Typography, Select } from 'antd';

import { useGetCryptoDetailQuery, useGetCryptoHistoryQuery } from '../sevices/cryptoApi';

import Chart from './Charts';
import Loader from './Loader';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

const Crypto = () => {
  const { coinId } = useParams();
  console.log("coinId in crypto jsx", coinId);
  const [timePeriod, setTimePeriod] = useState('24h');
  const { data, isFetching } = useGetCryptoDetailQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod });
  const cryptoDetails = data?.data?.coin;
  console.log("cryptoDetails", cryptoDetails);
  console.log("coinHistory", coinHistory);
  if (isFetching) return <Loader />;

  const time = ['3h', '24h', '7d', '30d', '1y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails.rank, icon: <NumberOutlined /> },
    // { title: '24h Volume', value: `$ ${cryptoDetails.24hVolume && millify(cryptoDetails.24hVolume) }`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Total Supply', value: `$ ${millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];


  return (
    <Col className='coin-detail-container'>
      <Col className='coin-heading-container'>
        <Title className='coin-name' level={2}>
          {cryptoDetails.name}({cryptoDetails.symbol})
                </Title>
        <p>
          {cryptoDetails.name} live price in USD
                </p>
      </Col>
      <Select className='select-timeperiod' placeholder='Select Timeperiod' defaultValue='24h' onChange={(value) => setTimePeriod(value)} >
        {time.map((timePeriod) => (
          <Option key={timePeriod}>{timePeriod}</Option>
        ))}
      </Select>
      <Chart currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails.name} coinHistory={coinHistory} />
      <Col className='stats-container'>
        <Col className='coin-value-statistics'>
          <Col className='coin-value-statistics-heading'>
            <Title className='coin-details-heading' level={3}>
              {cryptoDetails.name} Statistics
                        </Title>
            <p>
              Overview of {cryptoDetails.name} stats
                        </p>
          </Col>
          {stats.map(({ title, value, icon }) => (
            <Col className='coin-stats'>
              <Col className='coin-stats-name'>
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className='stats'>{value}</Text>
            </Col>
          ))}
        </Col>
        <Col className='other-stats-info'>
          <Col className='coin-value-statistics-heading'>
            <Title className='coin-details-heading' level={3}>
              {cryptoDetails.name} Statistics
                        </Title>
            <p>
              Overview of {cryptoDetails.name} stats
                        </p>
          </Col>
          {genericStats.map(({ title, value, icon }) => (
            <Col className='coin-stats'>
              <Col className='coin-stats-name'>
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className='stats'>{value}</Text>
            </Col>
          ))}
        </Col>
      </Col>
      <Col className='coin-desc-link'>
        <Row className='coin-desc'>
          <Title className='coin-details-heading' level={3}>
            More about {cryptoDetails.name}

          </Title>
          {HTMLReactParser(cryptoDetails.description)}
        </Row>
        <Col className='coin-links'>
          <Title className='coin-details-heading' level={3}>
            {cryptoDetails.name} important links
                    </Title>
          {cryptoDetails?.links?.map((link) => (
            <Row className='coin-link' key={link.name}>
              <Title className='link-name' level={5}>
                {link.type}
              </Title>
              <a href={link.url}>
                {link.name}
              </a>
            </Row>
          ))}
        </Col>
      </Col>
    </Col>
  )
}

export default Crypto;