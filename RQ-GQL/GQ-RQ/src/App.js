import './App.css';
import { gql } from "graphql-tag"
import { useGQLQuery } from './useGQLQuery'

const GET_COUNTRIES = gql`
  query {
    countries{
      code
      name
    }
  }

`

const GET_COUNTRY = gql`
  query($code:ID!) {
    country(code:$code){
      name
    }
  }

`

function App() {
  // const { data, isLoading, error } = useGQLQuery('countries', GET_COUNTRIES)
  const { data, isLoading, error } = useGQLQuery('countries', GET_COUNTRY, {
    code: 'AM'
  })

  if (isLoading) {
    return <h2 className="App">Loading...</h2>

  }
  if (error) {
    return <h2 className="App">Error!!</h2>

  }
  return (
    <div className="App">
      {/* {
        data?.countries?.map(country =>
          <div key={country.name}>
            {country.name}
          </div>
        )
      } */}

      Country:{data.country.name}
    </div>
  );
}

export default App;
