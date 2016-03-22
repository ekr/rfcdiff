import sys
import re

inf = open(sys.argv[1])
js = open(sys.argv[2])
out = open(sys.argv[3], "w")

for l in inf:
    if (l.find("rfcdiff.js") != -1):
        out.write("   <script>\n")
        for l2 in js:
            out.write(l2)
        out.write("   </script>\n")
    else:
        out.write(l)

            
    
