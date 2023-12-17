import { makeRequest } from '../requests'

export const getComments = (repo) => {
  return makeRequest({
    url: `/repos/${repo.owner.login}/${repo.name}/comments`
  })
}
