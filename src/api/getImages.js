const key = ''
const url = `https://api.unsplash.com//search/photos/?client_id=${key}&page=1&per_page=20&query=`

const getImages = (value) =>
  fetch(url + value)
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Ошибка запроса')
    })
    .then((data) => {
      if (data.total) {
        return data.results
      }
      throw new Error('Картинки не найдены')
    })

export default getImages
