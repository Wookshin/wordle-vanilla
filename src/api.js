const HEROKU_POINT = 'https://my-wordle-check-word.herokuapp.com/'
const API_END_POINT = 'https://ac-dict.naver.com/enko/ac?st=11&r_lt=11&q='
const getWordFromNaver = async word => {
  try {
    const res = await window.fetch(`${HEROKU_POINT}${API_END_POINT}${word}`)

    if (!res.ok) {
      throw new Error('서버의 상태가 이상합니다!')
    }

    return await res.json()
  } catch (e) {
    throw new Error(`무엇가 잘못 되었습니다! ${e.message}`)
  }
}

export { getWordFromNaver }
