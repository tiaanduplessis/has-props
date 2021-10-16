const index = require("./index")
// @ponicode
describe("index", () => {
    test("0", () => {
        let callFunction = () => {
            index("Chief Product Officer")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index("Data Scientist")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index("Software Engineer")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index("Marketing")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index("Sales")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
