import React, { FC } from "react";
import "./Tabs.css";
import Button from "../Button/Button";

interface TabItem<T> {
  id: string | number;
  label: string;
  value: T;
}

interface TabsProps<T> {
  items: TabItem<T>[];
  onChange: (value: T) => void;
  activeItem: T;
}

const Tabs = <T,>({ items, onChange, activeItem }: TabsProps<T>) => {
  return (
    <div className="tabs-container">
      {items.map(({ label, id, value }) => (
        <Button
          key={id}
          label={label}
          isActive={activeItem === value}
          onClick={() => onChange(value)}
        />
      ))}
    </div>
  );
};

export default Tabs;
