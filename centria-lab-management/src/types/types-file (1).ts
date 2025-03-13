// User-related types
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

// Card and Dashboard types
export interface CardData {
  id: string;
  title: string;
  description: string;
  icon?: string;
  badgeCount?: number;
  link: string;
}

// Notification types
export interface Notification {
  id: number;
  icon: string;
  title: string;
  time: string;
  read: boolean;
  content?: string;
}

// Safety guidelines types
export interface Guideline {
  id: string;
  title: string;
  category: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  acknowledged: boolean;
  acknowledgedAt?: string;
}

// Testing types
export interface Test {
  id: string;
  title: string;
  description: string;
  category: string;
  questionCount: number;
  timeLimit: number; // in minutes
  passingScore: number; // percentage
  completed: boolean;
  score?: number;
  completedAt?: string;
}

export interface Question {
  id: string;
  testId: string;
  text: string;
  type: 'multiple_choice' | 'true_false' | 'short_answer';
  options?: string[];
  correctAnswer: string | string[];
}

export interface TestSubmission {
  testId: string;
  answers: Record<string, string | string[]>;
  startedAt: string;
  completedAt: string;
}

// Badge types
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  criteria: string;
  earnedAt?: string;
}