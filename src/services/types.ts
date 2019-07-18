export interface Message {
  topic: string;
  message: object | string;
}

export interface SubscriptionConfig {
  name: string;
  handler: () => void;
}

export interface PubSubAPIConfig {
  projectId: string;
}
