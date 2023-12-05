import React from "react";
import Chart from "react-apexcharts";

const BlogChart = () => {
  const data = {
    series: [
      {
        name: "Total Views",
        data: [70, 50, 60, 40, 45, 30, 55]
      }
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
        toolbar: {
          show: false
        }
      },
      fill: {
        colors: ["#FA8B0C"],
        type: "gradient"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        colors: ["#FA8B0C"]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      },
      grid: {
        show: false
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      yaxis: {
        show: false
      }
    }
  };

  return (
    <div className="BlogChart">
      <Chart options={data.options} series={data.series} type="area" />
    </div>
  );
};

export default BlogChart;
