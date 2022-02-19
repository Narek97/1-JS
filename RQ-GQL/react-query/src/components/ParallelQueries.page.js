import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

export const ParallelQueries = () => {
  const { data: superheroes } = useQuery("super-heroes", fetchSuperHeros);
  const { data: friends } = useQuery("friends", fetchFriends);
  return <div>ParallelQueries</div>;
};
