import { useQuery } from "react-query";
import { GraphQLClient, request } from "graphql-request";

export const useGQLQuery = (key, query, variables, config = {}) => {
    const endpoint = "https://countries.trevorblades.com/";

    const header = {
        header: {
            authorization: `Bearer token goes here`
        }
    }

    const graphQLClint = new GraphQLClient(endpoint, header);

    const fetchData = async () => await graphQLClint.request(query, variables);


    // const fetchData = async () => await request(endpoint, query, variables);

    return useQuery(key, fetchData, config);
};
