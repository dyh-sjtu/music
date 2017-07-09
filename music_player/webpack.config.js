var path = require("path");

module.exports = {
    entry: ['./js/music_play.js', './js/lyric_jquery.js'],
    output: {
        path: path.join(__dirname, '../out'),
        filename: 'musicPlay.js'
    }
};
