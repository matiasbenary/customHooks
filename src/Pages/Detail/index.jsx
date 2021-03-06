import { useParams } from "react-router-dom";

import useGet from "../../Hooks/useGet";

const Detail = () => {
  const { id } = useParams();
  const { data: character, isLoading } = useGet(`character/${id}`);

  if (isLoading) return <h2>Cargando</h2>;
  return (
    <div>
      {character?.name}
      <img src={character?.image} />
    </div>
  );
};
export default Detail;
