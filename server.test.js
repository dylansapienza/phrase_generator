const rewire = require("rewire")
const server = rewire("./server")
const getRandomInt = server.__get__("getRandomInt")
// @ponicode
describe("getRandomInt", () => {
    test("0", () => {
        let callFunction = () => {
            getRandomInt(-1, -100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getRandomInt(1, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getRandomInt(0.0, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getRandomInt(0, 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getRandomInt(10, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getRandomInt(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
