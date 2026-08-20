### 1 — 颜色  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["colores", "completar"]
pasos:
  - "Escuchar la descripción de un objeto."
  - "Identificar el color mencionado."
explicacion: "La palabra '红色' (hóngsè) se refiere al color rojo. Es común en frases como '这个苹果是红色的。' (Zhège píngguǒ shì hóngsè de)."
respuesta: "红色"
respuestas_validas:
  - "红色"
  - "Hóngsè"
tipo: completar
enunciado: "这个球是___。"
variables:
  - uno_de(["红", "蓝", "绿"])
```



### 2 — Números  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["números", "mc"]
pasos:
  - "Escuchar el número mencionado."
  - "Seleccionar la opción que coincide con el audio."
explicacion: "El número '五' (wǔ) representa cinco. En contextos como '我有五个苹果。' (Wǒ yǒu wǔ gè píngguǒ), se usa para contar objetos."
opciones_explicitas:
  - "一"
  - "三"
  - "五"
  - "七"
respuesta: "五"
tipo: mc
enunciado: "我有___个苹果。"
variables:
  - uno_de(["一", "三", "五", "七"])
```



### 3 — Días de la semana  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["días", "completar"]
pasos:
  - "Escuchar el día mencionado."
  - "Escribir el nombre del día en chino."
explicacion: "'星期一' (xīngqī yī) es lunes. Los días de la semana se escriben con '星期' seguido del número correspondiente."
respuesta: "星期一"
respuestas_validas:
  - "星期一"
  - "Xīngqī yī"
tipo: completar
enunciado: "今天是___。"
variables:
  - uno_de(["星期一", "星期二", "星期三"])
```



### 4 — Verbos de acción  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["verbos", "mc"]
pasos:
  - "Escuchar la acción realizada."
  - "Elegir el verbo correcto para completar la oración."
explicacion: "'跑' (pǎo) significa correr. En contextos como '他正在跑步。' (Tā zhèngzài pǎobù), describe un movimiento físico."
opciones_explicitas:
  - "跳"
  - "走"
  - "跑"
  - "飞"
respuesta: "跑"
tipo: mc
enunciado: "他正在___。"
variables:
  - uno_de(["跳", "走", "跑", "飞"])
```



### 5 — Familia  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["familia", "completar"]
pasos:
  - "Escuchar la relación familiar."
  - "Identificar el término correcto para la relación."
explicacion: "'妈妈' (māma) es madre. Se usa en frases como '这是我的妈妈。' (Zhè shì wǒ de māma)."
respuesta: "妈妈"
respuestas_validas:
  - "妈妈"
  - "Māma"
tipo: completar
enunciado: "这是我的___。"
variables:
  - uno_de(["爸爸", "妈妈", "哥哥"])
```



### 6 — Comida  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["comida", "mc"]
pasos:
  - "Escuchar el nombre del alimento."
  - "Seleccionar la opción que coincide con el audio."
explicacion: "'苹果' (píngguǒ) es manzana. En frases como '我爱吃苹果。' (Wǒ ài chī píngguǒ), describe un tipo de fruta."
opciones_explicitas:
  - "香蕉"
  - "苹果"
  - "橘子"
  - "葡萄"
respuesta: "苹果"
tipo: mc
enunciado: "我爱吃___。"
variables:
  - uno_de(["香蕉", "苹果", "橘子", "葡萄"])
```



### 7 — Tiempo  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["tiempo", "completar"]
pasos:
  - "Escuchar la descripción del tiempo."
  - "Escribir el término correcto para el clima."
explicacion: "'下雨' (xià yǔ) significa llover. Se usa en frases como '今天在下雨。' (Jīntiān zài xià yǔ)."
respuesta: "下雨"
respuestas_validas:
  - "下雨"
  - "Xià yǔ"
tipo: completar
enunciado: "今天在___。"
variables:
  - uno_de(["下雨", "晴天", "下雪"])
```



### 8 — Formas de cortesía  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["cortesía", "mc"]
pasos:
  - "Escuchar la frase de cortesía."
  - "Elegir la opción que completa correctamente la oración."
explicacion: "'请问' (qǐngwèn) se usa para hacer preguntas respetuosas, como en '请问这是哪里？' (Qǐngwèn zhè shì nǎlǐ?)."
opciones_explicitas:
  - "谢谢"
  - "请问"
  - "你好"
  - "再见"
respuesta: "请问"
tipo: mc
enunciado: "___这是哪里？"
variables:
  - uno_de(["谢谢", "请问", "你好", "再见"])
```



### 9 — Colores  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["colores", "completar"]
pasos:
  - "Escuchar el color mencionado."
  - "Escribir el término correcto en chino."
explicacion: "'蓝色' (lán sè) es azul. En frases como '这个书包是蓝色的。' (Zhège shūbāo shì lán sè de), describe un objeto azul."
respuesta: "蓝色"
respuestas_validas:
  - "蓝色"
  - "Lán sè"
