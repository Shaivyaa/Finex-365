import React from 'react'
import { Badge, Col, Row } from 'react-bootstrap'
import { ReactComponent as Eth } from "../../../assets/svgs/ethereum.svg";
import { ReactComponent as LineGraph } from "../../../assets/svgs/graph-line.svg";


export default function Graph() {
  return (
    <div
    className="bg-light-blue rounded-6 w-100 px-4"
    style={{ minHeight: "650px" }}
  >
    <Row className="g-0 align-items-center pt-5">
      <Col>
        <Row className="g-0 align-items-center">
          <Col xs="auto" className="pe-3">
            <Eth style={{ width: "30px", height: "30px" }} />
          </Col>
          <Col>
            <span className="color-white font-weight-500">
              Ethereum Perpetual Futures
            </span>
          </Col>
        </Row>
      </Col>
      <Col className="color-white text-end font-weight-700">
        $599.00
      </Col>
    </Row>
    <Row className="g-0 align-items-center">
      <Col xs="10" className="color-light-gray font-size-14">
        <Row className="g-0 align-items-center">
          <Col className="ps-5 font-weight-500">
            Index Price: $598.00 | Predicted Funding Rate: 0.0039% in
            28 min
          </Col>
        </Row>
      </Col>
      <Col xs="2" className="text-end">
        <Badge
          bg="white"
          className="bg-green color-light-green border border-2 border-light-green font-size-14"
        >
          <LineGraph style={{ width: "15px", height: "15px" }} />
          <span className="ps-1">6.3%</span>
        </Badge>
      </Col>
    </Row>
  </div>
  )
}
