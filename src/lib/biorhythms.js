import dayjs from "dayjs"

export function calculateBiorhythms(birthDateIso, targetDateIso) {
    return {
        physical: calculateBiorhythm(birthDateIso, targetDateIso, 'physical'),
        emotional: calculateBiorhythm(birthDateIso, targetDateIso, 'emotional'),
        intellectual: calculateBiorhythm(birthDateIso, targetDateIso, 'intellectual')
    }
}

export function calculateBiorhythmSeries(birthDate, centralDate, range) {
    const series = []

    const centralDay = dayjs(centralDate)
    for (let diff = -range; diff <= range; diff++) {
        const targetDay = centralDay.add(diff, 'day')
        const biorhythms = calculateBiorhythms(birthDate, targetDay)

        series.push({ date: targetDay.format('D MMM'), ...biorhythms })
    }

    return series
}

export function calculateBiorhythm(birthDateIso, targetDateIso, attribute) {
    const birthDay = dayjs(birthDateIso)
    const targetDay = dayjs(targetDateIso)
    const diff = targetDay.diff(birthDay, 'day')

    let factor
    switch (attribute) {
        case 'physical':
            factor = 23
            break
        case 'emotional':
            factor = 28
            break
        case 'intellectual':
            factor = 33
            break
        default:
            factor = 0
    }
    return Math.sin((2 * Math.PI * diff) / factor)
}