tipo: completar
enunciado: "这个衣服是___。"
variables:
  - uno_de(["红色", "蓝色", "绿色"])
```



### 10 — Números ordinales  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["números ordinales", "mc"]
pasos:
  - "Escuchar el ordinal mencionado."
  - "Seleccionar la opción que corresponde al número ordinal."
explicacion: "'第一' (dì yī) significa primero. En contextos como '这是第一名。' (Zhè shì dì yī míng), se usa para indicar posición."
opciones_explicitas:
  - "第三"
  - "第二"
  - "第一"
  - "第四"
respuesta: "第一"
tipo: mc
enunciado: "这是___名。"
variables:
  - uno_de(["第一", "第二", "第三", "第四"])
```



### 11 — Direcciones  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["direcciones", "completar"]
pasos:
  - "Escuchar la dirección mencionada."
  - "Escribir el término correcto para la ubicación."
explicacion: "'左边' (zuǒ biān) significa izquierda. En frases como '门在左边。' (Mén zài zuǒ biān), se indica una posición relativa."
respuesta: "左边"
respuestas_validas:
  - "左边"
  - "Zuǒ biān"
tipo: completar
enunciado: "桌子在___。"
variables:
  - uno_de(["左边", "右边", "中间"])
```



### 12 — Acciones cotidianas  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["acciones", "mc"]
pasos:
  - "Escuchar la acción realizada."
  - "Elegir el verbo correcto para completar la oración."
explicacion: "'吃' (chī) significa comer. En frases como '我正在吃饭。' (Wǒ zhèngzài chīfàn), describe una actividad diaria."
opciones_explicitas:
  - "喝"
  - "吃"
  - "看"
  - "听"
respuesta: "吃"
tipo: mc
enunciado: "我正在___饭。"
variables:
  - uno_de(["喝", "吃", "看", "听"])
```



### 13 — Tiempos del día  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["tiempo", "completar"]
pasos:
  - "Escuchar el momento del día."
  - "Escribir el término correcto para el horario."
explicacion: "'早上' (zǎoshang) significa mañana. En frases como '我早上八点起床。' (Wǒ zǎoshang bā diǎn qǐchuáng), se indica un horario matutino."
respuesta: "早上"
respuestas_validas:
  - "早上"
  - "Zǎoshang"
tipo: completar
enunciado: "我___八点起床。"
variables:
  - uno_de(["早上", "中午", "晚上"])
```



### 14 — Medidas  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["medidas", "mc"]
pasos:
  - "Escuchar la medida mencionada."
  - "Seleccionar la opción que corresponde a la unidad de medida."
explicacion: "'千克' (kèjī) es kilogramo. En contextos como '这个包重两千克。' (Zhège bāo zhòng liǎng kèjī), se usa para indicar peso."
opciones_explicitas:
  - "米"
  - "千克"
  - "厘米"
  - "升"
respuesta: "千克"
tipo: mc
enunciado: "这个包重两___。"
variables:
  - uno_de(["米", "千克", "厘米", "升"])
```



### 15 — Comunicación  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["comunicación", "completar"]
pasos:
  - "Escuchar la frase de comunicación."
  - "Escribir el término correcto para la interacción."
explicacion: "'谢谢' (xièxie) significa gracias. En frases como '谢谢你的帮助。' (Xièxie nǐ de bāngzhù), expresa gratitud."
respuesta: "谢谢"
respuestas_validas:
  - "谢谢"
  - "Xièxie"
tipo: completar
enunciado: "___你的帮助。"
variables:
  - uno_de(["谢谢", "对不起", "再见"])
```



### 16 — Edad  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["edad", "mc"]
pasos:
  - "Escuchar la edad mencionada."
  - "Elegir el número correcto para completar la oración."
explicacion: "'十岁' (shí suì) significa diez años. En frases como '他今年十岁。' (Tā jīnnián shí suì), se indica la edad de una persona."
opciones_explicitas:
  - "八岁"
  - "十一岁"
  - "十岁"
  - "十二岁"
respuesta: "十岁"
tipo: mc
enunciado: "他今年___。"
variables:
  - uno_de(["八岁", "十岁", "十一岁", "十二岁"])
```



### 17 — Formas de hablar  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["formas", "completar"]
pasos:
  - "Escuchar la forma de hablar mencionada."
  - "Escribir el término correcto para el estilo de comunicación."
explicacion: "'请' (qǐng) se usa en frases respetuosas, como '请坐。' (Qǐng zuò), que significa 'por favor, siéntate'."
respuesta: "请"
respuestas_validas:
  - "请"
  - "Qǐng"
tipo: completar
enunciado: "___坐。"
variables:
  - uno_de(["请", "谢谢", "对不起"])
