import { Observable } from 'rxjs';
import { Message } from './message';
export declare class MessageService {
    private messageSource;
    messageObserver: Observable<Message | Message[]>;
    add(message: Message): void;
    addAll(messages: Message[]): void;
    clear(): void;
}
