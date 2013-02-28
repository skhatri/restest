var Assert = {

    assertTrue: function (condition) {
        if (!condition) {
            throw new Error("expected true but was false");
        }
    },
    assertFalse: function (condition) {
        if (condition) {
            throw new Error("expected false but was true");
        }
    }
};

module.exports = Assert;