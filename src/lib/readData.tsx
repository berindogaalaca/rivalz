"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface DataItem {
  id: number;
  image: string;
  title: string;
  paragraph: string;
}

interface ConfigContextProps {
  data: DataItem[] | null;
}

const ConfigContext = createContext<ConfigContextProps>({ data: null });

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<DataItem[] | null>(null);

  useEffect(() => {
    fetch("/home.json")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching descriptions:", error));
  }, []);

  return (
    <ConfigContext.Provider value={{ data }}>{children}</ConfigContext.Provider>
  );
};

export const useConfig = () => useContext(ConfigContext);
