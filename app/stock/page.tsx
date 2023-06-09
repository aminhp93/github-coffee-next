"use client";

import CustomFlexLayout from "@/@/components/customFlexlayout/CustomFlexlayout";
import { IJsonModel } from "flexlayout-react";
import { v4 as uuidv4 } from "uuid";

const rowId = uuidv4();
const tabSetId1 = uuidv4();
const tabSetId2 = uuidv4();

const defaultJson: IJsonModel = {
  global: {
    tabEnableFloat: true,
    tabSetMinWidth: 100,
    tabSetMinHeight: 100,
    borderMinSize: 100,
  },
  borders: [
    {
      type: "border",
      size: 467,
      location: "right",
      children: [
        {
          type: "tab",
          id: "#Todo",
          name: "Todo",
          component: "Todo",
          enableClose: false,
        },
      ],
    },
  ],
  layout: {
    type: "row",
    id: rowId,
    children: [
      {
        type: "tabset",
        id: tabSetId1,
        weight: 12.5,
        width: 620,
        children: [
          {
            type: "tab",

            id: "#StockTable",
            name: "StockTable",
            component: "StockTable",
          },
        ],
        active: true,
      },
      {
        type: "tabset",
        id: tabSetId2,
        weight: 12.5,
        children: [
          {
            type: "tab",
            id: "#StockDetail",
            name: "StockDetail",
            component: "StockDetail",
          },
        ],
        active: true,
      },
    ],
  },
};

const StockPage = () => {
  return (
    <div>
      <h1>Stock Page</h1>
      <div className="h-80 w-full">
        <CustomFlexLayout
          layoutName="flexLayoutModel_Work"
          defaultJson={defaultJson}
          componentObj={{
            Post: <div>Post</div>,
          }}
        />
      </div>
    </div>
  );
};

export default StockPage;
