export interface Game {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  /**
   * The relative path to the game's index.html.
   * e.g., "/games/fruit-ninja/index.html"
   */
  path: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
