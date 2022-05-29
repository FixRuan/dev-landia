import React, { ReactNode } from "react";
import { View } from "react-native";

import { Box, NewLine } from "./styles";

interface ICommandProps {
  commandName: string;
  color?: string;
}

interface ICommands {
  drawBlueBox: () => ReactNode;
  drawRedBox: () => ReactNode;
  drawWhiteBox: () => ReactNode;
  drawGreenBox: () => ReactNode;
  drawPurpleBox: () => ReactNode;
  drawYellowBox: () => ReactNode;
  newLine: () => ReactNode;
  drawBox: () => ReactNode;
}

export function Command({ commandName, color }: ICommandProps): JSX.Element {
  const commands: ICommands = {
    drawBlueBox: () => <Box bgColor="#0000FF" />,
    drawRedBox: () => <Box bgColor="#FF0000" />,
    drawWhiteBox: () => <Box bgColor="#FFF" />,
    drawGreenBox: () => <Box bgColor="#025105" />,
    drawPurpleBox: () => <Box bgColor="#800080" />,
    drawYellowBox: () => <Box bgColor="#FFFF00" />,
    drawBox: () => <Box bgColor={color} />,

    newLine: () => <NewLine />,
  };

  const command = commands[commandName];

  if (command === undefined) {
    return <View />;
  }

  return <View>{command()}</View>;
}
