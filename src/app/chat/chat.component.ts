
import { Component, signal, inject, ViewChild, ElementRef, effect, AfterViewChecked, resource } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { runFlow } from 'genkit/beta/client';

interface ChatMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

function randomId(): string {
    return Date.now() + '' + Math.floor(Math.random() * 1000000000);
}

@Component({
    selector: 'app-chat',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.scss'
})
export class ChatComponent {
    private http = inject(HttpClient);
    @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

    isOpen = signal(false);
    isLoading = signal(false);
    userMessage = signal('');
    testMessage = signal('');
    messages = signal<ChatMessage[]>([
        { role: 'assistant', content: 'Hello! How can I help you today?' }
    ]);
    sessionId = signal<string | null>(null);

    constructor() {
        effect(() => {
            // Depend on messages or loading state changes to trigger scroll
            this.messages();
            this.isLoading();
            // Use setTimeout to allow DOM to update before scrolling
            setTimeout(() => this.scrollToBottom(), 100);
            console.log(this?.premiseResource?.value());
        });
    }

    toggleChat() {
        this.isOpen.update(v => !v);
        // Scroll to bottom when opening
        if (this.isOpen()) {
            setTimeout(() => this.scrollToBottom(), 100);
        }
    }

    scrollToBottom() {
        if (this.scrollContainer) {
            try {
                this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
            } catch (err) { }
        }
    }

    sendMessage() {
        const content = this.userMessage();
        this.testMessage.set(content);
        if (!content.trim() || this.isLoading()) return;

        // Add user message
        this.messages.update(msgs => [...msgs, { role: 'user', content }]);
        this.userMessage.set('');
        this.isLoading.set(true);

        this.http.post<any>('/api/chat', {
            messages: this.messages()
        }).subscribe({
            next: (response) => {
                const assistantMessage = response.choices[0].message;
                this.messages.update(msgs => [...msgs, assistantMessage]);
                this.isLoading.set(false);
            },
            error: (err) => {
                console.error('Chat error:', err);
                this.messages.update(msgs => [...msgs, { role: 'assistant', content: 'Sorry, I realized I cannot help with that right now.' }]);
                this.isLoading.set(false);
            }
        });
    }

    getSessionId() {
        if(this.sessionId()) return { sessionId: this.sessionId(), clearSession: false };
        this.sessionId.set(randomId());
        return { sessionId: this.sessionId(), clearSession: true };
    }   

    premiseResource = resource({
        defaultValue: "Hi, Aswinth GT",
        params: () => this.testMessage(),
        loader: ({ params }): Promise<string> => runFlow({
            url: '/api/aboutFlow',
            input: {
                userInput: params,
                sessionId: this.getSessionId().sessionId,
                clearSession: this.getSessionId().clearSession
            }
        })
    });
}
