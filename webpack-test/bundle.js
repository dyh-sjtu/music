/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
$(function () {
    function parseLyric(text) {
        var lyric = text.split('/')
        var lrc = new Array();
        var l = lyric.length;
        for (var i = 0; i <= l - 1; i++) {
            var d = lyric[i].match(/\[\d{2}:\d{2}\.\d{2}\]/g);//正则匹配播放时间
            var t = lyric[i].split(d);
            lrc.push(t[1]);
        }
        return lrc;
    }

    function parseTime(text) {
        var lyric = text.split('/')
        var time = new Array();
        var l = lyric.length;
        for (var i = 0; i <= l - 1; i++) {
            var d = lyric[i].match(/\[\d{2}:\d{2}\.\d{2}\]/g);//正则匹配播放时间
            var dt = String(d).split(':');
            var _t = parseInt(dt[0].split('[')[1]) * 60 + Math.round(parseFloat(dt[1].split(']')[0]));
            time.push(_t)
        }
        return time;
    }
    var lyric_text = '[00:00.00]童话镇/' +
        '[00:05.00]演唱：陈一发/' +
        '[00:10.00]作曲 : 暗杠/' +
        '[00:15.00]作词 : 竹君/' +
        '[00:22.93]听说白雪公主在逃跑/' +
        '[00:26.43] 小红帽在担心大灰狼/' +
        '[00:29.83]听说疯帽喜欢爱丽丝/' +
        '[00:33.17]丑小鸭会变成白天鹅/' +
        '[00:36.34]听说彼得潘总长不大/' +
        '[00:40.23]杰克他有竖琴和魔法/' +
        '[00:43.56]听说森林里有糖果屋/' +
        '[00:46.82]灰姑娘丢了心爱的玻璃鞋/' +
        '[00:50.39]只有睿智的河水知道/' +
        '[00:53.68]白雪是因为贪玩跑出了城堡/' +
        '[00:57.31]小红帽有件抑制自己/' +
        '[01:00.73]变成狼的大红袍/' +
        '[01:03.80]总有一条蜿蜒在童话镇里七彩的河/' +
        '[01:11.00]沾染魔法的乖张气息/' +
        '[01:14.42]却又在爱里曲折/' +
        '[01:17.76]川流不息扬起水/' +
        '[01:20.87]又卷入一帘时光入水/' +
        '[01:24.68]让全部很久很久以前/' +
        '[01:28.12]都走到幸福结局的时刻/' +
        '[01:33.18]music..../' +
        '[01:47.00]听说睡美人被埋藏/' +
        '[01:50.44]小人鱼在眺望金殿堂/' +
        '[01:53.79]听说阿波罗变成金乌/' +
        '[01:57.12]草原有奔跑的剑齿虎/' +
        '[02:00.73]听说匹诺曹总说着谎/' +
        '[02:04.16]侏儒怪拥有宝石满箱/' +
        '[02:07.57]听说悬崖有颗长生树/' +
        '[02:10.80]红鞋子不知疲倦地在跳舞/' +
        '[02:14.43]只有睿智的河水知道/' +
        '[02:17.84]睡美人逃避了生活的煎熬/' +
        '[02:21.14]小人鱼把阳光抹成眼影/' +
        '[02:24.58]投进泡沫的怀抱/' +
        '[02:27.77]总有一条蜿蜒在童话镇里七彩的河/' +
        '[02:35.06]沾染魔法的乖张气息/' +
        '[02:38.43]却又在爱里曲折/' +
        '[02:41.82]川流不息扬起水花/' +
        '[02:44.87]又卷入一帘时光入水/' +
        '[02:48.69]让全部很久很久以前/' +
        '[02:52.00]都走到幸福结局的时刻/' +
        '[02:55.46]总有一条蜿蜒在童话镇里梦幻的河/' +
        '[03:02.47]分隔了理想分隔现实/' +
        '[03:05.82]又在前方的山口汇合/' +
        '[03:09.22]川流不息扬起水花/' +
        '[03:12.36]又卷入一帘时光入水/' +
        '[03:16.23]让全部很久很久以前/' +
        '[03:19.38]都走到幸福结局的时刻/' +
        '[03:22.72]又陌生/' +
        '[03:24.52]啊~~啊~~啊~~啊~~';

    var audio = document.getElementById("audio");
    var lyric_arr = parseLyric(lyric_text);
    var time_arr = parseTime(lyric_text);
    var lyric_list = document.getElementById("lyric-list");
    var html = "";
    for (var i = 0; i <= time_arr.length - 1; i++) {
        html += "<p class='lyric' time-line='" + time_arr[i] + "'>" + lyric_arr[i] + "</p>";
    }
    lyric_list.innerHTML = html;
    var p=lyric_list.getElementsByTagName("p");
    function lyric_move(current_time) {
        for(var i=0;i<=p.length-1;i++){
            var time_line = p[i].attributes["time-line"].nodeValue;
            if (time_line>0&&time_line==current_time){
                var gap=p[i+1].attributes["time-line"].nodeValue-p[i].attributes["time-line"].nodeValue;
                var index=i;
                var s;
                if (s!=i){
                    s = i;
                    for(var j=0;j<=p.length-1;j++){
                        $(".lyric-list p:eq("+j+")").css("animation","");
                    }
                    if (index>0){
                        $(".lyric-list p:eq("+index+")").css("animation","lyric-move "+gap+"s ease 1");
                        $(".lyric-list p").animate({top:"-=8px"},"fast");
                    }
                }
            }
        }

    }
    function autoMove(current_time){
        var time_arr=[];
        var move_time;
        var e;
        for(var i=0;i<=p.length-1;i++){
            var time_line = p[i].attributes["time-line"].nodeValue;
            time_arr.push(time_line);
        }
        for(var j=0;j<=time_arr.length-1;j++){
            if (current_time<time_arr[j]){
                move_time = time_arr[j-1];
                break;
            }
        }
        e=move_time?time_arr.indexOf(move_time):p.length-1;
        var move_top=-e*8+"px";
        $(".lyric-list p").css("top",move_top);
        for(var k=0;k<=p.length-1;k++){
            $(".lyric-list p:eq("+k+")").css("animation","");
        }
        // for(var s=e;e<=p.length-1;e++){
        //     var gap=p[e+1].attributes["time-line"].nodeValue-p[e].attributes["time-line"].nodeValue;
        // }
        if(e > 0){
            $(".lyric-list p:eq("+e+")").css("animation","lyric-move 2s ease 1");
        }
    }
    $("#audio").bind("timeupdate",function () {
        var current_time = parseInt(audio.currentTime);
        lyric_move(current_time);
    })
    $(".progress-line").click(function () {
        var current_time = parseInt(audio.currentTime);
        autoMove(current_time);
    })
    $(".progress-line").mouseup(function () {
        var current_time = parseInt(audio.currentTime);
        autoMove(current_time);
    })
})



