import React from 'react'
import { useGetCryptoNewsQuery } from '../sevices/cryptoNewsApi';
import { Select, Typography, Card, Row, Col, Avatar } from 'antd';
import newsImg from '../images/crypto-news-img.jpeg';
import moment from 'moment';
const { Title, Text } = Typography;
const { Option } = Select;



const News = ({ simplified }) => {
    const count = simplified ? 4 : 50;
    const { data: cryptoNewsData, isFetching } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count });

    // console.log("cryptoNewsData", cryptoNewsData);


    return (
        <>

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