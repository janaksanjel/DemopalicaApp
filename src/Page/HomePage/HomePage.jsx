import React, { Component } from "react";
import mans from "/src/assets/mans.png";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./HomePage.css"; // Ensure this file exists and is correctly linked

// Data for the chart
const data = [
  {
    name: "इन्जिनियरिङ सेवा",
    "अहिलेसम्मको गुनासो": 4,
    "आजको गुनासो": 2,
  },
  {
    name: "उपचार सम्बन्धी",
    "अहिलेसम्मको गुनासो": 5,
    "आजको गुनासो": 3,
  },
  {
    name: "खाध्यान्न सम्बन्धी",
    "अहिलेसम्मको गुनासो": 5,
    "आजको गुनासो": 2,
  },
  {
    name: "अन्य",
    "अहिलेसम्मको गुनासो": 3,
    "आजको गुनासो": 2,
  },
];

export class HomePage extends Component {
  render() {
    return (
      <>
        <div className="home-page-container">
          <h2>गुनासोहरुको स्थिति</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 5, right: -10, left: -10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="अहिलेसम्मको गुनासो" fill="#8884d8" />
              <Bar dataKey="आजको गुनासो" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="other">
          <div className="info">
            <h1>जनतालाई सम्प्रेषण भएको सुचनाहरु</h1>
            <hr />
            <div className="today-total-wrapper">
              <div className="today">
                <img src={mans} alt="Today" />
                <h1>आज</h1>
                <h2>3</h2>
              </div>
              <div className="total">
                <img src={mans} alt="Total" />
                <h1>जम्मा</h1>
                <h2>30</h2>
              </div>
            </div>
          </div>

          <div className="info1">
            <h1>कर्मचारीहरु लाई सम्प्रेषण भएको सुचना तथा निर्देशनहरु</h1> <hr />
            <div className="today-total-wrapper">
              <div className="today1">
                <img src={mans} alt="Today" />
                <h1>आज</h1>
                <h2>5</h2>
              </div>
              <div className="total1">
                <img src={mans} alt="Total" />
                <h1>जम्मा</h1>
                <h2>50</h2>
              </div>
            </div>
          </div>

          <div className="info2">
            <h1>राहत लगत</h1> <hr />
            <div className="today-total-wrapper">
              <div className="today">
                <img src={mans} alt="Today" />
                <h1>आज</h1>
                <h2>3</h2>
              </div>
              <div className="total">
                <img src={mans} alt="Total Relief" />
                <h1>जम्मा</h1>
                <h2>15</h2>
              </div>
            </div>
          </div>
          <div className="info2">
            <h1>सहभागी जनताहरुको संख्या</h1> <hr />
            <div className="today-total-wrapper">
              <div className="today">
                <img src={mans} alt="Today" />
                <h1>आज</h1>
                <h2>3</h2>
              </div>
              <div className="total1">
                <img src={mans} alt="Participants" />
                <h1>जम्मा</h1>
                <h2>120</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
