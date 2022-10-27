export const ACTION_GET_CURRENT_BG = 'GET_CURRENT_BG' as const

export const getCurrentBG = (src: string) => ({
  type: ACTION_GET_CURRENT_BG,
  payload: src,
})

export type ActionGetCurrentBG = ReturnType<typeof getCurrentBG>

export type ActionsBG = ActionGetCurrentBG
