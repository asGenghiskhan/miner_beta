const languages = {
    zh: {
        title: "我的世界版本库",
        home: "首页",
        about: "关于",
        settings: "设置",
        // 其他文本...
    },
    en: {
        title: "Miner",
        home: "Home",
        about: "About",
        settings: "Settings",
        // 其他文本...
    }
};

let currentLanguage = 'zh'; // 默认语言

function changeLanguage() {
    const selectedLanguage = document.getElementById('language-select').value;
    currentLanguage = selectedLanguage;
    localStorage.setItem('language', currentLanguage);
    updateContent();
}

function updateContent() {
    document.title = languages[currentLanguage].title;
    document.querySelector('h1').innerText = languages[currentLanguage].title;
    document.querySelector('#menu h2').innerText = languages[currentLanguage].home;
    document.querySelector('#about h2').innerText = languages[currentLanguage].about;
    document.querySelector('#settings h2').innerText = languages[currentLanguage].settings;
    // 更新其他文本...
}

function initializeLanguage() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        document.getElementById('language-select').value = currentLanguage;
    }
    updateContent();
}

// Initialize language on window load
window.onload = initializeLanguage;

// Add event listener for language selection
document.getElementById('language-select').addEventListener('change', changeLanguage);