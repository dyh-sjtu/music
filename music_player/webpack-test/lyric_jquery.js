require("./music_play.js");
require("style-loader!css-loader!./music_play.css");
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

