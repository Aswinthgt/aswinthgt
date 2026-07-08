
import { Component, signal, inject, ViewChild, ElementRef, effect, AfterViewChecked, resource } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

interface ChatMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

@Component({
    selector: 'app-chat',
    standalone: true,
    imports: [CommonModule, FormsModule, MarkdownModule],
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.scss'
})
export class ChatComponent {
    private http = inject(HttpClient);
    @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

    isOpen = signal(false);
    userMessage = signal('');
    testMessage = signal('');
    messages = signal<ChatMessage[]>([]);
    sessionId = signal<string | null>(null);

    constructor() {
        effect(() => {
            // Depend on messages or loading state changes to trigger scroll
            this.messages();
            // Use setTimeout to allow DOM to update before scrolling
            setTimeout(() => this.scrollToBottom(), 100);

            console.log(this.premiseResource.isLoading());
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
        this.userMessage.set('');
    }

    premiseResource = resource({
        defaultValue: "Hi, Aswinth GT",
        params: () => this.testMessage(),
        loader: async ({ params }): Promise<string> => {
            if (!params || params.trim() === "") {
                const welcomeMsg = "Hi! I am Aswinth's AI assistant. How can I help you today?";
                if (this.messages().length === 0) {
                    this.messages.update(msgs => [...msgs, { role: 'assistant', content: welcomeMsg }]);
                }
                return welcomeMsg;
            }
            if (params.trim()) {
                this.messages.update(msgs => [...msgs, { role: 'user', content: params }]);
            }

            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        messages: this.messages() // send the full history
                    }),
                });

                const data = await response.json();

                if (!response.ok) {
                    console.error('AI API Error:', data.error);
                    this.messages.update(msgs => [...msgs, { role: 'assistant', content: "Sorry, I realized I cannot help with that right now." }]);
                    return "Sorry, I realized I cannot help with that right now.";
                }
                this.messages.update(msgs => [...msgs, data?.reply]);
                return data.reply
            } catch (err) {
                console.error('Network / API Error:', err);
                this.messages.update(msgs => [...msgs, { role: 'assistant', content: "Sorry, I realized I cannot help with that right now." }]);
                return "Something went wrong while contacting AI.";
            }
        }
    });
}
