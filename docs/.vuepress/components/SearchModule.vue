<template>
  <section class="search">
    <article class="search-inputs">
      <input
        type="text"
        name="searchIndex"
        id="search-keywords"
        @keyup="getSearcheResults"
        aria-label="Saisissez au moins 2 caractères pour votre mot clé pour lancer la recherche..."
        placeholder="Saisissez au moins 2 caractères pour votre mot clé pour lancer la recherche..."
        autocomplete="off"
        list="search-keywords-list"
      />
      <datalist id="search-keywords-list"></datalist>
      <label for="search-inner-join">
        <input
          type="checkbox"
          name="search-inner-join"
          id="search-inner-join"
          checked
          @change="getSearcheResults"
        />
        <p>
          Exécuter la recherche avec la logique
          <i><u>"contenant exactement tous les termes saisis"</u>.</i>
        </p>
      </label>
      <label for="search-exact-match">
        <input
          type="checkbox"
          name="search-exact-match"
          id="search-exact-match"
          @change="getSearcheResults"
        />
        <p>
          Exécuter la recherche avec la logique
          <i><u>"contenant au moins un terme exact saisi"</u></i
          >.
        </p>
      </label>
      <label for="search-containing-match">
        <input
          type="checkbox"
          name="search-containing-match"
          id="search-containing-match"
          @change="getSearcheResults"
        />
        <p>
          Exécuter la recherche avec la logique
          <i><u>"contenant les termes saisis"</u></i>
        </p>
      </label>
      <p>
        Vous ne trouvez pas ce que vous cherchez via la recherche, mais vous avez
        trouvé un document qui aurait dû remonter ?
        <a
          href="http://tfs-at:8080/tfs/be/ITGF/_workitems/create/Support%20Request?templateId=cd010d3c-751e-4dbb-84d6-9b9a15ea3aaf&ownerId=e432b2c6-6904-488b-b566-dfbe93f4520b"
          target="_blank"
          >Créez un ticket !</a
        >
      </p>
    </article>
  </section>
  <section class="search-results">
    <article>
      <h2>Résultats contenant tous les termes exacts de la recherche</h2>
      <div class="results-inner-join">
        Saisissez un mot clé pour obtenir des résultats
      </div>
    </article>
    <article>
      <h2>Résultats correspondant à au moins un terme exact saisi</h2>
      <div class="results-exact-match">
        Saisissez un mot clé pour obtenir des résultats
      </div>
    </article>
    <article>
      <h2>Résultats contenant les termes de la recherche</h2>
      <div class="results-containing-match">
        Saisissez un mot clé pour obtenir des résultats
      </div>
    </article>
  </section>
</template>

<script>
//this throws an error: "ReferenceError: document is not defined"
// const qs = new URLSearchParams(
//   document.URL.substring(document.URL.indexOf("?"), document.URL.length - 1)
// );
const enableLogs = false; //qs.has("console");
const enableDatalist = false; //qs.has("datalist");
//See config.js > onPrepared
import searchIndex from "@temp/searchIndex.js";
import searchExecuter from "../helpers/SearchExecuter";
//if (enableLogs)  console.log(searchIndex);
export default {
  computed: {},
  methods: {
    buildListElement(matchedDocs) {
      const list = document.createElement("ul");
      matchedDocs.forEach((doc) => {
        const bullet = document.createElement("li");
        const docLink = document.createElement("a");
        docLink.target = "_blank";
        docLink.href = doc.slug;
        docLink.innerText = !doc.title
          ? `Document "${doc.slug}" (sans titre frontmatter)`
          : doc.title;
        bullet.appendChild(docLink);
        list.appendChild(bullet);
      });
      return list;
    },
    appendResultsElement(matchedDocs, cssSelector) {
      const resultEl = document.querySelector(`.${cssSelector}`);
      resultEl.innerHTML = "";
      if (enableLogs) console.log("matchedDocs.length", matchedDocs.length);
      if (matchedDocs.length === undefined) {
        resultEl.innerHTML =
          "Aucun résultat, car la recherche n'est pas demandé.";
        return;
      }
      if (matchedDocs.length === 0) {
        resultEl.innerHTML =
          "Aucun résultat. Essayez un autre terme ou essayez l'autre mode de recherche.";
        return;
      }
      const uLElement = this.buildListElement(matchedDocs);
      resultEl.appendChild(uLElement);
    },
    getSearcheResults() {
      const search = document.querySelector("#search-keywords");
      if (!searchExecuter.isValidSearch(search)) return;

      const words = search.value.split(" ");
      const hashedWords = searchExecuter.hashSearch(words);
      //if (enableLogs)  console.log(hashedWords);
      const isExactSearchNeeded = document.querySelector("#search-exact-match");
      const exactMatchedDocs = searchExecuter.getExactMatchSlugs(
        searchIndex,
        hashedWords,
        isExactSearchNeeded.checked
      );
      const isContainingSearchNeeded = document.querySelector(
        "#search-containing-match"
      );
      const containingMatchedDocs = searchExecuter.getContainingMatchSlugs(
        searchIndex,
        words,
        isContainingSearchNeeded.checked
      );

      const isInnerJoinSearchNeeded =
        document.querySelector("#search-inner-join");
      const innerJoinDocs = searchExecuter.getInnerJoinSlugs(
        searchIndex,
        hashedWords,
        isInnerJoinSearchNeeded.checked
      );
      //console.table(matchedDocs);
      if (
        exactMatchedDocs === undefined ||
        containingMatchedDocs === undefined ||
        innerJoinDocs === undefined
      )
        return;

      this.appendResultsElement(exactMatchedDocs, "results-exact-match");
      this.appendResultsElement(
        containingMatchedDocs,
        "results-containing-match"
      );
      this.appendResultsElement(innerJoinDocs, "results-inner-join");
    },
  },
  mounted() {
    if (!enableDatalist) return;

    const options = [];
    for (const wordObj of Object.values(searchIndex)) {
      const optionEl = document.createElement("option");
      optionEl.value = wordObj.word;
      options.push(optionEl);
    }
    const datalistAutocomplete = document.querySelector(
      "#search-keywords-list"
    );
    const sortedOptions = [...options].sort((current, next) =>
      current.value > next.value ? -1 : 1
    );
    datalistAutocomplete.append(...sortedOptions);
  },
};
</script>

<style scoped>
.search {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.search-inputs {
  justify-self: center;
  margin-bottom: 2em;
}
.search input {
  font-size: 1rem;
  padding: 1em;
  width: 100%;
}

.search-inputs label {
  display: inline-flex;
  padding: 0 0.5em;
}

.search-inputs label input {
  display: inline;
  flex: 1;
}

.search-inputs label p {
  display: inline;
  line-height: 1;
}
.search-results ul {
  display: block;
  padding-left: 1em;
}
</style>
