const KEY = 'g-ZdJX-YpVaeXc5nZg8dG01S0fiMqFv8-77WW-y4jEU'
const URL = `https://api.unsplash.com//search/photos/?client_id=${KEY}&page=1&per_page=20&query=`

const getImages = (value) =>
  fetch(URL + value)
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
