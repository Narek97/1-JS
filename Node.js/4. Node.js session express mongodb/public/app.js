// gni dashty verjum rublii znaky sarqi u giny rubli sarqi

const toCurrency = price => {
  return new Intl.NumberFormat('ru-RU', {
    currency: 'rub',
    style: 'currency'
  }).format(price)
}
// ...........................................


// new Date i forman poxelu hamar vor normal sirun devov chuych ta jamankay
const toDate = date => {
  return new Intl.DateTimeFormat('ru-Ru',{
    day: '2-digit',
    month: 'long',
    year:'numeric',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
  }).format(new Date(date))

}
document.querySelectorAll('.date').forEach(n=>{
  n.textContent = toDate(n.textContent)
})
// ...........................................



document.querySelectorAll('.price').forEach(node => {
  node.textContent = toCurrency(node.textContent)
})

const $card = document.querySelector('#card')
if ($card) {
  $card.addEventListener('click', event => {
    if (event.target.classList.contains('js-remove')) {
      const id = event.target.dataset.id

      const csrf = event.target.dataset.csrf
      fetch('/card/remove/' + id, {
          method: 'delete',
          headers:{
            'X-XSRF-TOKEN':csrf
          },
          
        }).then(res => res.json())
        .then(card => {
          if (card.courses.length) {
            const html = card.courses.map(c => {
              return `
              <tr>
                <td>${c.title}</td>
                <td>${c.count}</td>
                <td>
                  <button class="btn btm-small js-remove" data-id="${c.id}">Delet</button>
                </td>
              </tr>
              `
            }).join('')
            $card.querySelector('tbody').innerHTML = html
            $card.querySelector('.price').textContent = toCurrency(card.price)
          } else {
            $card.innerHTML = '<p>Cart is empty</p>'

          }
        })
    }

  })
}


// login.hbs in talis en js efekt vor sirun lini https://materializecss.com/tabs.html es saytov
M.Tabs.init(document.querySelectorAll('.tabs'));
// ...........................................
