var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲: https://github.com/mdewcm2023/site-laugh110 \n 網站:  https://mdewcm2023.github.io/site-laugh110\xa0 \n hello \n', 'tags': '', 'url': 'About.html'}, {'title': '圖片', 'text': 'github 網站圖片 \n \n 托拉法爾加羅和基德 \n \n the owl house \n \n \n', 'tags': '', 'url': '圖片.html'}, {'title': '影片', 'text': '\n 羅 k.room \n \n', 'tags': '', 'url': '影片.html'}, {'title': 'brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n url = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw5.txt"\ndata = open(url).read().split("\\n")\ndata = data[1:]\nfor i in data:\n    #print(i)\n    stud = i.split(":")[0]\n    score = i.split(":")[1]\n    print(stud, score) \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'brython.html'}, {'title': '權限', 'text': '近端倉儲的設定檔案: 倉儲目錄下\xa0 .git中的 config, 表示倉儲的 configuration file(設定檔案) \n', 'tags': '', 'url': '權限.html'}, {'title': '資料結構', 'text': '從  https://mdewcm2023.github.io/site-s40723224/content/w9.html  可以知道, 若已知資料所在網路連結: \n \n 1aw5.txt \n 1aw6.txt \n 1aw6-2.txt \n 1aw8.txt \n 1aw9.txt , \n \n 分別讀取各次考試的成績, 其中利用了 list (數列), 但每次讀取後, 若無法將各學員的成績累加後求取平均, 則無法列出各學員的期中成績. \n \n', 'tags': '', 'url': '資料結構.html'}, {'title': '提交', 'text': 'commit \n git commit-m \n message \n 指令執行時隨時要提交字串,說明本次提交的改版說明\\ \n \n', 'tags': '', 'url': '提交.html'}]};