export interface Mission {
  id: string;
  title: string;
  description: string;
  location: string;
  photo?: string;
  completed: boolean;
  isSecret?: boolean;
}

export interface City {
  id: string;
  name: string;
  x: number;
  y: number;
  missions: Mission[];
}