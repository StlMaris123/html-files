function* unit(value) {
        yield value;

}

function* bind(list, transform) {
    for (var item of list) {
                yield* transform(item);

    }

}
var result = bind([0, 1, 2], function (element) {
    return bind([0, 1, 2], function* (element2) {
                 yield element + element2;

    });

});

