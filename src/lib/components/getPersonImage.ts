import { base } from '$app/paths';

export default function getPersonImage(id: string) {
    return `${base}/images/headshots/${id}.jpg`;
}
