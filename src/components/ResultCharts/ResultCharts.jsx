import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData =
    [
        {
          "student_id": "S001",
          "name": "Alice Johnson",
          "physics": 85,
          "chemistry": 78,
          "math": 92
        },
        {
          "student_id": "S002",
          "name": "Brian Smith",
          "physics": 74,
          "chemistry": 81,
          "math": 88
        },
        {
          "student_id": "S003",
          "name": "Catherine Lee",
          "physics": 90,
          "chemistry": 87,
          "math": 95
        },
        {
          "student_id": "S004",
          "name": "David Brown",
          "physics": 68,
          "chemistry": 72,
          "math": 70
        },
        {
          "student_id": "S005",
          "name": "Emma Davis",
          "physics": 88,
          "chemistry": 85,
          "math": 91
        },
        {
          "student_id": "S006",
          "name": "Frank Wilson",
          "physics": 76,
          "chemistry": 79,
          "math": 84
        },
        {
          "student_id": "S007",
          "name": "Grace Thomas",
          "physics": 93,
          "chemistry": 89,
          "math": 97
        },
        {
          "student_id": "S008",
          "name": "Hannah White",
          "physics": 81,
          "chemistry": 75,
          "math": 80
        },
        {
          "student_id": "S009",
          "name": "Ian Martinez",
          "physics": 69,
          "chemistry": 70,
          "math": 65
        },
        {
          "student_id": "S010",
          "name": "Julia Anderson",
          "physics": 87,
          "chemistry": 90,
          "math": 94
        }
      ];

const ResultCharts = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'math'}></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
                <Line dataKey={'physics'} stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default ResultCharts;