export interface Game {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  coverUrl: string;
  /**
   * The relative path to the game's index.html.
   * e.g., "/games/fruit-ninja/index.html"
   */
  path: string;
  tags: string[];
  /**
   * 发布日期，格式：YYYY-MM-DD
   */
  releaseDate: string;
  /**
   * 创作故事，展示在卡片背面
   */
  story: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