```



### 18 — Transporte  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["transporte", "mc"]
pasos:
  - "Escuchar el medio de transporte mencionado."
  - "Seleccionar la opción que corresponde al vehículo."
explicacion: "'汽车' (qìchē) es automóvil. En frases como '我开车去上班。' (Wǒ kāi chē qù shàngbān), se describe un tipo de transporte."
opciones_explicitas:
  - "火车"
  - "飞机"
  - "汽车"
  - "自行车"
respuesta: "汽车"
tipo: mc
enunciado: "我___去上班。"
variables:
  - uno_de(["火车", "飞机", "汽车", "自行车"])
```



### 19 — Estaciones  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["estaciones", "completar"]
pasos:
  - "Escuchar la estación mencionada."
  - "Escribir el término correcto para la estación del año."
explicacion: "'春天' (chūntiān) es primavera. En frases como '春天来了。' (Chūntiān lái le), se describe un cambio de estación."
respuesta: "春天"
respuestas_validas:
  - "春天"
  - "Chūntiān"
tipo: completar
enunciado: "___来了。"
variables:
  - uno_de(["春天", "夏天", "秋天", "冬天"])
```



### 20 — Preposiciones  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["preposiciones", "mc"]
pasos:
  - "Escuchar la preposición mencionada."
  - "Elegir la opción correcta para completar la oración."
explicacion: "'在' (zài) se usa para indicar ubicación, como en '书在桌子上。' (Shū zài zhuōzi shàng), que significa 'el libro está sobre la mesa'."
opciones_explicitas:
  - "上"
  - "下"
  - "在"
  - "中"
respuesta: "在"
tipo: mc
enunciado: "书___桌子上。"
variables:
  - uno_de(["上", "下", "在", "中"])
```



### 21 — Frutas  
```  
metadata:  
  materia: "chino"  
  tema: "hsk1-gramática"  
  nivel: "A1"  
  tags: ["medida", "mascota"]  
pasos:  
  - "Identificar el sustantivo en la oración."  
  - "Seleccionar el cuantificador correcto que va con 'perro'."  
respuesta: "只"  
respuestas_validas:  
  - "只"  
  - "Zhi"  
tipo: completar  
enunciado: "我有___个狗。"  
variables:  
  - "dog"  
explicacion: "En chino, 'perro' (狗) se cuenta con la medida 'zhi' (只), que se usa para animales pequeños. La estructura '___个 dog' requiere el cuantificador correcto para evitar ambigüedad."  
```

### 22 — Comida china  
```yaml
metadata:
  materia: "idiomas-extranjero/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["comida china", "mc"]
pasos:
  - "Escuchar el nombre del plato."
  - "Seleccionar la opción que corresponde al plato mencionado."
explicacion: "'饺子' (jiǎozi) es dumpling. En frases como '我喜欢吃饺子。' (Wǒ xǐhuān chī jiǎozi), se describe un alimento típico de China."
opciones_explicitas:
  - "面条"
  - "饺子"
  - "米饭"
  - "馒头"
respuesta: "饺子"
tipo: mc
enunciado: "我喜欢吃___。"
variables:
  - uno_de(["面条", "饺子", "米饭", "馒头"])
```



### 23 — Acciones repetitivas  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["acciones repetitivas", "completar"]
pasos:
  - "Escuchar la acción mencionada."
  - "Escribir el verbo correcto para la acción repetida."
explicacion: "'每天' (měitiān) significa cada día. En frases como '我每天早上跑步。' (Wǒ měitiān zǎoshang pǎobù), se indica una acción habitual."
respuesta: "每天"
respuestas_validas:
  - "每天"
  - "Měitiān"
tipo: completar
enunciado: "我___早上跑步。"
variables:
  - uno_de(["每天", "每周", "每月"])
```



### 24 — Tiempo futuro  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["tiempo futuro", "mc"]
pasos:
  - "Escuchar el tiempo mencionado."
  - "Elegir la opción que corresponde al horario futuro."
explicacion: "'明天' (míngtiān) significa mañana. En frases como '我明天去学校。' (Wǒ míngtiān qù xuéxiào), se indica un plan para el día siguiente."
opciones_explicitas:
  - "今天"
  - "昨天"
  - "明天"
  - "后天"
respuesta: "明天"
tipo: mc
enunciado: "我___去学校。"
variables:
  - uno_de(["今天", "昨天", "明天", "后天"])
```



### 25 — Sentimientos  
```yaml
metadata:
  materia: "idiomas-extranjeros/chino"
  tema: "listening-hsk1"
  nivel: "HSK1"
  tags: ["sentimientos", "completar"]
pasos:
  - "Escuchar el sentimiento mencionado."
  - "Escribir el término correcto para el estado emocional."
explicacion: "'开心' (kāixīn) significa feliz. En frases como '我很开心。' (Wǒ hěn kāixīn), expresa una emoción positiva."
respuesta: "开心"
respuestas_validas:
  - "开心"
  - "Kāixīn"
tipo: completar
enunciado: "我___。"
variables:
  - uno_de(["开心", "难过", "生气"])
```
