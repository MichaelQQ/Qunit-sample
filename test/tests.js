jQuery("#testframe").on("load", function () {
    jQuery2 = window.frames[0].jQuery;

    test("ok test", function () {
        ok(true, "true succeeds");
    });

    test("btn test", function () {
        equal(jQuery2("#btn").text(), "Click Me", "Before click ok");
        jQuery2("#btn").click();
        equal(jQuery2("#btn").text(), "clicked", "After clicked ok");
    });
});
