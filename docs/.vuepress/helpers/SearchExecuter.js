import hasher from "./StringHasher";

const enableLogs = true;

const isValidSearch = (search) => {
  if (search === null || search.value === "") {
    if (enableLogs) console.log("isValidSearch > No input");
    return false;
  }
  if (search.value.length < 2) {
    if (enableLogs) console.log("isValidSearch > Type at least 2 characters");
    return false;
  }
  return true;
};

//https://www.30secondsofcode.org/js/s/remove-accents/
const removeAccents = (word) => 
{
  return word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const hashSearch = (words) => {
  const cleanArr = words.filter((wordF) => wordF !== "").map(wordF => removeAccents(wordF));
  if (enableLogs) console.log(cleanArr);
  const hashedWords = cleanArr.map((wordM) => {
    const cleanedWord = wordM.toLowerCase().trim();
    const hashedWord = hasher.Cyrb53(cleanedWord);
    return `${cleanedWord}_${hashedWord}`;
  });
  return hashedWords;
};

const addDocsToResult = (docs, matchedIndexEntry) => {
  //if (enableLogs)  console.log(matchedIndexEntry);
  if (!matchedIndexEntry) return;
  if (!matchedIndexEntry.pages) return;

  matchedIndexEntry.pages.forEach((page) => {
    const hashSlug = hasher.Cyrb53(page.slug);
    //only add page not already in array
    if (!docs.hasOwnProperty(hashSlug)) {
      docs[hashSlug] = { page };
    }
  });
};

const extractPagesFromSearch = (matchedDocs) => {
  const finalDocs = Object.values(matchedDocs)
    .sort((currentDoc, nextDoc) =>
      currentDoc.page.title > nextDoc.page.title ? 1 : -1
    )
    .map((doc) => doc.page);
  // console.table(finalDocs);
  return finalDocs;
};

const getExactMatchSlugs = (searchIndex, hashedWords, isExactSearchNeeded) => {
  const matchedDocs = {};

  if (!isExactSearchNeeded) return matchedDocs;

  //check hashed search
  let startedAt = startTimer();
  const pagesPerWord = [];
  hashedWords.forEach((hashedWord) => {
    const matchedIndexEntry = searchIndex[hashedWord];
    if (enableLogs) console.log(`Hash match ${hashedWord}`, matchedIndexEntry);
    addDocsToResult(matchedDocs, matchedIndexEntry);
    if (matchedIndexEntry !== undefined)
      pagesPerWord.push(...matchedIndexEntry.pages);
  });

  if (enableLogs) console.log("pagesPerWord", pagesPerWord);

  endTimer(startedAt, "getMatchSlugs", `Search by hash`);
  return extractPagesFromSearch(matchedDocs);
};

const getContainingMatchSlugs = (searchIndex, words, isContainingSearchNeeded) => {
  const matchedDocs = {};

  if (!isContainingSearchNeeded) return matchedDocs;
  //check non-hashed search
  let startedAt = startTimer();
  words.forEach((word) => {
    const keys = Object.keys(searchIndex);
    const keysContainingWord = keys.filter((key) => key.indexOf(word) > -1);
    if (keysContainingWord !== undefined) {
      //if (enableLogs)  console.log('keysContainingWord', keysContainingWord);
      keysContainingWord.forEach((key) => {
        const matchedIndexEntry = searchIndex[key];
        if (enableLogs)
          console.log(`Word ${word} is matched by ${key}`, matchedIndexEntry);
        addDocsToResult(matchedDocs, matchedIndexEntry);
      });
    }
  });
  endTimer(startedAt, "getMatchSlugs", `Search by word containing`);
  return extractPagesFromSearch(matchedDocs);
};

const getInnerJoinSlugs = (searchIndex, hashedWords, isContainingSearchNeeded) =>
{
  console.log("getInnerJoinSlugs");
  const matchedDocs = {};
  
  if (!isContainingSearchNeeded)
  {
    return matchedDocs;
  }
  let startedAt = startTimer();

  const searchedWordIndex = extractSearchedWordIndex(searchIndex, hashedWords);
  if (enableLogs) console.log("searchedWordIndex", searchedWordIndex);

  let innerJoinPages = getInnerJoinPages(searchedWordIndex);
  if (enableLogs) console.log("innerJoinPages =>", innerJoinPages);

  let indexEntries = {pages : innerJoinPages};
  addDocsToResult(matchedDocs, indexEntries);
  endTimer(startedAt, "getInnerJoinSlugs", `Search by hash`);

  return extractPagesFromSearch(matchedDocs);
};

const extractSearchedWordIndex = (searchIndex, hashedWords) =>
{
  let searchedWordIndex = {};
  hashedWords.forEach((hashedWord) => {
    const matchedIndexEntry = searchIndex[hashedWord];
    searchedWordIndex[hashedWord] = matchedIndexEntry;
  });
  return searchedWordIndex;
}

const getInnerJoinPages = (searchedWordIndex) =>
{
  //Inner join all searched work result
  let innerJoinPages = null;
  for (const value of Object.values(searchedWordIndex)) {
    if (!value) {
      console.log("value null");
      continue;
    }
    if (!value.pages) {
      console.log("No pages in current value");
      continue;
    }
    if(!innerJoinPages)
    {
      innerJoinPages = value.pages;
      continue;
    }
    
    innerJoinPages = innerJoinPages.filter(page => value.pages.map(page => page.slug).includes(page.slug)) 
  }
  return innerJoinPages;
}

const startTimer = () => {
  return Date.now();
};

const endTimer = (startTime, method, description) => {
  const endTime = Date.now();
  if (enableLogs)
    console.log(`${method}`, `${description} > ${endTime - startTime} ms`);
};

export default {
  getExactMatchSlugs,
  getContainingMatchSlugs,
  getInnerJoinSlugs,
  hashSearch,
  isValidSearch,
};
