import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, Pie, Button, LineChart, SparkLine } from "../Components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../Contexts/ContextProvider";
import product9 from "../data/product9.jpg";
const currentColor = "blue";
const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Power Generation</p>
              <p className="text-2xl">500 kwh</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap  justify-center gap-1 items-center">
          {earningData.map((items) => (
            <div
              key={items.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{
                  color: items.iconColor,
                  backgroundColor: items.iconBg,
                }}
                className="text-2xl opacity-0.9 rounded-full hover:drop-shadow-xl"
              >
                {items.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold ">{items.amount}</span>
                <span className={`text-sm text-${items.pcColor} ml-2`}>
                  {items.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{items.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 justify-center flex-wrap">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780">
          <div className="flex justify-between m-4">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center text-gray-600 hover:drop-shadow-xl">
                <span>
                  <BsDot className="text-gray-500 text-2xl" />
                </span>
                <span>Expected</span>
              </p>
              <p className="flex items-centerhover:drop-shadow-xl text-green-500">
                <span>
                  <BsDot className="text-gray-500 text-2xl" />
                </span>
                <span>Actual</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-2 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p className="flex ">
                  <span className="text-3xl font-semibold ">$85,525</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-500 text-sm mt-2 ml-2">
                    23%
                  </span>
                </p>
                <p className="text-gray-500">Savings</p>
              </div>
              <div className="mt-8">
                <p className="flex ">
                  <span className="text-3xl font-semibold ">$48,525</span>
                </p>
                <p className="text-gray-500">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColour="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor="blue"
                  text="Download Report"
                  borderRadius="10px"
                ></Button>
              </div>
            </div>
            <div>
              <Stacked width="360" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
