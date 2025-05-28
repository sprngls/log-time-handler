export interface time {
    hours: string,
    minutes: string,
    seconds: string,
    date: string
};

export function getTime(): { compiledTimeClean: string, compiledTimeLog: string } {
    const time: time = {
        hours: new Date().getHours().toString().padStart(2, "0"),
        minutes: new Date().getMinutes().toString().padStart(2, "0"),
        seconds: new Date().getSeconds().toString().padStart(2, "0"),
        date: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`
    }

    const compiledTimeClean: string = `${time.hours}:${time.minutes}:${time.seconds}-${time.date}`;
    const compiledTimeLog: string = `[${time.hours}:${time.minutes}:${time.seconds}-${time.date}]`;

    return {
        compiledTimeClean,
        compiledTimeLog
    } 
}



