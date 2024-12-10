import React, { Component } from "react";
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
import "./HomePage.css"; // Import the CSS file

const data = [
  {
    name: "प्रचार प्रसार सम्बन्धी",
    "अहिलेसम्मको गुनासो": 7,
    "आजको गुनासो": 0,
  },
  {
    name: "इन्जिनियरिङ सेवा",
    "अहिलेसम्मको गुनासो": 4,
    "आजको गुनासो": 0,
  },
  {
    name: "उपचार सम्बन्धी",
    "अहिलेसम्मको गुनासो": 5,
    "आजको गुनासो": 3,
  },
  {
    name: "खाध्यान्न सम्बन्धी",
    "अहिलेसम्मको गुनासो": 5,
    "आजको गुनासो": 0,
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
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
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
      </>
    );
  }
}

export default HomePage;
