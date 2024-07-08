import React from 'react'
import {Button, Col, Result, Row} from 'antd'
import {Link} from 'react-router-dom'

function Error404() {
  return (
    <Row align="middle" justify="center" style={{height: '100vh'}}>
      <Col>
        <Result
          status="404"
          title="404"
          subTitle="존재하지 않는 페이지입니다"
          extra={
            <Link to="/">
              <Button type="primary">메인으로</Button>
            </Link>
          }
        />
      </Col>
    </Row>
  )
}

export default Error404
