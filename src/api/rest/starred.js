import { makeRequest } from '../requests'

export const getStarred = () => {
  return makeRequest({
    url: '/user/starred'
  })
}

export const starRepo = ({ owner, repo }) => {
  return makeRequest({
    url: `/user/starred/${owner}/${repo}`,
    method: 'put'
  })
}

export const unStarRepo = ({ owner, repo }) => {
  return makeRequest({
    url: `/user/starred/${owner}/${repo}`,
    method: 'delete'
  })
}
