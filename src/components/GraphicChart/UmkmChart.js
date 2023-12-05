import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getToken } from "../../utils/storage";
import fetch from "../../utils/fetch";

const UmkmChart = () => {
  const [umkmData, setUmkmData] = useState([]);

  useEffect(() => {
    fetchUmkmData();
  }, []);

  const fetchUmkmData = async () => {
    const token = getToken();
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/user/umkm`,
      params : {
        active_on : "sukabirus"
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  
    try {
      const response = await fetch(options);
      const umkmList = response.data;
      const umkmSeries = umkmList.map((umkm, index) => {
        return umkm.status ? index + 1 : -index - 1;
      });

      setUmkmData(prevData => [...prevData, ...umkmSeries]);
    } catch (err) {
      console.error(err);
    }
  };
  const chartData = {
    series: [
      {
        name: "Total UMKM",
        data: umkmData,
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
        toolbar: {
          show: false,
        },
      },
      fill: {
        colors: ["#5F63F2"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#5F63F2"],
      },
      tooltip: {
        enabled: true,
      },
      grid: {
        show: false,
      },
      xaxis: {
        categories: umkmData.map((_, index) => `Day ${index + 1}`),
      },
      yaxis: {
        show: false,
      },
    },
  };

  if (umkmData.length === 0) {
    return null; 
  }

  return (
    <div className="UmkmChart">
      <Chart options={chartData.options} series={chartData.series} type="area" />
    </div>
  );
};

export default UmkmChart;