/***/ }),
/* 1 */
/***/ (function(module, exports) {

$(function () {
    $(".play-pause img").bind("click",function () {
        var $img_src=$(this).attr("src");
        var $music_src=$(".music-src")[0];
        if ($img_src == "./img/播放.png"&&$music_src.paused){
            $(this).attr("src","./img/播放器-暂停.png");
            $(this).attr("title","播放");
            $music_src.play();
            $(".album-box img").css("animation-play-state","running");
        }else{
            $(this).attr("src","./img/播放.png");
            $(this).attr("title","暂停");
            $music_src.pause();
            $(".album-box img").css("animation-play-state","paused");
        }
    })
    var audio=document.getElementsByTagName("audio")[0];
    if (audio.paused==true){
        $(".album-box img").css("animation-play-state","paused");
    }else{
        $(".album-box img").css("animation-play-state","running");
    }
    $(".music-function .more").click(function () {
        $("p.info").toggle();
    })
    //控制更多功能显隐
    $(".music-function .like img").bind("click",function () {
        var $like=$(this).attr("src");
        if ($like=="./img/喜欢.png"){
            $(this).attr("src","./img/喜欢(1).png");
        }else{
            $(this).attr("src","./img/喜欢.png");
        }
    })
    //控制喜欢收藏
    $(".play-type img").click(function () {
        var type_arr=["./img/随机播放.png","./img/循环播放.png","./img/顺序播放.png","./img/单曲循环.png"];
        var $type_src=$(this).attr("src");
        if ($type_src=="./img/单曲循环.png"){
            $(this).attr("src",type_arr[0]);
            $(this).attr("title","随机播放");
        }else if($type_src=="./img/随机播放.png"){
            $(this).attr("src",type_arr[1]);
            $(this).attr("title","循环播放");
        }else if($type_src=="./img/循环播放.png"){
            $(this).attr("src",type_arr[2]);
            $(this).attr("title","顺序播放");
        }else {
            $(this).attr("src",type_arr[3]);
            $(this).attr("title","单曲循环");
        }
    })
    //控制播放类型
    $("#music-arr").bind("change",function () {
        $(".play-pause img").attr("src","./img/播放.png");
        $(".album-box img").css("animation-play-state","paused");
        $(".music-src")[0].pause();
        var $music_now=$("#music-arr option:selected").val();
        var $music_play_now="./music/"+$music_now+".mp3";
        $(".music-src").attr("src",$music_play_now);
    })
    //单击控制播放
    $("#music-arr option").dblclick(function () {
        $(".play-pause img").attr("src","./img/播放器-暂停.png");
        $(".album-box img").css("animation-play-state","running");
        var $music_now=$("#music-arr option:selected").val();
        var $music_play_now="./music/"+$music_now+".mp3";
        $(".music-src").attr("src",$music_play_now);
        $(".music-src")[0].play();
    })
    //双击控制播放
    $(".play-control .have-play img").click(function () {
        $("#music-arr").toggle();
    })
    //控制音乐列表的显隐

    $(".play-control .play-next img").click(function () {
        var $type_src = $(".play-control .play-type img").attr("src");
        function search(arr, dst) {
            var i = arr.length;
            while (i -= 1) {
                if (arr[i] == dst) {
                    return i;
                }
            }
            return 0;
        }//判断元素在数组的索引位置
        if ($type_src == "./img/单曲循环.png") {
            var music_now = $(".music-src").attr("src");
            var option = document.getElementsByTagName("option");
            var index = option.length - 1;
            var first_music = "./music/" + option[0].value + ".mp3";
            var last_music = "./music/" + option[index].value + ".mp3";
            if (music_now == last_music) {
                $(".music-src").attr("src", first_music);
                $(".music-src")[0].play();
            } else {
                var option_music_arr = [];
                for (var i = 0; i <= index; i++) {
                    var music_number = "./music/" + option[i].value + ".mp3";
                    option_music_arr.push(music_number);
                }
                var index = search(option_music_arr, music_now);
                var index_next = index + 1;
                var music_next = option_music_arr[index_next];
                $(".music-src").attr("src", music_next);
                $(".music-src")[0].play();
                $("#music-arr option").attr("selected", false);
                $("#music-arr option:eq(" + index_next + ")").attr("selected", true);
                //单曲循环下单曲循环、下首播放
            }
        }else if ($type_src == "./img/循环播放.png") {
                var music_now = $(".music-src").attr("src");
                var option = document.getElementsByTagName("option");
                var index = option.length - 1;
                var first_music = "./music/" + option[0].value + ".mp3";
                var last_music = "./music/" + option[index].value + ".mp3";
                if (music_now == last_music) {
                    $(".music-src").attr("src", first_music);
                    $(".music-src")[0].play();
                } else {
                    var option_music_arr = [];
                    for (var i = 0; i <= index; i++) {
                        var music_number = "./music/" + option[i].value + ".mp3";
                        option_music_arr.push(music_number);
                    }
                    var index = search(option_music_arr, music_now);
                    var index_next = index + 1;
                    var music_next = option_music_arr[index_next];
                    $(".music-src").attr("src", music_next);
                    $(".music-src")[0].play();
                    $("#music-arr option").attr("selected", false);
                    $("#music-arr option:eq(" + index_next + ")").attr("selected", true);
                }//循环播放下播放下一首
            } else if ($type_src == "./img/顺序播放.png") {
                var music_now = $(".music-src").attr("src");
                // alert(music_now)
                var option = document.getElementsByTagName("option");
                var index = option.length - 1;
                // alert(index)
                var last_music = "./music/" + option[index].value + ".mp3";
                // alert(last_music)
                if (music_now == last_music) {
                    alert("我也是有底线的");
                } else {
                    var option_music_arr = [];
                    for (var i = 0; i <= index; i++) {
                        var music_number = "./music/" + option[i].value + ".mp3";
                        option_music_arr.push(music_number);
                    }
                    var index = search(option_music_arr, music_now);
                    var index_next = index + 1;
                    var music_next = option_music_arr[index_next];
                    $(".music-src").attr("src", music_next);
                    $(".music-src")[0].play();
                    $("#music-arr option").attr("selected", false);
                    $("#music-arr option:eq(" + index_next + ")").attr("selected", true);
                }//顺序播放下播放下一首
            }else{
            var option = document.getElementsByTagName("option");
            var option_music_arr = [];
            for (var i = 0; i <= option.length-1; i++) {
                var music_number = "./music/" + option[i].value + ".mp3";
                option_music_arr.push(music_number);
            }
            var index_random=Math.floor(Math.random()*34);
            $(".music-src").attr("src", option_music_arr[index_random]);
            $(".music-src")[0].play();
            $("#music-arr option").attr("selected", false);
            $("#music-arr option:eq(" + index_random + ")").attr("selected", true);
        }//随机播放下播放下一首
        })
   //播放下一首
    $(".play-control .play-prev img").click(function () {
        function search(arr, dst) {
            var i = arr.length;
            while (i -= 1) {
                if (arr[i] == dst) {
                    return i;
                }
            }
            return 0;
        }
        var $type_src = $(".play-control .play-type img").attr("src");
        if ($type_src == "./img/单曲循环.png") {
            var music_now = $(".music-src").attr("src");
            var option = document.getElementsByTagName("option");
            var index = option.length - 1;
            var first_music = "./music/" + option[0].value + ".mp3";
            var last_music = "./music/" + option[index].value + ".mp3";
            if (music_now == first_music) {
                $(".music-src").attr("src", last_music);
                $(".music-src")[0].play();
            } else {
                var option_music_arr = [];
                for (var i = 0; i <= index; i++) {
                    var music_number = "./music/" + option[i].value + ".mp3";
                    option_music_arr.push(music_number);
                }
                var index = search(option_music_arr, music_now);
                var index_prev = index - 1;
                var music_prev = option_music_arr[index_prev];
                $(".music-src").attr("src", music_prev);
                $(".music-src")[0].play();
                $("#music-arr option").attr("selected", false);
                $("#music-arr option:eq(" + index_prev + ")").attr("selected", true);
        }//单曲循环下播放上一首
        }else if ($type_src == "./img/循环播放.png") {
            var music_now = $(".music-src").attr("src");
            var option = document.getElementsByTagName("option");
            var index = option.length - 1;
            var first_music = "./music/" + option[0].value + ".mp3";
            var last_music = "./music/" + option[index].value + ".mp3";
            if (music_now == first_music) {
                $(".music-src").attr("src", last_music);
                $(".music-src")[0].play();
            } else {
                var option_music_arr = [];
                for (var i = 0; i <= index; i++) {
                    var music_number = "./music/" + option[i].value + ".mp3";
                    option_music_arr.push(music_number);
                }
                var index = search(option_music_arr, music_now);
                var index_prev = index - 1;
                var music_prev = option_music_arr[index_prev];
                $(".music-src").attr("src", music_prev);
                $(".music-src")[0].play();
                $("#music-arr option").attr("selected", false);
                $("#music-arr option:eq(" + index_prev + ")").attr("selected", true);
            }//循环播放下上一首
        } else if ($type_src == "./img/顺序播放.png") {
            var music_now = $(".music-src").attr("src");
            var option = document.getElementsByTagName("option");
            var index = option.length - 1;
            var first_music = "./music/" + option[0].value + ".mp3";
            if (music_now == first_music) {
                alert("已经到顶了");
            } else {
                var option_music_arr = [];
                for (var i = 0; i <= index; i++) {
                    var music_number = "./music/" + option[i].value + ".mp3";
                    option_music_arr.push(music_number);
                }
                function search(arr, dst) {
                    var i = arr.length;
                    while (i -= 1) {
                        if (arr[i] == dst) {
                            return i;
                        }
                    }
                    return 0;
                }
                var index = search(option_music_arr, music_now);
                var index_prev = index - 1;
                var music_prev = option_music_arr[index_prev];
                $(".music-src").attr("src", music_prev);
                $(".music-src")[0].play();
                $("#music-arr option").attr("selected", false);
                $("#music-arr option:eq(" + index_prev + ")").attr("selected", true);
            }
        }//顺序播放下上一首
        else{
            var option = document.getElementsByTagName("option");
            var option_music_arr = [];
            for (var i = 0; i <= option.length-1; i++) {
                var music_number = "./music/" + option[i].value + ".mp3";
                option_music_arr.push(music_number);
            }
            var index_random=Math.floor(Math.random()*34);
            $(".music-src").attr("src", option_music_arr[index_random]);
            $(".music-src")[0].play();
            $("#music-arr option").attr("selected", false);
            $("#music-arr option:eq(" + index_random + ")").attr("selected", true);
        }//随机播放下播放上一首
    })
    $(".play-control .play-next img").mousedown(function () {
        $(".play-control .play-pause img").attr("src","./img/播放.png");
        $(".album-box img").css("animation-play-state","paused");
    }).mouseup(function () {
        $(".play-control .play-pause img").attr("src","./img/播放器-暂停.png");
        $(".album-box img").css("animation-play-state","running");
    })
    $(".play-control .play-prev img").mousedown(function () {
        $(".play-control .play-pause img").attr("src","./img/播放.png");
        $(".album-box img").css("animation-play-state","paused");
    }).mouseup(function () {
        $(".play-control .play-pause img").attr("src","./img/播放器-暂停.png");
        $(".album-box img").css("animation-play-state","running");
    })
    var audio=document.getElementById("audio");
    var $type_src = $(".play-control .play-type img").attr("src");
    $("#audio").bind("ended",function () {
        function search(arr, dst) {
            var i = arr.length;
            while (i -= 1) {
                if (arr[i] == dst) {
                    return i;
                }
            }
            return 0;
        }
        var option = document.getElementsByTagName("option");
        var option_music_arr = [];
        for (var i = 0; i <= option.length-1; i++) {
            var music_number = "./music/" + option[i].value + ".mp3";
            option_music_arr.push(music_number);
        }
        var music_now = $(".music-src").attr("src");
        var index = search(option_music_arr, music_now);
        var index_next=index+1;
        $(".music-src").attr("src", option_music_arr[index_next]);
        $(".music-src")[0].play();
        $("#music-arr option").attr("selected", false);
        $("#music-arr option:eq(" + index_next + ")").attr("selected", true);
    })
    //控制自动播放
    var audio=document.getElementById("audio");
    var volume_now=audio.volume;
    $(".volume-bar .muted img").bind("click",function () {
        var $volume_icon=$(this).attr("src")
        var volume_width=volume_now*192-2;
        if (audio.muted==false&&$volume_icon=="./img/播放器-有声.png"){
            $(this).attr("src","./img/静音.png");
            $(".volume-handle").css("left","-2px");
            $(".volume-copy").css("width","0");
            audio.volume=0;
        }else{
            $(this).attr("src","./img/播放器-有声.png");
            $(".volume-handle").css("left",volume_width+"px");
            $(".volume-copy").css("width",volume_width+"px");
            audio.volume=volume_now;
        }
    })
    //点击单击控制是否静音
    $(".volume-line").click(function (event) {
        var offset=$(this).offset();
        var page=event.pageX;
        // alert(offset.left);
        // alert(page)
        var volume_show=page-offset.left;
        var volume=volume_show/212;
        var position=volume_show-2;
        audio.volume=volume;
        $(".volume-handle").css("left",position+"px");
        $(".volume-copy").css("width",volume_show+"px");
    })
    //单击控制音量大小
    $(".volume-line").mouseup(function (event) {
        var offset=$(this).offset();
        var page=event.pageX;
        var volume_show=page-offset.left;
        var position=volume_show-2;
        var volume=volume_show/212;
        audio.volume=volume;
        $(".volume-handle").css("left",position+"px");
        $(".volume-copy").css("width",volume_show+"px");
    })
    //按下鼠标移动控制音量大小
    function duration() {
        var music_duration=audio.duration;
        var minute=Math.floor(music_duration/60);
        var second=Math.floor((music_duration/60-minute)*60);
        function durationTime(){
            var duration_text;
            if (second<10){
                duration_text="0"+minute+":"+"0"+second;
            }else{
                duration_text="0"+minute+":"+second;
            }
            return duration_text;
        }
        var duration_time=durationTime();
        $(".duration-time").text(duration_time);
    }
    duration();
    $("#audio").bind("canplay",function () {
        duration();
    })
    //获取当前歌曲时长
    function current() {
        var currentTime=audio.currentTime;
        var minute=Math.floor(currentTime/60);
        var second=Math.floor((currentTime/60-minute)*60);
        function current_time(){
            var current_text;
            if (second<10){
                current_text="0"+minute+":"+"0"+second;
            }else{
                current_text="0"+minute+":"+second;
            }
            return current_text;
        }
        var current_time=current_time();
        $(".current-time").text(current_time);
    }
    $(".progress-line").click(function (event) {
        var music_duration=audio.duration;
        var offset=$(this).offset();
        var page=event.pageX;
        var progress_show=page-offset.left;
        var position=progress_show-2;
        var progress=progress_show/303;
        audio.currentTime=progress*music_duration;
        $(".progress-handle").css("left",position+"px");
        $(".progress-copy").css("width",progress_show+"px");
        current();
    })
    $(".progress-line").mouseup(function (event) {
        var music_duration=audio.duration;
        var offset=$(this).offset();
        var page=event.pageX;
        var progress_show=page-offset.left;
        var position=progress_show-2;
        var progress=progress_show/303;
        audio.currentTime=progress*music_duration;
        $(".progress-handle").css("left",position+"px");
        $(".progress-copy").css("width",progress_show+"px");
        current();
    })
    $("#audio").bind("timeupdate",function () {
        current();
        var music_duration=audio.duration;
        var current_time=audio.currentTime;
        var position=current_time/music_duration*303-2;
        var progress_show=current_time/music_duration*303;
        $(".progress-handle").css("left",position+"px");
        $(".progress-copy").css("width",progress_show+"px");
    })
    //控制当前播放进度条
    $(".music-function .lyric").click(function () {
        $(".album-box").toggle();
        $(".music-box .layer-ct").toggle();
        $(".music-name").toggleClass("color");
    })
    //控制歌词面板的显隐
    $("#audio").bind("play",function () {
        var src=$(this).attr("src");
        var str1='./music/';
        var str2='.mp3';
        var list=src.split(src.match(str1));
        var music=(list[1].split(str2))[0];
        $(".music-name").text(music);
        $(".music-name").css("animation","myMove 20s linear infinite");
    })
    $("#audio").bind("pause",function () {
        var src=$(this).attr("src");
        var str1='./music/';
        var str2='.mp3';
        var list=src.split(src.match(str1));
        var music=(list[1].split(str2))[0];
        $(".music-name").text(music);
        $(".music-name").css("animation","");
    })
    // $("#audio").bind("canplaythrough",function () {
    //     var src=$(this).attr("src");
    //     var str1='./music/';
    //     var str2='.mp3';
    //     var list=src.split(src.match(str1));
    //     var music=(list[1].split(str2))[0];
    //     $(".music-name").text(music);
    //     $(".music-name").css("animation","");
    // })
})




/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/css-loader/index.js!./music_play.css", function() {
			var newContent = require("!!./node_modules/css-loader/index.js!./music_play.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "html,body{\r\n    margin:0px;\r\n    padding: 0px;\r\n    height: 100%;\r\n    background: linear-gradient(45deg,#ca4bca 0%,#7fffd4 100%);\r\n    overflow: hidden;\r\n}\r\naudio{\r\n    width: 700px;\r\n    position: absolute;\r\n    display: none;\r\n}\r\n.progress{\r\n    width: 700px;\r\n    height: 50px;\r\n    background:black;\r\n    position: relative;\r\n}\r\n.current-time{\r\n    width: 45px;\r\n    height: 25px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 10px;\r\n    top:15px;\r\n    text-align: center;\r\n    line-height: 25px;\r\n    font-size: 16px;\r\n    color: red;\r\n}\r\n.progress-container{\r\n    width: 300px;\r\n    height: 4px;\r\n    position: absolute;\r\n    left: 65px;\r\n    top:24px;\r\n    border:2px solid red;\r\n    border-radius: 20px;\r\n    z-index: 2;\r\n}\r\n.progress-line{\r\n    width: 300px;\r\n    height: 4px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left:-2px;\r\n    top:-2px;\r\n    border:2px solid red;\r\n    border-radius: 20px;\r\n    z-index: 5;\r\n    cursor: pointer;\r\n}\r\n.progress-copy{\r\n    width: 0px;\r\n    height: 4px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    background: red;\r\n    left:-2px;\r\n    top:-2px;\r\n    border:2px solid red;\r\n    border-radius: 20px;\r\n    z-index: 1;\r\n}\r\n.progress-handle{\r\n    width: 15px;\r\n    height: 15px;\r\n    border-radius: 10px;\r\n    border:3px solid green;\r\n    position: absolute;\r\n    background:greenyellow ;\r\n    margin-top: -9px;\r\n    left: -2px;\r\n    z-index: 10;\r\n    cursor: pointer;\r\n}\r\n.duration-time{\r\n    width: 45px;\r\n    height: 25px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 385px;\r\n    top:15px;\r\n    text-align: center;\r\n    line-height: 25px;\r\n    font-size: 16px;\r\n    color: red;\r\n}\r\n.volume-bar{\r\n    width: 300px;\r\n    height:50px;\r\n    position: relative;\r\n}\r\n.volume_container{\r\n    width: 200px;\r\n    height: 4px;\r\n    position:absolute;\r\n    top: 24px;\r\n    left: 480px;\r\n    border-radius: 20px;\r\n    border:2px solid red;\r\n    cursor: pointer;\r\n}\r\n.volume-line{\r\n    width: 200px;\r\n    height: 4px;\r\n    position:absolute;\r\n    border-radius: 20px;\r\n    border:2px solid red;\r\n    left: -2px;\r\n    top:-2px;\r\n    z-index: 5;\r\n    cursor: pointer;\r\n}\r\n.volume-copy{\r\n    width: 192px;\r\n    height: 4px;\r\n    position:absolute;\r\n    background: red;\r\n    left: -2px;\r\n    top:-2px;\r\n    border-radius: 20px;\r\n    border:2px solid red;\r\n    z-index: 1;\r\n}\r\n.volume-handle{\r\n    width: 15px;\r\n    height: 15px;\r\n    border-radius: 10px;\r\n    border:3px solid green;\r\n    position: absolute;\r\n    background:greenyellow ;\r\n    margin-top: -9px;\r\n    left: 190px;\r\n    z-index: 10;\r\n}\r\n.muted{\r\n    display:block;\r\n    width: 30px;\r\n    height: 25px;\r\n    position: absolute;\r\n    top:15px;\r\n    left: 445px;\r\n}\r\n.muted img{\r\n    display: inline-block;\r\n    width: 30px;\r\n    height: 25px;\r\n    top: 0px;\r\n    left: 0px;\r\n    position: absolute;\r\n}\r\n.play-control{\r\n    width: 700px;\r\n    height: 50px;\r\n    display: block;\r\n    background:black;\r\n    position: relative;\r\n}\r\n.play-control .play-type img{\r\n    display: inline-block;\r\n    position: absolute;\r\n    width: 30px;\r\n    height:25px;\r\n    background:black;\r\n    left:20px;\r\n    top: 10px;\r\n    cursor: pointer;\r\n}\r\n.play-control .play-prev img{\r\n    display: inline-block;\r\n    width: 30px;\r\n    height:25px;\r\n    background:black;\r\n    position: absolute;\r\n    left:200px;\r\n    top: 10px;\r\n    cursor: pointer;\r\n}\r\n.play-control .play-pause img{\r\n    display: inline-block;\r\n    width: 35px;\r\n    height:35px;\r\n    position: absolute;\r\n    background:black;\r\n    left:335px;\r\n    top: 6px;\r\n    cursor: pointer;\r\n}\r\n.play-control .play-next img{\r\n    display: inline-block;\r\n    width: 30px;\r\n    height:25px;\r\n    position: absolute;\r\n    background:black;\r\n    right:200px;\r\n    top: 10px;\r\n    cursor: pointer;\r\n}\r\n.play-control .have-play img{\r\n    display: inline-block;\r\n    width: 30px;\r\n    height:25px;\r\n    position: absolute;\r\n    background:black;\r\n    right:20px;\r\n    top: 10px;\r\n    cursor: pointer;\r\n}\r\n#music-arr{\r\n    width:500px;\r\n    height: 600px;\r\n    display: none;\r\n    position: absolute;\r\n    right:-500px;\r\n    top:-500px;\r\n    border: 3px solid burlywood;\r\n}\r\n.music-function{\r\n    width: 700px;\r\n    height:50px;\r\n    display: block;\r\n    background:black;\r\n    position: relative;\r\n    border-radius: 0 0 20px 20px;\r\n}\r\n.music-function .lyric img{\r\n    display: inline-block;\r\n    width: 30px;\r\n    height:30px;\r\n    position: absolute;\r\n    left:15px;\r\n    top: 10px;\r\n    cursor: pointer;\r\n}\r\n.music-function .like img{\r\n    display: inline-block;\r\n    width: 30px;\r\n    height:30px;\r\n    position: absolute;\r\n    left:200px;\r\n    top: 10px;\r\n    cursor: pointer;\r\n}\r\n.music-function .share img{\r\n    display: inline-block;\r\n    width: 25px;\r\n    height:25px;\r\n    position: absolute;\r\n    right:200px;\r\n    top: 13px;\r\n    cursor: pointer;\r\n}\r\n.music-function .more img{\r\n    display: inline-block;\r\n    width: 30px;\r\n    height:30px;\r\n    position: absolute;\r\n    background:black;\r\n    right:20px;\r\n    top: 10px;\r\n    cursor: pointer;\r\n}\r\n.music-box{\r\n    width: 700px;\r\n    height: 600px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    box-shadow: 0 20px 40px #5b6b77;\r\n    -moz-box-shadow: 0 20px 40px #5b6b77;\r\n    -webkit-box-shadow: 0 20px 40px #5b6b77;\r\n}\r\n.music-content{\r\n    width: 700px;\r\n    height: 600px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    box-shadow: 0 20px 40px #5b6b77;\r\n    -moz-box-shadow: 0 20px 40px #5b6b77;\r\n    -webkit-box-shadow: 0 20px 40px #5b6b77;\r\n    z-index: 100;\r\n}\r\n.music-box .img-filter {\r\n    height: 100%;\r\n    background-size: cover;\r\n    -webkit-filter: blur(15px);\r\n    -moz-filter: blur(15px);\r\n    -o-filter: blur(15px);\r\n    -ms-filter: blur(15px);\r\n    filter: blur(15px);\r\n    border-radius: 20px;\r\n    display: none;\r\n}\r\n.music-box .layer-ct {\r\n    width: 700px;\r\n    height: 450px;\r\n    position: absolute;\r\n    background: rgba(0,0,0,.2);\r\n    border-radius: 20px 20px 0 0;\r\n    display: none;\r\n}\r\n.lyric-box{\r\n    width:700px;\r\n    height: 450px;\r\n    position: relative;\r\n    background: black;\r\n    opacity: 0.5;\r\n    margin: 0px auto;\r\n    border-radius: 20px 20px 0 0;\r\n}\r\n.lyric-list{\r\n    width:500px;\r\n    height: 300px;\r\n    position: absolute;\r\n    background: black;\r\n    left:50%;\r\n    transform: translateX(-50%);\r\n    opacity: 0.5;\r\n    margin: 75px auto;\r\n    overflow:hidden;\r\n}\r\np.lyric{\r\n    color:#fff;\r\n    position: relative;\r\n    line-height:16px ;\r\n    font-size: 16px;\r\n    letter-spacing: 5px;\r\n    top: 0;\r\n}\r\n@keyframes myRotate {\r\n    0%{transform:rotate(0deg);}\r\n    50%{transform:rotate(180deg);}\r\n    100%{transform:rotate(360deg);}\r\n}\r\n.album-box img{\r\n    animation:myRotate 30s linear infinite;\r\n}\r\n@keyframes highlight {\r\n    0%{color:#fff;}\r\n    100%{color: purple;}\r\n}\r\n.player-box{\r\n    width: 700px;\r\n    height: 150px;\r\n    display: block;\r\n    position: absolute;\r\n    opacity: 0.4;\r\n    bottom: 0;\r\n}\r\n.music-show{\r\n    width:400px;\r\n    height:70px;\r\n    overflow: hidden;\r\n    margin:10px auto;\r\n    position: relative;\r\n}\r\n.color{\r\n    color: #fff;\r\n}\r\n.music-show p{\r\n    position: relative;\r\n    left:0px;\r\n    font-size: 20px;\r\n    line-height: 20px;\r\n}\r\n@keyframes myMove {\r\n    0%{left:0px}\r\n    25%{left:-200px}\r\n    50%{left:0px}\r\n    75%{left:200px}\r\n    100%{left:0px}\r\n}\r\n.album-box{\r\n    position: absolute;\r\n    display: block;\r\n    width:300px;\r\n    height: 300px;\r\n    border-radius:200px;\r\n    left: 50%;\r\n    top: 40%;\r\n    transform: translate(-50%,-50%);\r\n    box-shadow: 0 10px 10px #5b6b77;\r\n    -moz-box-shadow: 0 10px 10px #5b6b77;\r\n    -webkit-box-shadow: 0 10px 10px #5b6b77;\r\n}\r\n.album-box img{\r\n    position: absolute;\r\n    display: block;\r\n    width:300px;\r\n    height: 300px;\r\n    border: 2px solid lightpink;\r\n    border-radius:200px;\r\n    left: 0;\r\n    top: 0;\r\n    box-shadow: 10px 10px 10px #5b6b77;\r\n    -moz-box-shadow: 10px 10px 10px #5b6b77;\r\n    -webkit-box-shadow: 10px 10px 10px #5b6b77;\r\n    /*animation: rotate 30s linear infinite;*/\r\n}\r\n@keyframes lyric-move{\r\n    0%{font-size: 16px;font-style: italic;color:#fff;}\r\n    50%{font-size: 20px;font-style: italic;color:deeppink;}\r\n    100%{font-size: 16px;font-style: italic;color:#fff;}\r\n}\r\np.info{\r\n    display: none;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);