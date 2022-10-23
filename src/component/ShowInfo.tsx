import React from "react";
import { ShowInfoGrid } from "../styles/main";

interface Prop {
  setShowModalLinks: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowInfo = ({ setShowModalLinks }: Prop) => {
  return (
    <ShowInfoGrid>
      <h5>Los enlaces son los siguientes: </h5>
      <ul>
        <li>
          <a
            href="https://hub.laboratoria.la/tag/liderazgo-y-equipos"
            target="_blank"
          >
            https://hub.laboratoria.la/tag/liderazgo-y-equipos
          </a>
        </li>
        <li>
          <a
            href="https://hub.laboratoria.la/colombia-avanza-en-la-inclusion-laboral-frente-al-resto-de-suramerica"
            target="_blank"
          >
            https://hub.laboratoria.la/colombia-avanza-en-la-inclusion-laboral-frente-al-resto-de-suramerica
          </a>
        </li>
      </ul>
      <button onClick={() => setShowModalLinks(false)}>Cerrar</button>
    </ShowInfoGrid>
  );
};

export default ShowInfo;
