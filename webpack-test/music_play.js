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


