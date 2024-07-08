import React from 'react'
import {Button, Col, Result, Row} from 'antd'
import {Link} from 'react-router-dom'

function Error403() {
  return (
    <Row align="middle" justify="center" style={{height: '100vh'}}>
      <Col>
        <Result
          status="403"
          title="403"
          subTitle="접근 권한이 없습니다"
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

export default Error403
