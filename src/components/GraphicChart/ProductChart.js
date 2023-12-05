import React from "react";
import Chart from "react-apexcharts";

const ProductChart = () => {
  const data = {
    series: [
      {
        name: "Total Produk",
        data: [90, 40, 60, 30, 45, 20, 25]
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
        colors: ["#FF69A5"],
        type: "gradient"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        colors: ["#FF69A5"]
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
    <div className="ProductChart">
      <Chart options={data.options} series={data.series} type="area" />
    </div>
  );
};

export default ProductChart;
