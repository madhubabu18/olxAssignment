import { gql } from '@apollo/client'

/* continents will be the query for graphql api */
export const CONTINENTS = gql`query{
    continents{
        code
        name
        countries{
          code
          name
          native
          capital
          currency
          emoji
          emojiU
        }
    }
}`
