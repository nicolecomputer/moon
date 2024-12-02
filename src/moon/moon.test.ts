import { moonphase } from "./moon"

describe("moon", () => {
    it("correctly identifies New Moon on December 12, 2023", () => {
        const newMoon = new Date("2023-12-12T23:32:00Z")
        expect(moonphase(newMoon)).toBe("New Moon")
    })

    it("correctly identifies First Quarter on December 19, 2023", () => {
        const firstQuarter = new Date("2023-12-19T18:39:00Z")
        expect(moonphase(firstQuarter)).toBe("First Quarter")
    })

    it("correctly identifies Full Moon on December 27, 2023", () => {
        const fullMoon = new Date("2023-12-27T00:33:00Z")
        expect(moonphase(fullMoon)).toBe("Full Moon")
    })

    it("correctly identifies Last Quarter on January 3, 2024", () => {
        const lastQuarter = new Date("2024-01-03T15:30:00Z")
        expect(moonphase(lastQuarter)).toBe("Last Quarter")
    })

    // Testing intermediate phases
    it("correctly identifies Waxing Crescent a few days after New Moon", () => {
        const waxingCrescent = new Date("2023-12-15T12:00:00Z")
        expect(moonphase(waxingCrescent)).toBe("Waxing Crescent")
    })

    it("correctly identifies Waxing Gibbous a few days after First Quarter", () => {
        const waxingGibbous = new Date("2023-12-22T12:00:00Z")
        expect(moonphase(waxingGibbous)).toBe("Waxing Gibbous")
    })

    it("correctly identifies Waning Gibbous a few days after Full Moon", () => {
        const waningGibbous = new Date("2023-12-30T12:00:00Z")
        expect(moonphase(waningGibbous)).toBe("Waning Gibbous")
    })

    it("correctly identifies Waning Crescent a few days after Last Quarter", () => {
        const waningCrescent = new Date("2024-01-06T12:00:00Z")
        expect(moonphase(waningCrescent)).toBe("Waning Crescent")
    })
})
