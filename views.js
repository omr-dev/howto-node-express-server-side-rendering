export const siteView = ({ nouns }) => {
  return `<ol>
${nouns
  .map((noun) => {
    return `<li>${noun.article} ${noun.singular} (pl. ${noun.plural})</li>`;
  })
  .join("")}</ol>`;
};
