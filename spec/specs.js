describe("pigLatin", function() {
  it("returns the same word if the word doesn't start with a vowel", function() {
    expect(pigLatin("ball")).to.equal("ball");
  });

  it("replaces the last letter of a word with 'ay' if the word starts with a vowel", function() {
    expect(pigLatin("apple")).to.equal("applay");
  })
});
