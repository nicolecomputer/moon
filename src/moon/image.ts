import { MoonPhase } from "./moon";

export function imageForPhase(phase: MoonPhase): string {
    switch (phase) {
        case "First Quarter":
            return "/public/first-quarter.svg"
        case "Full Moon":
            return "/public/full-moon.svg"
        case "Last Quarter":
            return "/public/last-quarter.svg"
        case "New Moon":
            return "/public/new-moon.svg"
        case "Waning Crescent":
            return "/public/waning-crescent.svg"
        case "Waning Gibbous":
            return "/public/waning-gibbous.svg"
        case "Waxing Crescent":
            return "/public/waxing-crescent.svg"
        case "Waxing Gibbous":
            return "/public/waxing-gibbous.svg"
    }
}
