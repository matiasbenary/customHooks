import { Box, Flex, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import useGet from "../../Hooks/useGet";

const Characters = () => {
  const {
    data: characters,
    isLoading,
    setFilter,
    filter,
  } = useGet("character");

  const handlerChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Box>
      <Input type="text" onChange={handlerChange} value={filter} />
      {isLoading && <h2>Cargando</h2>}
      {isLoading || (
        <Flex flexWrap="wrap">
          {characters &&
            characters.results.map((character) => {
              return (
                <Box
                  key={`cardId${character.id}`}
                  as={Link}
                  to={`/characters/${character.id}`}
                >
                  <img src={character.image} alt="" /> {character.name}
                </Box>
              );
            })}
        </Flex>
      )}
    </Box>
  );
};
export default Characters;
