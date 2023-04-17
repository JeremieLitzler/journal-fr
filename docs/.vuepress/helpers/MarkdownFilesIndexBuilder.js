/**
 * Extract from the data the filtered information of markdown pages
 * that we need to build an index for the folder processed.
 *
 * It will use a regex: ^(.*?(\\b${parentFolderFilter}\\b)[^$]*)$
 *
 * @param {string} parentFolderFilter The name of the parent folder containing the markdown files to index
 * @param {Array} data The siteData from app.pages in VuePress instance
 * @returns {Array} objects of the data and slud
 */
export function getIndexRegex(parentFolderFilter, data) {
  //Source: https://stackoverflow.com/a/9350443
  const regex = `^(.*?(\\b${parentFolderFilter}\\b)[^$]*)$`;

  console.info(regex);

  const matchedFiles = data.filter((file) => {
    if (file.filePathRelative.match(new RegExp(regex, "g"))) {
      const fileParsed = {
        data: file.data,
        slug: file.slug,
      };
      return fileParsed;
    }
  });
  //console.info(matchedFiles);
  return matchedFiles;
}

/**
 * Extract from the data the filtered information of markdown pages
 * that we need to build an index for the folder processed.
 *
 * It will use startsWith API
 *
 * @param {string} parentFolderFilter The name of the parent folder containing the markdown files to index
 * @param {Array} data The siteData from app.pages in VuePress instance
 * @returns {Array} objects of the data and slud
 */
export function getIndexStartWith(parentFolderFilter, data) {
  console.info("parentFolderFilter", parentFolderFilter);

  const matchedFiles = data.filter((file) => {
    if (file.path.startsWith(parentFolderFilter)) {
      const fileParsed = {
        data: file.data,
        slug: file.slug,
      };
      return fileParsed;
    }
  });
  //console.info(matchedFiles);
  return matchedFiles;
}
