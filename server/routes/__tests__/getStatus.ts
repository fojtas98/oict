import request from "supertest";
import app from "../../app";



describe("GET /status", ()=>{
    beforeEach(()=>{
        process.env.API_KEY= "test123"
    })

    it("Should return unauthorized", async ()=>{
        const res = await request(app).get("/status")
        expect(res.statusCode).toBe(401)
        expect(res.text).toBe("Missing X-API-KEY header")
    })
    it("Should return unauthorized", async ()=>{
        const res = await request(app).get("/status").set("x-api-key", "test")
        expect(res.statusCode).toBe(401)
        expect(res.text).toBe("Token is not valid")
    })
    it("Should return 200 and data", async ()=>{
        const res = await request(app).get("/status?cardNumber=123").set("x-api-key", "test123")
        expect(res.statusCode).toBe(200)
        expect(res.body).toStrictEqual({
            state: "Aktivní v držení klienta",
            validationEnds: "08.12.2020"
        })
    })
    it("Should return 400 and missing parameters", async ()=>{
        const res = await request(app).get("/status").set("x-api-key", "test123")
        expect(res.statusCode).toBe(400)
        expect(res.text).toBe("Missing query parameters")
    })
    it("Should return 400 and missing parameters", async ()=>{
        const res = await request(app).get("/status?cardNumber=123&cardNumber=123").set("x-api-key", "test123")
        expect(res.statusCode).toBe(400)
        expect(res.text).toBe("Invalid cardNumber parameter")
    })


})