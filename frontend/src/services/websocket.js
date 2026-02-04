export class WebSocketService {
  constructor(url, onMessage, onStatusChange) {
    this.url = url;
    this.onMessage = onMessage;
    this.onStatusChange = onStatusChange;
    this.socket = null;
    this.reconnectAttempts = 0;
    this.maxReconnects = 10;
  }

  connect() {
    const token = import.meta.env.VITE_AUTH_TOKEN ? `?token=${import.meta.env.VITE_AUTH_TOKEN}` : ''
    this.socket = new WebSocket(this.url + token);

    this.socket.onopen = () => {
      this.reconnectAttempts = 0;
      if (this.onStatusChange) this.onStatusChange(true);
      console.log('WS Connected');
    };

    this.socket.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        if (this.onMessage) this.onMessage(data);
      } catch (err) {
        console.error('WS parse error', err);
      }
    };

    this.socket.onclose = () => {
      if (this.onStatusChange) this.onStatusChange(false);
      console.log('WS closed, attempting reconnect');
      this.retry();
    };

    this.socket.onerror = (err) => {
      console.error('WS error', err);
      this.socket.close();
    };
  }

  retry() {
    if (this.reconnectAttempts < this.maxReconnects) {
      this.reconnectAttempts++;
      setTimeout(() => this.connect(), 2000 * this.reconnectAttempts);
    } else {
      console.warn('Max reconnects reached.');
    }
  }

  disconnect() {
    if (this.socket) this.socket.close();
  }
}
