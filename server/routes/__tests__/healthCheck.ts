import request  from "supertest"
import app from "../../app"


describe("GET /health-check", ()=>{
    it("Should return 200 and OK", async ()=>{
        const res = await request(app).get("/health-check")
        expect(res.statusCode).toBe(200)
        expect(res.text).toBe("OK")
    })
})

