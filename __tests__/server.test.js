'use strict';
const server = require('../server.js');
const supertest=require('supertest');
const request = supertest(server.app);


describe('server',()=>{
it('should get 404 status', async()=>{
    const response = await request.get('/foo');
    expect(response.status).toBe(404);
    console.log('request in server.test.js',request)
})

it('should get a welcome messay',async()=>{
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('welcome to server.js');



})

it('should get an error', async()=>{

    const response= await request.get('/bad');
    expect(response.status).toEqual(500);
})

})