// 页面加载时检查存储的主题
window.addEventListener('DOMContentLoaded', function() {
    const theme = localStorage.getItem('theme');
    // 如果没有存储的主题，默认设置为深色模式
    if (!theme) {
        localStorage.setItem('theme', 'dark');
    }
    // 根据存储的主题设置页面主题
    if (theme === 'light') {
        document.body.classList.add('light');
    }
});

// 切换主题的函数
function toggleTheme() {
    document.body.classList.toggle('light');
    // 存储用户的选择
    if (document.body.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
}

window.onload = function() {
    updateProgress('progress-bar-1', 35.14);
    updateProgress('progress-bar-2', 15);
    updateProgress('progress-bar-3', 1);
    updateProgress('progress-bar-4', 5);
    displayRandomSlogan();
};

// 进度条功能
function updateProgress(barId, percentage) {
    const progressBar = document.getElementById(barId);
    const progressPercentage = document.getElementById(barId.replace('bar', 'percentage'));
    const clampedPercentage = Math.max(0, Math.min(100, percentage));

    // 清除之前的颜色类
    progressBar.classList.remove('red', 'orange', 'yellow', 'light-green', 'green');

    // 更新进度条的宽度
    progressBar.style.width = clampedPercentage + '%';
    progressPercentage.textContent = clampedPercentage + '%';

    // 根据不同阶段设置颜色
    if (clampedPercentage <= 20) {
        progressBar.classList.add('red');
    } else if (clampedPercentage <= 40) {
        progressBar.classList.add('orange');
    } else if (clampedPercentage <= 60) {
        progressBar.classList.add('yellow');
    } else if (clampedPercentage <= 80) {
        progressBar.classList.add('light-green');
    } else {
        progressBar.classList.add('green');
    }
}

// 随机标语功能
const slogans = [
    "你知道吗？版本库至今还处于内测阶段",
    "你知道吗？版本库目前还没有正式的名字",
    "你知道吗？MinecraftEdu版本目前只有个别版本的下载链接",
    "你知道吗？版本库存在几个彩蛋"
];

function displayRandomSlogan() {
    const sloganElement = document.getElementById('slogan');
    const randomIndex = Math.floor(Math.random() * slogans.length);
    sloganElement.textContent = slogans[randomIndex];
}

// 版本详情功能
function toggleDetails(versionId) {
    const details = document.getElementById(versionId);
    details.style.display = details.style.display === "none" ? "block" : "none"; // 切换显示
}

// 显示特定部分
function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.style.display = 'none'; // 隐藏所有部分
    });
    document.getElementById(sectionId).style.display = 'block'; // 显示所需部分
}

// 切换所有版本
function toggleAllVersions() {
    const allVersions = document.getElementById('all-versions');
    allVersions.style.display = allVersions.style.display === "none" ? "block" : "none"; // 切换显示所有版本
}

// 切换所有正式版本
function toggleAllFormalVersions() {
    const allFormalVersions = document.getElementById('formal-versions');
    allFormalVersions.style.display = allFormalVersions.style.display === "none" ? "block" : "none"; // 切换显示正式版本
}



// 弹窗功能
var modal = document.getElementById("versionInfoModal");
var btn = document.getElementById("versionInfoBtn");

// 点击按钮时打开弹窗
btn.onclick = function() {
    modal.style.display = "block";
}

// 关闭弹窗的函数
function closeDetails(event) {
    modal.style.display = "none";
    event.stopPropagation(); // 阻止事件冒泡
}

// 点击弹窗外部时关闭弹窗
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
