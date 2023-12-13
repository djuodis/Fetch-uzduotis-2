fetch("https://party-wedding.glitch.me/v1/party")
  .then(res => {
    return res.json()
  })
  .then(data => {
    const body = document.querySelector('body')

    if (Array.isArray(data) && data.length > 0) {
      const person = data[0]

      if (person.name) {
        const nameH1 = document.createElement("h1")
        nameH1.innerText = `${person.name}`
        nameH1.style.textAlign = 'center'
        nameH1.style.marginTop = '100px'
        
        const vipH2 = document.createElement("h2")
        vipH2.innerText = `VIP: ${person.VIP}`
        vipH2.style.textAlign = 'center'
        vipH2.style.marginTop = '20px'

        body.appendChild(nameH1)
        body.appendChild(vipH2)
      }
    }
  })
