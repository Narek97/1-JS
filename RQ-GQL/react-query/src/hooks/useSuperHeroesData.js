import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const addSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superheroes", hero);
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeros, {
    //   cacheTime: 5000,
    //   staleTime: 30000,
    //   refetchInterval: true,
    //   refetchOnMount: true,
    //   refetchOnWindowFocus: true,
    //   refetchInterval: 2000,
    //   enabled: false,
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroName = data.data.map((hero) => hero.name);
    //   return superHeroName;
    // },
  });
};

export const useAddSuperHerData = () => {
  const queryClient = useQueryClient()
  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data]
        }
      })
    }
  })
}

// export const useAddSuperHerData = () => {
//   const queryClient = useQueryClient()
//   return useMutation(addSuperHero, {
//     onSuccess: () => {
//       queryClient.invalidateQueries("super-heroes")
//     }
//   })
// }

// export const useAddSuperHerData = () => {
//   const queryClient = useQueryClient();
//   return useMutation(addSuperHero, {
//     onMutate: async (newHero) => {
//       await queryClient.cancelQueries("super-heroes");
//       const previousHeroData = queryClient.getQueryData("super-heroes");
//       queryClient.setQueryData("super-heroes", (oldQueryData) => {
//         return {
//           ...oldQueryData,
//           data: [
//             ...oldQueryData.data,
//             { id: oldQueryData?.data?.length + 1, ...newHero },
//           ],
//         };
//       });

//       return {
//         previousHeroData
//       }
//     },
//     onError: (_error, _hero, context) => {
//       queryClient.setQueryData("super-heroes", context.previousHeroData)
//     },
//     onSettled: () => {
//       queryClient.invalidateQueries('super-heroes')
//     },
//   });
// };




