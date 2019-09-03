export const getSimpsonsQuote = () => {
  return fetch('https://thesimpsonsquotesapi.glitch.me/quotes?count=1')
    .then(res => {
      if(!res.ok) throw 'Doh! Marge? Lisa? ...Flanders?!? Me have problem';
      return res.json();
    })
    .then(json => {
      console.log(json);
      return (json[0]);
    });
};
