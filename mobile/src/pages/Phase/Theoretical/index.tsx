import Markdown, { ASTNode } from "react-native-markdown-display";

import React from "react";
import { StyleSheet } from "react-native";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useNavigation } from "@react-navigation/native";
import { Header } from "./Header";
import theme from "../../../Global/styles/theme";
import { Bash } from "../../../components/Bash";

import {
  FinishButton,
  TextButton,
  ContainerScrollView,
  Content,
} from "./styles";
import { api } from "../../../services/api";

const rules = {
  fence: (node: ASTNode) => {
    return node.markup !== "~~~" ? (
      <SyntaxHighlighter
        key={node.key}
        language="javascript"
        style={dracula}
        highlighter="prism"
      >
        {node.content}
      </SyntaxHighlighter>
    ) : (
      <Bash key={node.key} text={node.content} />
    );
  },
};

const styles = StyleSheet.create({
  heading1: {
    fontSize: 32,
    fontFamily: theme.fonts.bold,
    textAlign: "justify",
  },
  heading2: {
    fontSize: 24,
    lineHeight: 40,
    fontFamily: theme.fonts.bold,
    marginTop: 16,
    textAlign: "justify",
  },
  heading3: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: theme.fonts.bold,
    marginTop: 16,
    textAlign: "justify",
  },
  body: {
    color: "#FFF",
    fontSize: 16,
    lineHeight: 20,
    fontFamily: theme.fonts.regular,
    textAlign: "justify",
  },
});

interface TeorychActivityProps {
  id: string;
  map_id: string;
  title: string;
  markdown_text: string;
}

export function Theoretical({
  id,
  map_id,
  title,
  markdown_text,
}: TeorychActivityProps): JSX.Element {
  const navigation = useNavigation();

  async function handleFinishClass(): Promise<void> {
    console.log("🎉 Aula Finalizada!");
    await api.put(`/game/correct/${id}`, {
      map_id,
    });
    navigation.navigate("Home");
  }

  return (
    <ContainerScrollView>
      <Header title={title} />
      <Content>
        <Markdown rules={rules} style={styles}>
          {markdown_text}
        </Markdown>

        <FinishButton onPress={handleFinishClass} activeOpacity={0.7}>
          <TextButton>FINALIZAR</TextButton>
        </FinishButton>
      </Content>
    </ContainerScrollView>
  );
}
