import { Game } from './types';

// INSTRUCTIONS FOR USER:
// 1. To add a local game, place the game folder in your public directory (e.g., 'public/games/my-game/').
// 2. Set the 'path' to '/games/my-game/index.html'.
// 3. To add a hosted game (like the ones below), just set the 'path' to the full URL (https://...).

export const GAMES_LIST: Game[] = [
  {
    id: 'coffee',
    title: '快手咖啡师',
    description: '快节奏咖啡店模拟器。制作饮品，服务顾客，赚取小费。',
    coverUrl: 'https://placehold.co/400x600/78350f/white?text=快手咖啡师',
    path: 'https://coffeerusher.netlify.app/',
    tags: ['模拟', '休闲'],
  },
  {
    id: 'delivery',
    title: '快递搁浅',
    description: '物理模拟送货游戏。在摩托车上保持包裹平衡，送达目的地。',
    coverUrl: 'https://placehold.co/400x600/f97316/white?text=快递搁浅',
    path: 'https://superdeliver.netlify.app/',
    tags: ['物理', '模拟'],
  },
  {
    id: 'moto-delivery',
    title: '摩托送快递',
    description: '仔细控制速度，送货不掉包。街机风格的快递挑战。',
    coverUrl: 'https://placehold.co/400x600/ea580c/white?text=摩托送快递',
    path: 'https://superdeliver.netlify.app/',
    tags: ['街机', '动作'],
  },
  {
    id: 'rhythm',
    title: '生活律动',
    description: '生活节奏模拟器。安排日常活动，创造属于你的节拍。',
    coverUrl: 'https://placehold.co/400x600/db2777/white?text=生活律动',
    path: 'https://liferythm.netlify.app/',
    tags: ['音乐', '策略'],
  },
  {
    id: 'elevator',
    title: '电梯Massage',
    description: '帮助疲惫的上班族在电梯里放松。戳破负面情绪气泡。',
    coverUrl: 'https://placehold.co/400x600/a8a29e/black?text=电梯Massage',
    path: 'https://elevatormassage.netlify.app/',
    tags: ['解谜', '休闲'],
  },
  {
    id: 'stream',
    title: '直播模拟器',
    description: '成为直播摄像师。拖拽控制镜头框架，捕捉精彩瞬间。',
    coverUrl: 'https://placehold.co/400x600/8b5cf6/white?text=直播模拟器',
    path: 'https://savethestream.netlify.app/',
    tags: ['模拟', '策略'],
  },
  {
    id: 'raining',
    title: '雨中修行',
    description: '在文字雨中漫步。吸收智慧，躲避负能量。',
    coverUrl: 'https://placehold.co/400x600/3b82f6/white?text=雨中修行',
    path: 'https://rainingwords.netlify.app/',
    tags: ['禅意', '反应'],
  },
  {
    id: 'bus',
    title: '田园公交',
    description: '3D公交模拟器。观看乘客上车、聊天、下车，享受田园风光。',
    coverUrl: 'https://placehold.co/400x600/84cc16/black?text=田园公交',
    path: 'https://countrybus.netlify.app/',
    tags: ['3D', '模拟'],
  },
  {
    id: 'subway',
    title: '地铁睡神',
    description: '在地铁上打瞌睡时保持平衡。别摔倒，别坐过站！',
    coverUrl: 'https://placehold.co/400x600/10b981/white?text=地铁睡神',
    path: 'https://subwaygirl.netlify.app/',
    tags: ['平衡', '街机'],
  },
  {
    id: 'tony',
    title: '剪刀手托尼',
    description: '成为理发师托尼。理解顾客需求，选择合适的发型。',
    coverUrl: 'https://placehold.co/400x600/0ea5e9/white?text=剪刀手托尼',
    path: 'https://amazingtony.netlify.app/',
    tags: ['模拟', '休闲'],
  },
  {
    id: 'light-shadow',
    title: '刀光闪避',
    description: '快速反应QTE游戏。躲避攻击，反击敌人。',
    coverUrl: 'https://placehold.co/400x600/black/white?text=刀光闪避',
    path: 'https://clairobscur.netlify.app/',
    tags: ['QTE', '动作'],
  },
  {
    id: 'dinner-sim',
    title: '商务饭局',
    description: '商务晚餐模拟器。选择谁发言来促成交易，把握饭局节奏。',
    coverUrl: 'https://placehold.co/400x600/f59e0b/black?text=商务饭局',
    path: 'https://abigdeal.netlify.app/',
    tags: ['策略', '对话'],
  },
  {
    id: 'indie-dev',
    title: '独游发展国',
    description: '独立游戏开发模拟器。带领团队克服挑战，打造爆款游戏。',
    coverUrl: 'https://placehold.co/400x600/1e293b/white?text=独游发展国',
    path: 'https://endearing-lolly-ecae68.netlify.app/',
    tags: ['经营', 'RPG'],
  },
  {
    id: 'mask-shop',
    title: '假面商店',
    description: '经营神秘的面具商店。为每位顾客找到合适的面具。',
    coverUrl: 'https://placehold.co/400x600/4c1d95/white?text=假面商店',
    path: 'https://desiremaskshop.netlify.app/',
    tags: ['模拟', '神秘'],
  },
  {
    id: 'perfect-date',
    title: '约会聊天',
    description: '分支剧情约会游戏。驾驭对话，收获爱情。',
    coverUrl: 'https://placehold.co/400x600/pink/black?text=约会聊天',
    path: 'https://perfectdate.netlify.app/',
    tags: ['视觉小说', '恋爱'],
  },
  {
    id: 'key-choice',
    title: '关键选择',
    description: '选择至关重要。每个决定都将塑造你的命运。',
    coverUrl: 'https://placehold.co/400x600/e11d48/FFF?text=关键选择',
    path: 'https://keychoice.netlify.app/',
    tags: ['剧情', '选择'],
  },
  {
    id: 'detective',
    title: '幻听神探',
    description: '拥有特殊能力的侦探。聆听物品说话，解决离奇案件。',
    coverUrl: 'https://placehold.co/400x600/1f2937/white?text=幻听神探',
    path: 'https://keychoice.netlify.app/', // 需要更新实际链接
    tags: ['推理', '解谜'],
  },
  {
    id: 'dish-battle',
    title: '洗碗风波',
    description: '关于工作生活平衡的互动故事。多重结局等你探索。',
    coverUrl: 'https://placehold.co/400x600/64748b/white?text=洗碗风波',
    path: 'https://keychoice.netlify.app/', // 需要更新实际链接
    tags: ['剧情', '生活'],
  },
  {
    id: 'wudao',
    title: '悟·道',
    description: '悟道之旅。在禅意氛围中体验哲学深度。',
    coverUrl: 'https://placehold.co/400x600/44403c/white?text=悟·道',
    path: 'https://keychoice.netlify.app/', // 需要更新实际链接
    tags: ['禅意', '哲学'],
  },
  {
    id: 'kiss-camera',
    title: 'Kiss Camera',
    description: '演唱会摄像师模拟。在人群中捕捉亲吻镜头上的情侣。',
    coverUrl: 'https://placehold.co/400x600/ec4899/white?text=Kiss+Camera',
    path: 'https://keychoice.netlify.app/', // 需要更新实际链接
    tags: ['街机', '派对'],
  },
  {
    id: 'ppt-master',
    title: '吹牛PPT大师',
    description: '数据可视化游戏。60秒内操纵图表以达成公司目标。',
    coverUrl: 'https://placehold.co/400x600/2563eb/white?text=PPT大师',
    path: 'https://keychoice.netlify.app/', // 需要更新实际链接
    tags: ['解谜', '办公'],
  },
];
