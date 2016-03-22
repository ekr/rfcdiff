var chunk_index = 0;
var old_chunk = null;

function format_chunk(index) {
    var prefix = "diff";
    var str = index.toString();
    for (x=0; x<(4-str.length); ++x) {
        prefix+='0';
    }
    return prefix + str;
}

function find_chunk(n){
    return document.querySelector('a[name$="' + n + '"]');
}

function change_chunk(offset) {
    var index = chunk_index + offset;
    var new_str;
    var new_chunk;

    new_str = format_chunk(index);
    new_chunk = find_chunk(new_str);
    if (!new_chunk) {
        return;
    }
    if (old_chunk) {
        old_chunk.style.outline = "";
    }
    old_chunk = new_chunk.parentNode.parentNode;
    old_chunk.style.outline = "1px solid red";
    window.location.hash = "#" + new_str;
    window.scrollBy(0,-100);
    chunk_index = index;
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
    case 78:
        change_chunk(1);
        break;
    case 80:
        change_chunk(-1);
        break;
    }
};
