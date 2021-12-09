import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Dollarsigngray from "../../../assets/images/dollar-sign-gray.png";
import Trophygray from "../../../assets/images/trophy-gray.png";
import Winninggray from "../../../assets/images/winning-gray.png";
import Losinggray from "../../../assets/images/losing-gray.png";

export default function Events() {
  return (
    <div
      className="border-blue border rounded-6 w-100"
      style={{ minHeight: "480px" }}
    >
      <Row className="g-0 pt-4 ps-4">
        <Col className="color-pink font-weight-500 font-size-18">
          Last Event
        </Col>
      </Row>
      <Row className="g-0 pt-2 ps-4 pb-4 border-bottom-lightgray border-bottom">
        <Col className="color-white font-weight-500">Closing Rate</Col>
        <Col className="color-light-green text-end pe-4 font-weight-500">
          $596.00
        </Col>
      </Row>
      <Row className="g-0 pt-2 ps-4 pb-4 border-bottom-lightgray border-bottom">
        <Col className="color-light-gray font-weight-400 pt-2 font-size-18">
          2x Payout for winner<span className="pe-2"></span> |{" "}
          <span className="ps-2"></span>0.5x for losers
        </Col>
      </Row>

      {/* 4-cards */}

      <Row className="g-0 ps-4 pt-4">
        <Col
          className="bg-gray rounded-6 w-100 color-white ps-3 pt-2 me-3"
          style={{ minHeight: "120px" }}
        >
          <Row className="g-0">
            <Col>
              <Image
                className="mt-2 me-0 pe-0"
                style={{ height: "100%", maxHeight: "80px" }}
                src={Dollarsigngray}
                alt="dollar sign"
              />
            </Col>
            <Col className="pe-3 mt-3">
              <Row className="g-0">
                <Col className="font-size-14 color-light-gray font-weight-500">
                  Pool Token
                </Col>
                <Col className="color-white font-size-25">$10</Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          className="bg-gray rounded-6 w-100 color-white ps-3 pt-2 me-3"
          style={{ minHeight: "120px" }}
        >
          <Row className="g-0">
            <Col>
              <Image
                className="mt-2 me-0 pe-0"
                style={{ height: "100%", maxHeight: "80px" }}
                src={Trophygray}
                alt="dollar sign"
              />
            </Col>
            <Col className="pe-3 mt-3 ps-0">
              <Row className="g-0">
                <Col className="font-size-14 color-light-gray font-weight-500">
                  Pool Amount
                </Col>
                <Col className="color-white font-size-25">$1000</Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="g-0 ps-4 pt-4">
        <Col
          className="bg-gray rounded-6 w-100 color-white ps-3 pt-2 me-3"
          style={{ minHeight: "120px" }}
        >
          <Row className="g-0">
            <Col>
              <Image
                className="mt-2 me-0 pe-0"
                style={{ height: "100%", maxHeight: "80px" }}
                src={Winninggray}
                alt="dollar sign"
              />
            </Col>
            <Col className="pe-3 mt-3">
              <Row className="g-0">
                <Col className="font-size-14 color-light-gray font-weight-500">
                  Winning
                </Col>
                <Col className="color-white font-size-25">$600</Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col
          className="bg-gray rounded-6 w-100 color-white ps-3 pt-2 me-3"
          style={{ minHeight: "120px" }}
        >
          <Row className="g-0">
            <Col>
              <Image
                className="mt-2 me-0 pe-0"
                style={{ height: "100%", maxHeight: "80px" }}
                src={Losinggray}
                alt="dollar sign"
              />
            </Col>
            <Col className="pe-3 mt-3">
              <Row className="g-0">
                <Col className="font-size-14 color-light-gray font-weight-500">
                  Losing
                </Col>
                <Col className="color-white font-size-25">$400</Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      {/*  */}
    </div>
  );
}
