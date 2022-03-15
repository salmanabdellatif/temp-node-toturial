const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('welcome to our home page!')
    res.end()
  }
  if (req.url === '/about') {
    res.write(`
        <h1>about</h1>
        <p>some of our details</p>
        `)
    res.end()
  }

  res.write(`
  <h1>oops!!</h1>
  <a href = "/">back to home page</a>
  `)
  res.end()
})
server.listen(5000)
