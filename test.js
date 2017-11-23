const  delegate =require('delegates')
const proto={}
/**
 * Response delegation. 代表
 */

delegate(proto, 'response')
	.method('attachment')//方法
	.method('redirect')
	.method('remove')
	.method('vary')
	.method('set')
	.method('append')
	.method('flushHeaders')
	.access('status')
	.access('message')
	.access('body')
	.access('length')
	.access('type')
	.access('lastModified')
	.access('etag')
	.getter('headerSent')
	.getter('writable');
console.log(proto);
//{ attachment: [Function],
// redirect: [Function],
// 	remove: [Function],
// 	vary: [Function],
// 	set: [Function],
// 	append: [Function],
// 	flushHeaders: [Function],
// 	status: [Getter/Setter],
// 	message: [Getter/Setter],
// 	body: [Getter/Setter],
// 	length: [Getter/Setter],
// 	type: [Getter/Setter],
// 	lastModified: [Getter/Setter],
// 	etag: [Getter/Setter],
// 	headerSent: [Getter],
// 	writable: [Getter]