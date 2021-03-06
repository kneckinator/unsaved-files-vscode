//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
//import * as vscode from 'vscode';
import * as UnsavedFiles from '../src/extension';

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", () => {

    // Defines a Mocha unit test
    test("unsaved-files", () => {
        assert.equal(100.0, UnsavedFiles.UnsavedFiles.roundZoom(99.999));
        assert.equal(100.0, UnsavedFiles.UnsavedFiles.roundZoom(100.000));
        assert.equal(100.0, UnsavedFiles.UnsavedFiles.roundZoom(100.001));
    });
});