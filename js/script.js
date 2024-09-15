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

let messages = [];
let currentMessageIndex = 0;

fetch('quotes.json')
    .then(response => response.json())
    .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
        document.getElementById('flashing-message').textContent = randomQuote;
    })
    .catch(error => console.error('Error loading quotes:', error));

document.addEventListener('DOMContentLoaded', loadMessages);

function filterVersions() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const fuzzySearchEnabled = document.getElementById('fuzzy-search').checked;
    const versionCards = document.querySelectorAll('.version-card');

    versionCards.forEach(card => {
        const versionName = card.querySelector('h4').textContent.toLowerCase();
        const isMatch = fuzzySearchEnabled
            ? fuzzyMatch(versionName, searchInput)
            : versionName.includes(searchInput);
        card.style.display = isMatch ? 'block' : 'none';
    });

    // 调用应用协议的函数
    handleAppRedirect(searchInput);
}

// 新的模糊匹配函数
function fuzzyMatch(versionName, searchInput) {
    const searchTerms = searchInput.split(' ');

    // 检查每一个搜索词
    return searchTerms.every(term => {
        // 处理常见的版本格式
        const regex = new RegExp(term.replace(/build/i, 'build').replace(/b(\d+)/, 'build \$1'), 'i');
        return regex.test(versionName);
    });
}

function handleAppRedirect(input) {
    const appRedirects = {
        'minecraft': 'minecraft:',
        'minecraftpe': 'minecraftpe:',
        'genshin impact': 'yuanshengame:'
    };

    const appUrl = appRedirects[input];
    if (appUrl) {
        window.location.href = appUrl;
    }
}

function filterByGame(game) {
    const versionCards = document.querySelectorAll('.version-card');

    versionCards.forEach(card => {
        const cardGame = card.getAttribute('data-game');
        card.style.display = cardGame === game ? 'block' : 'none';
    });
}

function downloadVersion(version, type) {
    const downloadLinks = {
        '0.9847': {
            'classroom': 'https://pan.huang1111.cn/s/A6baXiB',
        },
        '0.9843': {
            'classroom': 'https://pan.huang1111.cn/s/WzeOAc3',
        },
        '0.984': {
            'classroom': 'https://pan.huang1111.cn/s/mxWOoF1',
        },
        '0.982': {
            'classroom': 'https://pan.huang1111.cn/s/lagO4uL',
            'premium': 'https://pan.huang1111.cn/s/752EBFg',
        },
        '1.5.1 Build 3': {
            'classroom': 'https://pan.huang1111.cn/s/nqRx9tm',
        },
        '1.5.1 Build 4': {
            'classroom': 'https://pan.huang1111.cn/s/oXVR1F8',
        },
        '1.5.1 Build 7': {
            'classroom': 'https://pan.huang1111.cn/s/6edlXuN',
        },
        '1.5.1 Build 9': {
            'classroom': 'https://pan.huang1111.cn/s/K9wjgTY',
            'premium': 'https://pan.huang1111.cn/s/LxOPXu6',
        },
        '1.5.1 Build 16': {
            'classroom': 'https://pan.huang1111.cn/s/XqebGul',
        },
        '1.5.2 Build 1': {
            'classroom': 'https://pan.huang1111.cn/s/E7yZ7Hb',
            'premium': 'https://pan.huang1111.cn/s/Nko2EI1',
        },
        '1.8.9 Build 3': {
            'classroom': 'https://pan.huang1111.cn/s/P66bZhm',
        },
        '1.14.50': {
            'client': 'https://pan.huang1111.cn/s/oXXbjh8',
        },
        '1.5.9': {
            'win': 'https://pan.huang1111.cn/s/6eemzuN',
            'android': 'https://pan.huang1111.cn/s/DVVa9f4',
        },
        '1.5.2': {
            'android': 'https://pan.huang1111.cn/s/RYYAQTB',
        },
        '1.5.1': {
            'win': 'https://pan.huang1111.cn/s/XqqE7tl',
            'android': 'https://pan.huang1111.cn/s/aEEX6hG',
        },
        '1.4.4': {
            'android': 'https://pan.huang1111.cn/s/1QQ55Iv',
        },
        '0.1.1': {
            'client': 'https://pan.huang1111.cn/s/y5qV1C6',
        },
        '0.1.0': {
            'client': 'https://pan.huang1111.cn/s/1QNz5uv',
        },
    };

    const link = downloadLinks[version][type];
    if (link) {
        window.location.href = link;
    } else {
        alert('下载链接不存在！');
    }
}

function showSection(section) {
    const menuSection = document.getElementById('menu');
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const settingsSection = document.getElementById('settings');
    const versionCards = document.querySelectorAll('.version-card');

    if (section === 'about') {
        homeSection.style.display = 'none';
        settingsSection.style.display = 'none';
        aboutSection.style.display = 'block';
        menuSection.style.display = 'none';
    } else if (section === 'all') {
        homeSection.style.display = 'block';
        aboutSection.style.display = 'none';
        settingsSection.style.display = 'none';
        menuSection.style.display = 'none';
        versionCards.forEach(card => {
            card.style.display = 'block';
        });
    } else if (section === 'settings') {
        homeSection.style.display = 'none';
        aboutSection.style.display = 'none';
        settingsSection.style.display = 'block';
        menuSection.style.display = 'none';
    } else if (section === 'plan') {
        homeSection.style.display = 'none';
        aboutSection.style.display = 'none';
        settingsSection.style.display = 'none';
        menuSection.style.display = 'none';
    } else {
        homeSection.style.display = 'none';
        settingsSection.style.display = 'none';
        aboutSection.style.display = 'none';
        menuSection.style.display = 'block';
    }
}

function showDetails(version) {
    const versionDetails = {
        '1.14.50': '这是版本 1.14.50 的详细信息，包含了所有更新和修复的内容。',
        '1.5.9': '这是教育版 1.0.0 的详细信息，包含了所有更新和修复的内容。',
        'MinecraftEdu': '这是MinecraftEdu版的详细信息，包含了所有更新和修复的内容。',
        '京东教育版': '这是京东教育版的详细信息，包含了所有更新和修复的内容。',
    };

    document.getElementById('modal-title').textContent = version;
    document.getElementById('modal-content').textContent = versionDetails[version];
    document.getElementById('detail-modal').style.display = 'block';
}

function closeDetails(event) {
    const modal = document.getElementById('detail-modal');
    if (event.target === modal || event.target.classList.contains('close-button')) {
        modal.style.display = 'none';
    }
}

function filterByType(type) {
    const versionCards = document.querySelectorAll('.version-card');

    versionCards.forEach(card => {
        const cardType = card.getAttribute('data-type');
        card.style.display = cardType === type || type === '全部' ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    filterByType('全部');
});

// 更新游戏和类型选择功能
function filterByGameAndType(game, type) {
    const versionCards = document.querySelectorAll('.version-card');

    versionCards.forEach(card => {
        const cardGame = card.getAttribute('data-game');
        const cardType = card.getAttribute('data-type');
        card.style.display = (cardGame === game || game === '全部') && (cardType === type || type === '全部') ? 'block' : 'none';
    });
}
