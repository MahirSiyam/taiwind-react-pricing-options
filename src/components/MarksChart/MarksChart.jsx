import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {

    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;

    // console.log(marksData);

    const marksSheetData = marksData.map(studentData => {
        const student = {
            id : studentData.id,
            name : studentData.name,
            physics : studentData.marks.physics,
            chemistry : studentData.marks.chemistry,
            math : studentData.marks.math
        }

        const avarage = (student.physics + student.chemistry + student.math) / 3;
        student.avarage = avarage;

        return student;
    })

    console.log(marksSheetData);

    return (
        <div>
            <BarChart width={500} height={300} data={marksSheetData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>

                <Bar dataKey='avarage' fill='blue'></Bar>
                <Bar dataKey='physics' fill='red'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;