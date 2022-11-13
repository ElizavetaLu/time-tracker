export default (counter) => {
    // console.log(counter)
    const hours = Math.floor(counter / 3600);
    const minutes = Math.floor(counter / 60) - (hours * 60);
    const seconds = counter % 60;

    return [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
    ].join(':');
}
