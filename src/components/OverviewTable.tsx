import React from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    children,
    label,
    type
  } as MenuItem;
}

function getDivider(key: React.Key): MenuItem {
  return {
    key: `divider-${key}`,
    type: "divider"
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Welcome", "1"),
  getDivider("1"),
  getItem("Product Capabilities", "2"),
  getDivider("2"),
  getItem("Customer Success Stories", "3"),
  getDivider("3"),
  getItem("File Sharing ", "4"),
  getDivider("4"),
  getItem("Our Deck ", "5"),
];

const OverViewTable: React.FC = () => {

  return (
    <div className="bg-white rounded-lg text-[#657372]h-40">
      <div className=" font-extrabold pl-4 text-lg h-10 ">OverView</div>
      <hr />
      <div className="w-60 flex flex-col place-items-center text-start  ">
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </div>
    </div>
  );
};

export default OverViewTable;
