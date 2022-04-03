import axios from 'axios'

export default async function getAllNotice() {
  let result = { success: false, data: [] }
  const url = process.env.REACT_APP_API_URL + 'api/notice/get-notice'
  axios
    .get(url)
    .then((response) => {
      if (response.status === 200 && response.data.success === true) {
        result.success = true
        result.data = response.data.result
      }
    })
    .catch((error) => {})
  return result
}
