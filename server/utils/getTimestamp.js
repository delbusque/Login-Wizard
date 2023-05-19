exports.getTimestamp = () => {
    let date = new Date();
    let timestamp = date.getTime();
    let dateFormat = new Date(timestamp);
    dateFormat = date.toUTCString();

    return dateFormat;
}