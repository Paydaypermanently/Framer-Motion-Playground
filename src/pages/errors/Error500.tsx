import React from 'react'
import {Button, Col, Result, Row} from 'antd'
import {Link} from 'react-router-dom'

function Error500() {
  return (
    <Row align="middle" justify="center" style={{height: '100vh'}}>
      <Col>
        <Result
          status="500"
          title="500"
          subTitle="잠시 후 다시 시도해주세요"
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

export default Error500
