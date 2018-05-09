Enhanced version of Henrek Levkowetz's rfcdiff which embeds JS to
navigate between chunks. See original at:

https://tools.ietf.org/tools/rfcdiff/

The system is very simple: the diff loads as usual, but when you press
'n' or 'p' it navigates to the next or previous chunk and puts a line above.
the chunk you are looking at now. We could add more functions, obviously,
but even this is useful.

In order to keep rfcdiff as one monolithic file, I've written this by making
a template file (rfcdiff-tmpl), a JS file, and a merger that puts them together.
This allows you to edit the JS locally but then combine them for distribution.
