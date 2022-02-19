import React from "react";
import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperHeros = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const DynamicParallel = ({ heroId }) => {
  const queryResults = useQueries(
    heroId.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHeros(id),
      };
    })
  );

  console.log({ queryResults });
  return <div>DynamicParallel</div>;
};
