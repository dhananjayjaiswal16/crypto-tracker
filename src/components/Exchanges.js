import React from 'react';
import { useGetExchangesQuery } from '../sevices/cryptoApi';
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
import { Row, Col, Collapse, Typography, Avatar } from 'antd'

const { Panel } = Collapse;
const { Text } = Typography;
const Exchanges = () => {

    const { data: exchangesData, isFetching } = useGetExchangesQuery();

    if (isFetching) return 'Loading...';
    const exchanges = exchangesData?.data?.exchanges;
    return (
        <>
            <Row>
                <Col className='row-header' span={6}>Exchanges</Col>
                <Col className='row-header' span={6}>24h Trade Volume</Col>
                <Col className='row-header' span={6}>Markets</Col>
                <Col className='row-header' span={6}>Change</Col>
            </Row>
            {exchanges.map((exchange) => (
                <Col>
                    <Collapse>
                        <Panel
                            key={exchange?.id}
                            showArrow={false}
                            header={(
                                <Row>
                                    <Col span={6}>
                                        <Text>{exchange?.rank}</Text>
                                        <Avatar className='exchange-image' src={exchange?.iconUrl}></Avatar>
                                        <Text>{exchange?.name}</Text>
                                    </Col>
                                    <Col span={6}>{millify(exchange?.volume)}</Col>
                                    <Col span={6}>{exchange?.numberOfMarkets}</Col>
                                    <Col span={6}>{millify(exchange?.marketShare)}</Col>
                                </Row>
                            )}
                        >
                            {HTMLReactParser(exchange?.description || '')}
                        </Panel>
                    </Collapse>
                </Col>
            ))}

        </>
    )
}

export default Exchanges;