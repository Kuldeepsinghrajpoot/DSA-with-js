const emitter = new EventEmitter();

const callback = (data) => console.log(data);
emitter.on('event1', callback);
emitter.emit('event1', 'Event 1 Triggered'); // Output: Event 1 Triggered
emitter.off('event1', callback);
