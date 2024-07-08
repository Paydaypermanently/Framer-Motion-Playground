import queryString from 'query-string'

function getQuery(search: string, defaultValue?: object) {
  return {
    ...defaultValue,
    ...queryString.parse(search, {parseNumbers: true, parseBooleans: true, parseFragmentIdentifier: true})
  }
}

export default getQuery
