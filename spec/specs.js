describe("pigLatin", function() {
  it("replaces the last letter of a word with 'ay' if the word starts with a vowel", function() {
    expect(pigLatin("apple")).to.equal("applay");
  });

  it("moves the first consonant of a word to the end", function() {
    expect(pigLatin("ball")).to.equal("allb");
  });
});
