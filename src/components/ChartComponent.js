import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Grommet, Heading, Box } from "grommet";
import { grommet } from "grommet/themes";

const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Total",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "#01A982",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#707070",
            pointBackgroundColor: "#ffffff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#ffffff",
            pointHoverBorderColor: "#707070",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 5,
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "OS",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "#2AD2C9",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#707070",
            pointBackgroundColor: "#ffffff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#ffffff",
            pointHoverBorderColor: "#707070",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 5,
            data: [10, 20, 30, 40, 20, 10, 5]
        },
        {
            label: "Application",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "#FD9A69",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#707070",
            pointBackgroundColor: "#ffffff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#ffffff",
            pointHoverBorderColor: "#707070",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 5,
            data: [20, 40, 10, 20, 60, 70, 30]
        }
    ]
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    max: 100,
                    min: 0,
                    stepSize: 50
                }
            }
        ]
    },
    legend: {
        labels: {
            boxWidth: 15,
            fontSize: 15,
        }
    }
};

export default class ChartComponent extends Component {
    render() {
        return (
            <Grommet theme={grommet}>
                <Box align="left" pad="medium">
                    <Heading level="2" margin="none" size="small">
                        Compliance Timeline- using react-chartjs-2
                    </Heading>
                    <div>
                        <Line ref="chart" data={data} options={options} />
                    </div>
                </Box>
            </Grommet >
        );
    }

    componentDidMount() {
        const { datasets } = this.refs.chart.chartInstance.data;
        console.log(datasets[0].data);
    }
}
