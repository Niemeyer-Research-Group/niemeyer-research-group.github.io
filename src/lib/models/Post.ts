export const PostTags = [
    'K-12',
    'academia',
    'advising',
    'argument',
    'book summary',
    'grant report',
    'industry',
    'paper',
    'personal',
    'policy',
    'review',
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

export type { Post as default };
