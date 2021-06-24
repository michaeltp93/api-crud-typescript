import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 min
	max: 100,
	message: {
		status: 429,
		message: 'Too many request, please try again later.',
	},
});
