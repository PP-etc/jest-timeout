describe("single test", () => {
  it("does not stuck", () => {
    return (async() => {
      expect(1).toEqual(2);
    })()
  });
});
