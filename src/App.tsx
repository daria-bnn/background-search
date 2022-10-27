import React, { FC } from 'react'

import SearchImagesBack from './components/SearchImagesBack/SearchImagesBack'
import { useAppDispatch, useAppSelector } from './store/hooks/storeHelpers'
import { showPhotos } from './store/actions/photoActaions'
import selectCurrentBG from './store/selectors/curentBGSelectors'
import {
  selectPhotos,
  selectShowPhotos,
} from './store/selectors/photoSelectors'

import './App.css'

const App: FC = () => {
  const dispatch = useAppDispatch()
  const src = useAppSelector(selectCurrentBG)
  const images = useAppSelector(selectPhotos)
  const isShowImgs = useAppSelector(selectShowPhotos)

  const handleShowImg = () => {
    dispatch(showPhotos(!isShowImgs))
  }

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <SearchImagesBack />

      {images.length ? (
        <div className="App-WrapperButton">
          <button type="button" className="App-Button" onClick={handleShowImg}>
            {isShowImgs
              ? 'Скрыть найденные картинки'
              : 'Показать найденные картинки'}
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default App
