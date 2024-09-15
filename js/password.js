const modal = document.getElementById('modal');
const content = document.getElementById('content');
const submitButton = document.getElementById('submit');
const closeButton = document.getElementById('close');
const clearDataButton = document.getElementById('clearData');

// 检查是否已输入正确密码
if (localStorage.getItem('authenticated') === 'true') {
    content.style.display = 'block';
} else {
    modal.style.display = 'block';
}

submitButton.onclick = function() {
    const password = document.getElementById('password').value;
    if (password === '6d 69 6e 65 72 ') { // 替换为你的密码
        localStorage.setItem('authenticated', 'true');
        modal.style.display = 'none';
        content.style.display = 'block';
    } else {
        alert('密码错误！');
    }
};

closeButton.onclick = function() {
    window.location.href = 'https://asgenghiskhan.github.io'; // 替换为你想跳转的链接
};

// 清除数据按钮的功能
clearDataButton.onclick = function() {
    localStorage.removeItem('authenticated');
    content.style.display = 'none';
    modal.style.display = 'block';
};
