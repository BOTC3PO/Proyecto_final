# Materiales — Estructuras cristalinas y celdas unitarias (teoría)

> Tema del MAPA: `materiales/estructuras-cristalinas-y-celdas-unitarias`. Depende de `enlaces-y-estructura-atomica-de-los-materiales/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Qué es una red cristalina, las estructuras BCC, FCC y HCP y cómo se calcula la densidad de un metal.

---

## 1. Orden a escala atómica

En un sólido cristalino, los átomos se ordenan según un patrón que se repite en las tres direcciones del espacio, como los ladrillos de una pared perfecta. Ese patrón repetido se llama **red cristalina**. La unidad más chica que se repite y reproduce toda la estructura es la **celda unitaria**. Conocer la celda permite calcular densidades, entender cómo se deforman los metales y por qué el hierro cambia de comportamiento con la temperatura.

Los sólidos que no tienen ese orden de largo alcance son **amorfos**, como el vidrio.

## 2. Las tres estructuras metálicas más comunes

La mayoría de los metales cristaliza en una de tres celdas:

- **Cúbica centrada en el cuerpo (BCC)**: un átomo en cada vértice del cubo y uno en el centro. Cada celda contiene 2 átomos y cada átomo tiene 8 vecinos más cercanos (número de coordinación 8). Ejemplos: hierro a temperatura ambiente, cromo, tungsteno. Son metales que tienden a ser resistentes y menos dúctiles.
- **Cúbica centrada en las caras (FCC)**: un átomo en cada vértice y uno en el centro de cada cara. Contiene 4 átomos por celda y el número de coordinación es 12. Ejemplos: aluminio, cobre, oro, plata, níquel y el hierro a alta temperatura. Suelen ser muy dúctiles.
- **Hexagonal compacta (HCP)**: capas apiladas en una disposición hexagonal. El número de coordinación también es 12. Ejemplos: magnesio, zinc, titanio a temperatura ambiente. Tienen menos sistemas de deslizamiento, por lo que suelen ser menos dúctiles.

## 3. Factor de empaquetamiento

El **factor de empaquetamiento atómico (APF)** es la fracción del volumen de la celda ocupada por átomos, imaginándolos como esferas. Vale aproximadamente 0,68 para BCC y 0,74 para FCC y HCP, que son las estructuras más compactas posibles con esferas iguales. Es decir: aun en la mejor de las disposiciones, un cuarto del volumen es espacio vacío.

## 4. Relación entre el radio atómico y la arista

Si se tratan los átomos como esferas rígidas que se tocan:

- En BCC los átomos se tocan a lo largo de la diagonal del cubo: la arista vale a = 4R / √3.
- En FCC se tocan a lo largo de la diagonal de una cara: a = 2R√2.

## 5. Cálculo de la densidad

Con la estructura cristalina y el parámetro de red se puede calcular la densidad teórica:

densidad = (n · A) / (Vc · N_A)

donde n es el número de átomos por celda, A la masa atómica (g/mol), Vc el volumen de la celda (a³ para un cubo) y N_A el número de Avogadro (6,022 × 10²³ por mol). Ejemplo: el aluminio, FCC con n = 4, A = 26,98 g/mol y arista a = 0,405 nm = 4,05 × 10⁻⁸ cm. El volumen es unos 6,64 × 10⁻²³ cm³ y la densidad resulta de aproximadamente 2,70 g/cm³, que coincide con el valor medido.

## 6. Alotropía y polimorfismo

Algunos materiales cambian de estructura según la temperatura. El hierro puro es BCC hasta unos 912 °C, pasa a FCC hasta unos 1394 °C y vuelve a BCC antes de fundirse. El cambio de estructura cambia las propiedades: la FCC puede disolver mucho más carbono que la BCC, lo que está en la base de los tratamientos térmicos del acero. A este fenómeno en elementos se lo llama **alotropía**; en compuestos, **polimorfismo**. El carbono lo muestra bien: diamante y grafito tienen los mismos átomos con estructuras distintas y propiedades opuestas.

## 7. Direcciones y planos

Dentro del cristal hay direcciones y planos con distinta densidad de átomos. Los metales se deforman por deslizamiento sobre los planos más compactos y en las direcciones más compactas. Por eso los FCC, con más planos de deslizamiento, son más dúctiles que los HCP. Las propiedades pueden depender de la dirección en que se miden, lo que se llama anisotropía.
