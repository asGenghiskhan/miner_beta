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
    const versionCards = document.querySelectorAll('.version-card');

    versionCards.forEach(card => {
        const versionText = card.dataset.version.toLowerCase();
        const versionTypeText = card.querySelector('.version-type').textContent.toLowerCase();

        if (versionText.includes(searchInput) || versionTypeText.includes(searchInput)) {
            card.style.display = ''; // 显示匹配的版本
        } else {
            card.style.display = 'none'; // 隐藏不匹配的版本
        }
    });
}

function downloadVersion(version, type) {
    const downloadLinks = {
        '1.5.1': {
            'win': 'https://pan.huang1111.cn/s/XqqE7tl',
            'android': 'https://pan.huang1111.cn/s/aEEX6hG',
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
    const versionCards = document.querySelectorAll('.version-card');

    if (section === 'all') {
        homeSection.style.display = 'block';
        menuSection.style.display = 'none';
        versionCards.forEach(card => {
            card.style.display = 'block';
        });
    } else {
        homeSection.style.display = 'none';
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
