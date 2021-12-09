import React from "react";
import { Badge, Col, Image, Row } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { ReactComponent as LineGraph } from "../../../assets/svgs/graph-line.svg";
import { ReactComponent as Eth } from "../../../assets/svgs/ethereum.svg";
import Dollarsign from "../../../assets/images/dollar-sign.png";
import Dollarsignblue from "../../../assets/images/dollar-sign-blue.png";
import Personone from "../../../assets/images/person-1.png";
import Persontwo from "../../../assets/images/person-2.png";
import Orangegraphicon from "../../../assets/images/orange-graph-icon.png";
import Bluegraphicon from "../../../assets/images/blue-graph-icon.png";

export default function Details() {
  return (
    <div
      className="bg-light-blue rounded-6 w-100"
      style={{ minHeight: "650px" }}
    >
      <Row className="g-0 pt-4 ps-4" style={{ height: "55px" }}>
        <Eth style={{ width: "55px", height: "55px" }} />
        <Col className="color-white ps-2 font-size-25">ETH</Col>
        <Col className="text-end color-white pe-4 pt-2 font-size-12 font-weight-500">
          Live Event
        </Col>
      </Row>
      <Row className="g-0 ps-5 pt-2 pb-4 font-size-14 align-items-center border-bottom-lightgray border-bottom">
        <Col className="color-light-gray ps-5 font-weight-500 text-start">
          Daily Closing
        </Col>
        <Col className="text-end color-white pe-4 pt-1 font-size-14 font-weight-500">
          Ends in 03:29:58
        </Col>
      </Row>

      <Row className="g-0 ps-4 pt-4">
        <Col className="color-light-gray">Current Rate</Col>
      </Row>
      <Row className="g-0">
        <Col className=" color-light-green font-weight-500 font-size-25 ps-4">
          $599.00
        </Col>
        <Col className="text-end pe-4">
          <Badge
            bg="white"
            className="bg-green color-light-green border border-2 border-light-green font-size-14"
          >
            <LineGraph style={{ width: "15px", height: "15px" }} />
            <span className="ps-1">$2.44</span>
          </Badge>
        </Col>
      </Row>

      <Row className="g-0 ps-4 pt-4">
        <Col
          className="bg-bluish rounded-6 w-100 color-white ps-3 pt-2 me-3"
          style={{ minHeight: "120px" }}
        >
          <Row className="g-0">
            <Col>
              <Image
                className="mt-2 me-0 pe-0"
                style={{ height: "100%", maxHeight: "80px" }}
                src={Dollarsign}
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
          className="bg-bluish rounded-6 w-100 color-white ps-3 pt-2 me-3"
          style={{ minHeight: "120px" }}
        >
          <Row className="g-0">
            <Col>
              <Image
                className="mt-2 me-0 pe-0"
                style={{ height: "100%", maxHeight: "80px" }}
                src={Dollarsignblue}
                alt="dollar sign"
              />
            </Col>
            <Col className="pe-3 mt-3">
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
          className="bg-bluish rounded-6 w-100 color-light-gray font-size-14 font-weight-500 ps-3 pt-3 me-3"
          style={{ minHeight: "150px" }}
        >
          Prediction Stats
          <Row className="g-0 pt-2">
            <Col>
              <Image
                className="mt-2"
                style={{ height: "30px" }}
                src={Personone}
                alt="dollar sign"
              />
              <span className="text-center ps-2 mt-3">Predicted Bull: 60%</span>
            </Col>
          </Row>
          <Row className="g-0">
            <Col>
              <Image
                className="mt-2"
                style={{ height: "30px" }}
                src={Persontwo}
                alt="dollar sign"
              />
              <span className="text-center ps-2 mt-3">Predicted Bear: 60%</span>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="g-0 pt-5 ps-3 text-center">
        <Col className="px-2">
          <Button className="rounded border-0 bg-orange p-3 w-100 color-white font-weight-500">
            <Image
              className="pe-1"
              style={{ width: "20px", height: "20px" }}
              src={Orangegraphicon}
              alt=" orange graph icon"
            />
            Predict Bear
          </Button>
        </Col>
        <Col className="px-2">
          <Button className="rounded border-0 p-3 w-100 bg-greenish color-white font-weight-500">
          <Image
              className="pe-1"
              style={{ width: "20px", height: "20px" }}
              src={Bluegraphicon}
              alt=" orange graph icon"
            />
            Predict Bull
          </Button>
        </Col>
      </Row>
    </div>
  );
}
