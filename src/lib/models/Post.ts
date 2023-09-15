export const PostTags = [
    'academia',
    'paper',
    'personal',
    'policy',
    'productivity',
    'science',
    'society',
    'software engineering',
    'teaching',
] as const;

export type PostTagType = (typeof PostTags)[number];

type Post = {
	url: string;
	title: string;
	date: string;
	tags: PostTagType[];
	img?: string;
	alt?: string;
};

export default Post;