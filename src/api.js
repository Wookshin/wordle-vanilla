const HEROKU_POINT = 'https://cors-anywhere.herokuapp.com/'
const API_END_POINT = 'https://ac-dict.naver.com/enko/ac?st=11&r_lt=11&q=';
const request = async (word) => {
  try {
    const res = await fetch(`${HEROKU_POINT}${API_END_POINT}${word}`);

    if (!res.ok) {
      throw new Error('서버의 상태가 이상합니다!');
    }

    return await res.json()
  } catch(e) {
    throw new Error(`무엇가 잘못 되었습니다! ${e.message}`);
  }
}

export { request };