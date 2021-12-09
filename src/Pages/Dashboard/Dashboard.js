import {
  
  Breadcrumb,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import Graph from "./Graph/Graph";
import Details from "./Details/Details";
import { useState } from "react";
import Leaderboard from "./Leaderboard/Leaderboard";
import Events from "./Events/Events";

export default function Dashboard() {
  const [leaderboard, setLeaderboard] = useState([
    {
      uid: 1,
      name: "krishnaIam123",
      winStreak: "41",
      prediction: "$601.99",
      positive: true,
      time: "12:24:48",
    },
    {
      uid: 2,
      name: "Nandanmehta",
      winStreak: "41",
      prediction: "$601.99",
      positive: true,
      time: "12:24:48",
    },
    {
      uid: 3,
      name: "NehaBhasin",
      winStreak: "41",
      prediction: "$601.99",
      positive: true,
      time: "12:24:48",
    },
    {
      uid: 4,
      name: "krishnaIam22",
      winStreak: "41",
      prediction: "$601.99",
      positive: true,
      time: "12:24:48",
    },
    {
      uid: 5,
      name: "krishnaIam22",
      winStreak: "41",
      prediction: "$601.99",
      positive: true,
      time: "12:24:48",
    },
    {
      uid: 6,
      name: "krishnaIam22",
      winStreak: "41",
      prediction: "$601.99",
      positive: true,
      time: "12:24:48",
    },
    {
      uid: 7,
      name: "krishnaIam22",
      winStreak: "41",
      prediction: "$601.99",
      positive: true,
      time: "12:24:48",
    },
    {
      uid: 8,
      name: "krishnaIam123",
      winStreak: "41",
      prediction: "$601.99",
      positive: true,
      time: "12:24:48",
    },
    {
      uid: 9,
      name: "Nandanmehta",
      winStreak: "41",
      prediction: "$601.99",
      positive: true,
      time: "12:24:48",
    },
    {
      uid: 10,
      name: "NehaBhasin",
      winStreak: "41",
      prediction: "$601.99",
      positive: true,
      time: "12:24:48",
    },
    {
      uid: 11,
      name: "krishnaIam22",
      winStreak: "41",
      prediction: "$601.99",
      positive: true,
      time: "12:24:48",
    },
    {
      uid: 12,
      name: "krishnaIam22",
      winStreak: "41",
      prediction: "$601.99",
      positive: true,
      time: "12:24:48",
    },
    {
      uid: 13,
      name: "krishnaIam22",
      winStreak: "41",
      prediction: "$601.99",
      positive: true,
      time: "12:24:48",
    },
    {
      uid: 14,
      name: "krishnaIam22",
      winStreak: "41",
      prediction: "$601.99",
      positive: true,
      time: "12:24:48",
    },
  ]);

  return (
    <div className="bg-navy-blue pt-5" style={{ minHeight: "100vh" }}>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item className="color-white">Prediction</Breadcrumb.Item>
          <Breadcrumb.Item className="color-white">
            Crypto Currency
          </Breadcrumb.Item>
          <Breadcrumb.Item className="color-white">Ethereum</Breadcrumb.Item>
          <Breadcrumb.Item className="color-white">
            Daily Closing
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row className="g-0 pt-4">
          <Col xs={8} className="pe-2">
            <Graph />
          </Col>
          <Col xs={4} className="ps-2">
            <Details />
          </Col>
        </Row>

        <Row className="g-0 pt-4 pb-5">
          <Col xs={8} className="pe-2">
            <Leaderboard leaderboard={leaderboard} />
          </Col>
          <Col xs={4} className="ps-2">
            <Events />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
