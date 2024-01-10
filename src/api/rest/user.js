import { makeRequest } from '../requests'
import env from '../../../env'

export const sendUserToAuthPage = () => {
  const githubAuthApi = 'https://github.com/login/oauth/authorize'

  const params = new URLSearchParams()

  params.append('client_id', env.clientId)
  params.append('scope', 'repo:status public_repo read:user')

  window.location.href = `${githubAuthApi}?${params}`
}

export const getAccessTokenByPersonalCode = (code) => {
  return makeRequest({
    url: 'https://webdev-api.loftschool.com/github',
    method: 'post',
    data: {
      code,
      clientId: env.clientId,
      clientSecret: env.clientSecret
    }
  })
}

export const getUser = () => {
  return makeRequest({
    url: '/user'
  })
}

export const getUserRepos = ({ owner }) => {
  return makeRequest({
    url: `/users/${owner}/repos`
  })
}

export const getUserFollowing = ({ owner }) => {
  return makeRequest({
    url: `/users/${owner}/following`
  })
}

export const setFollowing = ({ owner }) => {
  return makeRequest({
    url: `/user/following/${owner}`,
    method: 'put'
  })
}

export const unsetFollowing = ({ owner }) => {
  return makeRequest({
    url: `/user/following/${owner}`,
    method: 'delete'
  })
}
