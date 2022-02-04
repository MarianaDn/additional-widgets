import { useState } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

export const Convert = ({ language, text }) => {
  const [translate, setTranslate] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedText(text), 500);

    return () => clearTimeout(timerId);
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setTranslate(data.data.translations[0].translatedText);
    };

    language && doTranslation();
  }, [language, text]);

  return <Typography>{translate}</Typography>;
};
