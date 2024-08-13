

document.onmouseover = function(event) {
    var currentTime = new Date().toLocaleString(); // 获取当前时间并转换为本地字符串
    var src = window.location.href;
    if (src.includes("baidu.com")) {
        baidutest()
    }
};


function baidutest(){
    alert('baidu一下你就知道')
}


