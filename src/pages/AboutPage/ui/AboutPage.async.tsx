import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
	// @ts-ignore
	setTimeout(() => resolve(import('./AboutPage').then((module) => ({ default: module.AboutPage }))), 1500);
}));
