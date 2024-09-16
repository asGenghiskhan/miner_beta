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

let messages = [
    "By ChatGPT!",
    "MinecraftEdu!",
    "Minecraft!",
    "Pre-classic!",
    "Classic!",
    "Indev!",
    "Infdev!",
    "Vanilla!",
    "Try shift+F2!",
    "Sky dimension!",
    "The first is 0.6!",
    "Try F7 in Indev!",
    "Keep away 422!",
    "Github Pages!",
    "Nether Reactor!",
    "glowingobsidian!",
    "Reserved6!",
    "Winter Mode!",
    "Miner!",
    "Is Alpha!"
];

document.addEventListener('DOMContentLoaded', loadMessages);

function loadMessages() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomQuote = messages[randomIndex];
    document.getElementById('flashing-message').textContent = randomQuote;
}

function showSection(section) {
    const menuSection = document.getElementById('menu');
    const aboutSection = document.getElementById('about');
    const settingsSection = document.getElementById('settings');

    if (section === 'about') {
        settingsSection.style.display = 'none';
        aboutSection.style.display = 'block';
        menuSection.style.display = 'none';
    } else if (section === 'settings') {
        aboutSection.style.display = 'none';
        settingsSection.style.display = 'block';
        menuSection.style.display = 'none';
    } else {
        settingsSection.style.display = 'none';
        aboutSection.style.display = 'none';
        menuSection.style.display = 'block';
    }
}
