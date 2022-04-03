import axios from 'axios'

export default async function getSocialContacts() {
  let res
  await axios
    .get(process.env.REACT_APP_API_URL + 'api/info/contacts')
    .then((response) => {
      res = response.data
    })
    .catch((error) => (res = false))
  return res
}
