import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'http://localhost:2368',
    key: '57161e61e793d81b928ff5d0c1',
    version: "v2"
});

export async function getPosts(pageNumber)
{
    return await api.posts
        .browse({
            limit: 8,
            page: pageNumber,
            include: "tags,authors",
        })
        .catch(err => {
            console.error(err);
        })
}

export async function getMeta()
{
    return await api.posts
        .browse({
            limit: 8,
        })
        .then(pagination => { 
            return pagination.meta.pagination 
        })
}

export async function getSinglePost(postSlug)
{
    return await api.posts
        .read({
            slug: postSlug,
            include: "tags,authors",
        })
        .catch(err => {
            console.error(err);
        })
}