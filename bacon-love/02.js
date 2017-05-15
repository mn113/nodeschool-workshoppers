//  * `promise` - A promise that should be wrapped to as a reactive datatype
//  * `eventTarget` - an EventTarget object that emits data on a `data` channel.
//  * `callback` - A function which expects to be called with `'foo', 'bar', cb`, whose call to `cb` should be emitted on an event stream.
module.exports = (Bacon, promise, eventTarget, callback) => {
 	// wrap the inputs in Bacon:
	return {
		promise: Bacon.fromPromise(promise),

		eventTarget: Bacon.fromEvent(eventTarget, 'data'),

		callback: Bacon.fromCallback(callback, 'foo', 'bar'),

		array: Bacon.sequentially(100, [1,2,3,4])
	};
};
