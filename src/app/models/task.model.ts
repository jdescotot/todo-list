
export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    discarded: boolean;
    createdAt: Date;
    updatedAt?: Date;
    completedAt?: Date;
    discardedAt?: Date;
  }
  