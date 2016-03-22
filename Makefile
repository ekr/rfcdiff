#TARGET=rfcdiff-work
TARGET=rfcdiff-js

$(TARGET): rfcdiff-tmpl rfcdiff.js merge.py
	python3 ./merge.py rfcdiff-tmpl rfcdiff.js $@
	chmod +x $(TARGET)

clean:
	rm -f $(TARGET)
