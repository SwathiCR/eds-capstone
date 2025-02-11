export default async function decorate(block) {
    const articles=block.querySelector('a[href$=".json"]');
    console.log(articles);

    const path = new URL(articles.href);
    console.log(path);

    const response = await fetch(path);
    console.log(response.json);
}