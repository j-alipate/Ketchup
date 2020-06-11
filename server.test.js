const request = require('supertest')
const cheerio = require('cheerio')

const server = require('./server')

test('GET / is working', (done) => {
    request(server)
        .get('/')
        .expect(200)
        .end((err, res) => {
            // console.log('res:', res)
            expect(res.text).toMatch('subway')
            done()
        })
})

test('Root route has the right number of users', done => {
    request(server)
        .get('/')
        .end((err, res) => {
            if (err) console.error(err)
            const $ = cheerio.load(res.text)
            const users = $('.users li') // To confirm the css class and tag in hbs template
            expect(users).toHaveLength(5) // To confirm the number from data
            done()
        })
})

test('GET /select/:id is working', (done) => {
    request(server)
        .get('/select/testid') //Update testid here based on data
        .expect(200)
        .end((err, res) => {
            expect(res.text).toMatch('h1')
            expect(res.text).toMatch('testid') //Update testid here based on data
        })
})

test('GET /sandwich/:id is working', (done) => {
    request(server)
        .get('/sandwich/testid') //Update testid here based on data
        .expect(200)
        .end((err, res) => {
            expect(res.text).toMatch('h1')
            expect(res.text).toMatch('testid') //Update testid here based on data
        })
})

//Add POST route test

