

const BASE_API = 'https://api.github.com'

async function fetchWrapper(url, options) {
  const response = await fetch(url, options)
  if (!response.ok) {
    return {
      data: null,
      isError: true
    }
  }
  const data = await response.json()
  return {
    data,
    isError: false
  }
}

export async function getUser(username) {
  return fetchWrapper(`${BASE_API}/users/${username}`)
}

export async function getRepos(username) {
  return fetchWrapper(`${BASE_API}/users/${username}/repos`)
}