export const getData = () => dispatch => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = 'https://polls.apiblueprint.org/questions';
  fetch(proxyurl+url)
  .then(res => res.json())
  .then(data => {
    dispatch({
      type: 'SAVE_DATA',
      data
    })
  })
  .catch((e) => console.log(`Can't access the URL: ${url}. Blocked by browser?`))
}