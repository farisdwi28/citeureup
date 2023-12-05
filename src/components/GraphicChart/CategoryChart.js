import React from "react";
import Chart from "react-apexcharts";

const CategoryChart = () => {
  const data = {
    series: [12, 4, 8, 10, 2, 1],
    options: {
      chart: {
        type: "donut",
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: false,
        },
      },
      labels: [
        "Makanan Minuman",
        "Kue",
        "Fashion",
        "Kerajinan Tangan",
        "Tanaman",
        "Otomotif",
      ],
      colors: [
        "#1e1b4b",
        "#312e81",
        "#3730a3",
        "#4338ca",
        "#4f46e5",
        "#6366f1",
        "#818cf8",
      ],
      legend: {
        position: "bottom",
        marker: {
          width: 10,
          height: 10,
          strokeWidth: 0,
          strokeColor: "transparent",
        },
        itemMargin: {
          horizontal: 4,
          vertical: 15,
        },
        offsetY: 15,
      },
      stroke: {
        show: false,
      },
    },
  };

  return (
    <div className="w-[350px] h-[450px] flex justify-center items-center">
      <Chart
        options={data.options}
        series={data.series}
        type="donut"
        width={"100%"}
        height={360}
      />
    </div>
  );
};

export default CategoryChart;
