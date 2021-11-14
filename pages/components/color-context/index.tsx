import * as React from "react";

const ColorContext = React.createContext<
  { color: string; nextColor: () => void } | undefined
>(undefined);

const COLORS = [
  "indigo",
  "red",
  "blue",
  "green",
  "gray",
  "yellow",
  "purple",
  "pink",
];

export const ColorProvider: React.FC = ({ children }) => {
  const [i, setColor] = React.useState(0);

  const nextColor = () => {
    setColor((x) => (x + 1) % COLORS.length);
  };

  const color = COLORS[i];
  return (
    <ColorContext.Provider value={{ color, nextColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = React.useContext(ColorContext);
  if (!context) {
    throw new Error("No color context provided");
  }
  return context;
};
