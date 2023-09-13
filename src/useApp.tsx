import {useEventEmitter} from "./core/hooks/useEventEmitter";
import i18n from "./core/data/i18n.json";
import {EventEmitter} from "./core/constants/event.constant";
import {useEffect, useState} from "react";
import {Character} from "./core/interfaces";
type LENGUAGUE = "es" | "en";

export function useApp() {
  const {on} = useEventEmitter();
  const [translate, setTranslate] = useState(i18n["en"]);
  const [characters, setCharacters] = useState<Character>({title: "", results: []});

  useEffect(() => {
    on(EventEmitter.LENGUAGE, ({data}) => {
      const i18next = i18n;
      setTranslate(i18next[data.code as LENGUAGUE]);
    });
    on(EventEmitter.FILMS, ({data}) => setCharacters(data));
  }, []);

  return {characters, translate};
}
