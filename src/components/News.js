import React, { useState } from 'react'
import { useGetCryptoNewsQuery } from '../sevices/cryptoNewsApi';
import { useGetCryptosQuery } from '../sevices/cryptoApi';
import { Select, Typography, Card, Row, Col, Avatar } from 'antd';
import newsImg from '../images/crypto-news-img.jpeg';
import moment from 'moment';
const { Title, Text } = Typography;
const { Option } = Select;



const News = ({ simplified }) => {

    const count = simplified ? 4 : 50;
    const { data: cryptoData } = useGetCryptosQuery(100);
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');

    const { data: cryptoNewsData } = useGetCryptoNewsQuery({ newsCategory, count });



    // console.log("cryptoNewsData", cryptoNewsData);


    return (

        <>
            {!simplified && (
                <Col>
                    <Select
                        className='select-news'
                        showSearch
                        optionFilterProp='children'
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase())}
                        placeholder='Select a cryptocurrency...'
                    >
                        <Option value='Cryptocurrency'>Cryptocurrency</Option>
                        {cryptoData?.data?.coins.map((coin) => (
                            <Option value={coin?.name}>{coin?.name}</Option>
                        ))}
                    </Select>
                </Col>
            )}
            <Row gutter={[24, 24]}>
                {cryptoNewsData?.value?.map((news) => (
                    <Col lg={12}>
                        <Card className='news-card' hoverable>
                            <a href={news?.url} target='_blank'>
                                <div className='news-image-container'>
                                    <Title className='news-title' level={4}>{news?.name}</Title>
                                    <img src={news?.image?.thumbnail?.contentUrl || newsImg} alt="News" />
                                </div>
                                <p>{news?.description}</p>
                                <div className='provider-container'>
                                    <div>
                                        <Avatar src={news?.provider[0]?.image?.thumbnail?.contentUrl || newsImg} />
                                        <Text className='provider-name'>{news?.provider[0]?.name}</Text>
                                    </div>
                                    <div>
                                        <Text>{moment(news?.datePublished).startOf('ss').fromNow()}</Text>
                                    </div>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default News;