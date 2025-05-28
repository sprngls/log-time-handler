module.exports = function getTime() {
    const timeObject = {
        hour: new Date().getHours().toString().padStart(2, '0'),
        minute: new Date().getMinutes().toString().padStart(2, '0'),
        seconds: new Date().getSeconds().toString().padStart(2, '0'),
        date: new Date().getDate().toString() + new Date().getMonth().toString() + new Date().getFullYear().toString()
    }

    const finalString = `[${timeObject.hour}:${timeObject.minute}:${timeObject.seconds}-${timeObject.date}]`;

    return finalString;
}