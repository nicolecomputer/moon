export type MoonPhase = "New Moon" | "Waxing Crescent" | "First Quarter" | "Waxing Gibbous" |
    "Full Moon" | "Waning Gibbous" | "Last Quarter" | "Waning Crescent";

const lunarEpoch = new Date("12 December 2023 23:32 UTC")
const synodicPeriod = 29.53059;

export function moonphase(date: Date): MoonPhase {
    const utcDate = new Date(Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
    ))

    const timeApart = utcDate.getTime() - lunarEpoch.getTime()
    const daysSinceEpoch = timeApart / (1000 * 60 * 60 * 24)
    const percentageThroughCycle = ((daysSinceEpoch / synodicPeriod) % 1 + 1) % 1 * 100

    if (percentageThroughCycle >= 0 && percentageThroughCycle < 8) {
        return "New Moon"
    } else if (percentageThroughCycle >= 8 && percentageThroughCycle < 22) {
        return "Waxing Crescent"
    } else if (percentageThroughCycle >= 22 && percentageThroughCycle < 32) {
        return "First Quarter"
    } else if (percentageThroughCycle >= 32 && percentageThroughCycle < 47) {
        return "Waxing Gibbous"
    } else if (percentageThroughCycle >= 47 && percentageThroughCycle < 59) {
        return "Full Moon"
    } else if (percentageThroughCycle >= 59 && percentageThroughCycle < 73) {
        return "Waning Gibbous"
    } else if (percentageThroughCycle >= 73 && percentageThroughCycle < 83) {
        return "Last Quarter"
    } else {
        return "Waning Crescent"
    }
}
