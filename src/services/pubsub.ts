import { PubSub, Topic } from '@google-cloud/pubsub';
import { PubSubAPIConfig, Message, SubscriptionConfig } from './types';
function logger(msg: { type: string; payload: any }) {
  console.log(msg);
}

class PubSubAPI {
  pubsub: PubSub;
  logger: (msg: { type: string; payload: any }) => void;
  constructor(config: PubSubAPIConfig) {
    this.initilize(config);
  }

  private initilize(config: PubSubAPIConfig) {
    const { projectId } = config;
    this.pubsub = new PubSub({ projectId });
    this.logger = logger;
  }

  public async publish(msg: Message) {
    const { topic: name, message } = msg;
    let dataBuffer: Buffer, topic: Topic;

    topic = this.pubsub.topic(name);

    topic.get({ autoCreate: true }, async (err, topic, apiResponse) => {
      if (err) {
        this.logger({ type: 'error', payload: err });
        return;
      }
      if (typeof message === 'object') {
        dataBuffer = Buffer.from(JSON.stringify(message));
      } else {
        dataBuffer = Buffer.from(message);
      }
      try {
        const messageId = await topic.publish(dataBuffer);
        console.log(`Message ${messageId} published.`);
      } catch (err) {
        this.logger({ type: 'error', payload: err });
      }
    });
  }

  public subscribe(config: SubscriptionConfig) {}

  private async listSubcriptions() {
    const [subscriptions] = await this.pubsub.getSubscriptions();
    console.log(subscriptions);
  }

  public async deleteTopic(name: string) {
    try {
      await this.pubsub.topic(name).delete();
      this.logger({ type: 'success', payload: `Topic ${name} deleted` });
    } catch (err) {
      this.logger({ type: 'error', payload: err });
    }
  }

  private async listTopics() {
    const [topics] = await this.pubsub.getTopics();
    console.log(topics);
    // this.logger({ type: 'info', payload: topics });
  }

  public async createTopic(name: string) {
    try {
      const [topic] = await this.pubsub.createTopic(name);
      this.logger({ type: 'success', payload: topic.name });
    } catch (err) {
      this.logger({ type: 'error', payload: err });
    }
  }
}

const pubsub = new PubSubAPI({
  projectId: 'stanfordcodextextindex',
});

export default PubSubAPI;
