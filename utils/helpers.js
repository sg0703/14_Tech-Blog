// write function to shorten conte to "description"
// write function to format dates

module.exports = {
    // render date
    formatDate: (timestamp) => {
    var date = new Date(timestamp);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    var hour = date.getHours();
    var minutes = date.getMinutes();

    if (minutes < 10) {
    minutes = '0' + minutes;
    }

    //var time = `${month}/${day}/${year} ${hour}:${minutes}`;
    var time = `${month}/${day}/${year} at ${hour}:${minutes}`;

    return time;
    }
}