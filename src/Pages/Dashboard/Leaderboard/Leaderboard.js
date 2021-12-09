import React from "react";
import { Badge, Col, Image, Row, Table } from "react-bootstrap";
import Arroworange from "../../../assets/images/arrow-orange.png";

export default function Leaderboard({ leaderboard }) {
  return (
    <div
      className="border-blue border rounded-6 w-100 px-4"
      style={{ minHeight: "480px" }}
    >
      <Row className="g-0 pt-4 ps-1">
        <Col className="color-pink font-weight-500 font-size-18">
          Leaderboard
        </Col>
      </Row>
      <div className="overflow-auto" style={{ maxHeight: "380px" }}>
        <Table striped bordered hover className="mt-4 border-0">
          <thead className="">
            <tr className="border-0">
              <th className="border-0 color-light-gray font-weight-500 font-size-14 pe-5 text-start">
                User
              </th>
              <th className="border-0 color-light-gray font-weight-500 font-size-14">
                Winning Streak
              </th>
              <th className="border-0 color-light-gray font-weight-500 font-size-14">
                Prediction
              </th>
              <th className="border-0 color-light-gray font-weight-500 font-size-14">
                Winning Time
              </th>
            </tr>
          </thead>
          <tbody>
            {leaderboard
              ? leaderboard.map((user, idx) => (
                  <tr key={idx}>
                    <td className="border-0">
                      <Badge
                        bg="white"
                        className="bg-grayish  border-2 border-pink p-2 "
                      >
                        <span className="py-5 font-size-12">{user?.uid}</span>
                      </Badge>
                      <span className="py-5 font-size-12 color-white ps-2 font-weight-700">
                        {user?.name}
                      </span>
                    </td>
                    <td className="border-0">
                      <span className="py-5 font-size-12 color-white ps-2 font-weight-700">
                        {user?.winStreak}
                      </span>
                    </td>
                    <td className="border-0  text-start">
                      <Image src={Arroworange} />
                      <span className="py-5 font-size-12 color-orange ps-2 font-weight-700">
                        {user?.prediction}
                      </span>
                    </td>
                    <td className="border-0">
                      <span className="py-5 font-size-12 color-white ps-2 font-weight-700">
                        {user?.time}
                      </span>
                    </td>
                  </tr>
                ))
              : null}
            {/*  */}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
