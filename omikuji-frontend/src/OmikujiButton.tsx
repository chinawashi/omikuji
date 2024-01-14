import React, { useState } from "react";
import { Button, Box, Text } from "@chakra-ui/react";

const OmikujiButton: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);

  const drawOmikuji = async () => {
    try {
      const response = await fetch("http://localhost:8000/omikuji");
      if (!response.ok) {
        throw new Error(`HTTPエラー! ステータスコード: ${response.status}`);
      }
      const data = await response.text();
      setResult(data);
    } catch (error) {
      console.error("エラーが発生しました:", error);
      // エラーメッセージを表示または処理する
    }
  };

  return (
    <Box textAlign="center" mt="4">
      <Button colorScheme="teal" onClick={drawOmikuji}>
        おみくじを引く
      </Button>
      {result && <Text mt="4">結果: {result}</Text>}
    </Box>
  );
};

export default OmikujiButton;
