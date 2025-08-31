import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const rocketryProjects = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/pages/rocketry/projects' }),
	schema: z.object({
		title: z.string().min(2).max(100),
		description: z.string().max(500),
	}),
});
    
const uavProjects = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/pages/uav/projects' }),
	schema: z.object({
		title: z.string().min(2).max(100),
		description: z.string().max(500),
	}),
});
