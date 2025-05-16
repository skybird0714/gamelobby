document.addEventListener('DOMContentLoaded', () => {
    // 游戏数据
    const games = [
        {
            icon: 'mc.png',
            name: 'MCguesser',
            description: '询问AI来猜测AI所想的Minecraft物品',
            link: 'https://mcguesser.071400.xyz/'
        },
        {
            icon: 'ba.png',
            name: 'BAguesser',
            description: '根据提示来猜测蔚蓝档案人物（制作中）',
            link: 'https://baguesser.071400.xyz/'
        },
        {
            icon: 'hacker.png',
            name: '黑客模拟',
            description: '只有动态效果，不能玩',
            link: 'https://071400.xyz/game/hacker.html'
        },
        {
            icon: 'snake.png',
            name: '贪吃蛇',
            description: '经典游戏',
            link: 'https://071400.xyz/game/tcs.html'
        },
        {
            icon: 'se.png',
            name: '看你有多色',
            description: '找出所有色块里颜色不同的一个',
            link: 'https://071400.xyz/game/se2/se.html'
        },
        {
            icon: 'pvz.png',
            name: '植物大战僵尸',
            description: '由于一些原因暂时无法游玩',
            link: 'https://071400.xyz/game/pvz/pvz.htm'
        },
        {
            icon: 'fish.png',
            name: '捕鱼',
            description: '经典捕鱼',
            link: 'https://071400.xyz/game/fishjoy/index.html'
        },
        {
            icon: '2048.png',
            name: '2048',
            description: '从2拼到2048',
            link: 'https://071400.xyz/game/2048/index.html'
        }
    ];

    // 背景图片轮换功能
    function setRandomBackground() {
        const bgNumber = Math.floor(Math.random() * 6) + 1; // 随机 1-6
        document.body.style.background = `url('src/images/bg${bgNumber}.jpg') no-repeat center center fixed`;
        document.body.style.backgroundSize = 'cover';
    }

    // 初始化页面加载时设置随机背景
    setRandomBackground();

    // 添加游戏块到页面
    const gamesContainer = document.getElementById('gamesContainer');
    
    games.forEach(game => {
        const gameBlock = document.createElement('a');
        gameBlock.href = game.link;
        gameBlock.target = '_blank';
        gameBlock.className = 'game-block';
        gameBlock.innerHTML = `
            <img src="src/images/${game.icon}" alt="${game.name}" class="game-icon">
            <div class="game-name">${game.name}</div>
            <div class="game-description">${game.description}</div>
        `;
        gamesContainer.appendChild(gameBlock);
    });
}); 