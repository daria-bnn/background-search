import { RootState } from '../store'

const selectCurrentBG = (state: RootState) => state.currentBG.src

export default selectCurrentBG
