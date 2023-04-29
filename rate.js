
const app_id = '9d1d2d2d516247169257fa118129ed35'
const url = `https://openexchangerates.org/api/latest.json?app_id=${app_id}&base=USD&symbols=UAH`

fetch(url)
    .then(response => {
      if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
       }
      return response.json()
      })
    .then(data => {
        window.rate = data.rates.UAH.toFixed(2);

      const rate = data.rates.UAH.toFixed(2)
      const exchangeRateDiv = document.getElementById('exchange-rate')
      exchangeRateDiv.innerHTML = `1 USD = ${rate} UAH`
      })
     .catch(error => console.error(error))

    