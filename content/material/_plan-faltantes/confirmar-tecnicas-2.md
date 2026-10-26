# Para confirmar: temas de Electrónica (plan `tecnicas.md`)

Los 15 temas nuevos de `electronica/` se escribieron sin acceso a las fuentes sugeridas (Horowitz y Hill, Floyd, Mano, Sadiku, hojas de datos). Todo salió de conocimiento general y no fue contrastado con un libro o una norma. Lo que sigue está marcado para que lo revises.

## Datos y fórmulas a contrastar con fuente
- **Código de colores y series:** colores 0-9, tolerancias dorada 5 % y plateada 10 %, serie E12 (10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82). Conviene compararlos con una tabla IEC 60062 / IEC 60063.
- **Diodo:** caída de 0,7 V (silicio) y rango de 1,8 a 3,3 V para LED; Vdc = Vp/π (media onda) y 2Vp/π (onda completa); pérdida de 1,4 V en el puente.
- **Transistor:** β típico "cien o más", 0,7 V en base-emisor, uso de un factor de 2 para saturar.
- **555:** T = 1,1 R C; f = 1,44 / ((R1 + 2 R2) C); ciclo de trabajo (R1 + R2)/(R1 + 2 R2); umbrales de Vcc/3 y 2Vcc/3. Verificar contra la hoja de datos del fabricante.
- **ADC/DAC:** resolución = Vref / 2^n; código truncado; frecuencia de CD de 44,1 kHz.
- **UART/I2C/SPI:** trama 8N1 de 10 bits, direcciones de 7 bits en I2C, líneas SCLK/MOSI/MISO/CS.
- **Instrumentos:** Vrms = Vp/√2 (solo para senoides).
- **Red eléctrica argentina:** 220 V y 50 Hz (dicha de memoria; confirmar con la normativa vigente).

## Decisiones tuyas
- Los prerrequisitos de los 15 temas son deducidos del plan, con un cambio mío: `diodo-polarizacion-rectificacion-y-fuentes` también depende de `capacitor-rc-carga-y-descarga` (por el filtro de la fuente). Marcados "decisión de Claude, no pedida" en `electronica/dependencias.md`.
- Ninguno de los 15 tiene ID en el grafo de `troncos.md`; hay que decidir si se agregan nodos.
- Los temas `electronica/microcontrolador-entradas-y-salidas-digitales` usa nombres de funciones de Arduino (`pinMode`, `digitalWrite`, `digitalRead`): confirmar si querés mencionar esa plataforma en el material.
- `electronica/prototipado-protoboard-soldadura-y-seguridad` toca seguridad. Quedó limitado a baja tensión y con la advertencia de no experimentar con la red; confirmá el enfoque con tu criterio de seguridad.
- Los oficios (`tecnico-electromecanico`, `tecnico-en-automatizacion-y-robotica`, `electricista`) no se tocaron: aún no apuntan a estos temas como prerrequisito.
