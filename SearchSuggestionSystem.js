class SearchSuggestionSystem {
  constructor(products) {
    // Sort products lexicographically
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const result = [];
    let prefix = '';

    for (let char of searchWord) {
      prefix += char;
      result.push(this.getMatches(prefix));
    }

    return result;
  }

  getMatches(prefix) {
    const suggestions = [];

    for (let product of this.products) {
      if (product.startsWith(prefix)) {
        suggestions.push(product);
        if (suggestions.length === 3) break; // Only need top 3 suggestions
      }
    }

    return suggestions;
  }
}

// Example usage:
const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

const system = new SearchSuggestionSystem(products);
const output = system.getSuggestions(searchWord);

console.log(output);
